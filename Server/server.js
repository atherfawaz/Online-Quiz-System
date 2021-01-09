const express = require("express");
const cors = require("cors");
const CRED = require("./cred");
const mongoose = require("mongoose");
const joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require('path');
const publicPath = path.join(__dirname, "..", "build");
const port = process.env.PORT || 8000;



// db models
const User = require("./models/User");
const Course = require("./models/Course");
const MCQ = require("./models/MCQ");
const Question = require("./models/Question");
const QArr = require("./models/QArr");
const FIB = require("./models/FIB");
const CMatch = require("./models/CMatch");
const Quiz = require("./models/Quizjs");
const QuizStat = require("./models/QuizStat");

// necessary middleware
var app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static(publicPath));


// establishing connection to database
mongoose.connect(
  CRED.DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected to db");
    }
  }
);


// default end point to load react app

if(process.env.NODE_ENV === 'production'){
  const path  =  require('path');
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(publicPath,'index.html'))
  })
}
else{
  app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
  });
}

// REST  endpoints
app.post("/login", async (req, res) => {
  console.log(req.body);
  const schema = joi.object({
    username: joi.string().min(6).max(100).required(),
    password: joi.string().alphanum().min(6).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  console.log("validated");

  const user = await User.findOne({ name: req.body.username });
  if (!user) return res.status(400).json({ error: "invalid email" });
  console.log("exists");

  const valid_pass = await bcrypt.compare(req.body.password, user.password);
  if (!valid_pass) {
    console.log(valid_pass, "\nincorrect password");
    res.status(400).json({ error: "incorrect pasword" });
    return;
  }

  const token = jwt.sign({ id: user.id }, CRED.SECRET);

  console.log("valid password");
  console.log(user.id);
  res
    .status(200)
    .json({ msg: "successful", uid: user.id, type: user.type, token: token });
});

app.post("/register", async (req, res) => {
  // perform field validaiton
  const schema = joi.object({
    name: joi.string().min(6).max(100).required(),
    email: joi.string().min(5).email().required(),
    password: joi.string().alphanum().min(6).required(),
    type: joi.number().integer().min(0).max(1).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  // check if already exists in database
  const email_exists = await User.findOne({ email: req.body.email });
  if (email_exists)
    return res.status(400).json({ error: "email already exists" });

  // encrypt password
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(req.body.password, salt);

  // save user in db
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashed,
    type: Number(req.body.type),
    classes: [],
  });
  try {
    const result = await user.save();
    res.status(200).json({ msg: "success", data: result });
  } catch (e) {
    console.log(e);
    res.status(400).json({ e: error });
  }
});

app.post("/get-courses", async (req, res) => {
  const schema = joi.object({
    token: joi.string().required(),
    uid: joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    jwt.verify(req.body.token, CRED.SECRET);
    const user = await User.findById(req.body.uid);
    const courses = await Course.find({
      _id: {
        $in: user.classes,
      },
    });
    res.status(200).json({ courses: courses });
  } catch (err) {
    console.log("error\n", err);
    res.status(400).json({ error: err });
    return;
  }
});

app.post("/create-course", async (req, res) => {
  const schema = joi.object({
    token: joi.string().required(),
    tuid: joi.string().required(),
    name: joi.string().min(3).max(5).required(),
    code: joi.string().alphanum().min(5).max(6).required(),
    semester: joi.number().integer().min(1).max(12).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error });

  try {
    jwt.verify(req.body.token, CRED.SECRET);
    const teacher = await User.findById(req.body.tuid);
    const course = new Course({
      name: req.body.name,
      instructor: teacher.name,
      code: req.body.code,
      semester: req.body.semester,
      pool: new QArr(),
      quiz: [],
    });

    const result = await course.save();
    teacher.classes.push(result.id);
    await teacher.save();
    res.status(200).json({ data: result });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
  }
});

app.post("/get-questions", async (req, res) => {
  const schema = joi.object({
    token: joi.string().required(),
    cid: joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error });

  try {
    jwt.verify(req.body.token, CRED.SECRET);
    const course = await Course.findById(req.body.cid);
    res.status(200).json({
      MCQ: course.pool.MCQ,
      Short: course.pool.Short,
      Long: course.pool.Long,
      FIB: course.pool.FIB,
      CMatch: course.pool.CMatch,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
  }
});

app.post("/add-question", async (req, res) => {
  const schema = joi.object({
    token: joi.string().required(),
    cid: joi.string().required(),
    type: joi.string().required(),
    question: joi.required(),
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error });

  try {
    jwt.verify(req.body.token, CRED.SECRET);
    const course = await Course.findById(req.body.cid);
    switch (req.body.type) {
      case "long":
        const long = new Question({
          question: req.body.question.question,
          keywords: req.body.question.keywords,
          marks: req.body.question.marks,
        });
        course.pool.Long.push(long);
        break;
      case "short":
        const short = new Question({
          question: req.body.question.question,
          keywords: req.body.question.keywords,
          marks: req.body.question.marks,
        });
        course.pool.Short.push(short);
        break;
      case "mcqs":
        const mcq = new MCQ({
          question: req.body.question.question,
          choices: req.body.question.choices,
          correct: req.body.question.correct,
          marks: req.body.question.marks,
        });
        course.pool.MCQ.push(mcq);
        break;
      case "fib":
        const fib = new FIB({
          question: req.body.question.question,
          answer: req.body.question.answer,
          marks: req.body.question.marks,
        });
        course.pool.FIB.push(fib);
        break;
      case "cmatch":
        const cmatch = new CMatch({
          statements: req.body.question.statements,
          answers: req.body.question.answers,
          correct: req.body.question.correct,
          marks: req.body.question.marks,
        });
        course.pool.CMatch.push(cmatch);
        break;
      default:
        break;
    }
    const result = await course.save();
    res.status(200).json({ result: result });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
  }
});

app.post("/create-quiz", async (req, res) => {
  const schema = joi.object({
    token: joi.string().required(),
    cid: joi.string().required(),
    qno: joi.number().integer().min(0).required(),
    mcqs: joi.array().required(),
    fib: joi.array().required(),
    cmatch: joi.array().required(),
    short: joi.array().required(),
    long: joi.array().required(),
    date: joi.date().required(),
    start_time: joi.string(),
    timer: joi.number().required(),
    total_marks: joi.number().integer().min(1).max(100).required(),
    weightage: joi.number().required(),
    instruction: joi.string(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error });

  try {
    jwt.verify(req.body.token, CRED.SECRET);
    const course = await Course.findById(req.body.cid);
    const questions = new QArr({
      MCQ: req.body.mcqs,
      Long: req.body.long,
      Short: req.body.short,
      FIB: req.body.fib,
      CMatch: req.body.cmatch,
    });

    const quiz = new Quiz({
      date: req.body.date,
      timer: req.body.timer,
      start_time: req.body.start_time,
      questions: questions,
      course_id: req.body.cid,
      total_marks: req.body.total_marks,
      weightage: req.body.weightage,
      instruction: req.body.instruction,
    });
    //TODO: Add QuizStat init here
    course.quiz.push(quiz);
    const result = await course.save();
    res.status(200).json({ result: result });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
  }
});

app.post("/get-quiz", async (req, res) => {
  const schema = joi.object({
    token: joi.string().required(),
    qid: joi.string().required(),
    cid: joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error });

  try {
    jwt.verify(req.body.token, CRED.SECRET);
    const course = await Course.findById(req.body.cid);
    const quiz = course.quiz.find((x) => x._id == req.body.qid);
    // .find(x => x["_id"] === req.body.qid);
    console.log(quiz);

    var AllQuestions = [];
    quiz.questions.MCQ.forEach((element) => {
      const found = course.pool.MCQ.find((x) => x._id == element);
      if (found) {
        AllQuestions.push({ type: "mcq", question: found });
      }
    });

    quiz.questions.Short.forEach((element) => {
      const found = course.pool.Short.find((x) => x._id == element);
      if (found) {
        AllQuestions.push({ type: "short", question: found });
      }
    });

    quiz.questions.Long.forEach((element) => {
      const found = course.pool.Long.find((x) => x._id == element);
      if (found) {
        AllQuestions.push({ type: "long", question: found });
      }
    });

    quiz.questions.FIB.forEach((element) => {
      const found = course.pool.FIB.find((x) => x._id == element);
      if (found) {
        AllQuestions.push({ type: "fib", question: found });
      }
    });

    quiz.questions.CMatch.forEach((element) => {
      const found = course.pool.CMatch.find((x) => x._id == element);
      if (found) {
        AllQuestions.push({ type: "cmatch", question: found });
      }
    });

    res.status(200).json({
      questions: AllQuestions,
      Time: quiz.timer,
      Weightage: quiz.weightage,
      Instruction: quiz.instruction,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
  }
});

//server start notification
app.listen(port, () => {
  console.log("Server is listening on the port 8000");
});
