const express = require('express');
const cors = require('cors');
const CRED = require("./cred");
const mongoose = require("mongoose");
const joi = require("joi");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

// db models
const User = require("./models/User");
const Course = require("./models/Course");
const MCQ = require("./models/MCQ");
const Question = require("./models/Question");
const QArr = require('./models/QArr');
const FIB = require("./models/FIB");
const CMatch = require("./models/CMatch");

// necessary middleware
var app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// establishing connection to database
mongoose.connect(CRED.DB, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("connected to db")
    }
});

// endpoints
app.post('/login', async (req, res) => {
    console.log(req.body);
    const schema = joi.object({
        username: joi.string().min(6).max(100).required(),
        password: joi.string().alphanum().min(6).required()
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ "error": error.details[0].message });
    console.log("validated");

    const user = await User.findOne({ name: req.body.username });
    if (!user) return res.status(400).json({ "error": "invalid email" });
    console.log("exists");

    const valid_pass = await bcrypt.compare(req.body.password, user.password)
    if (!valid_pass) {
        console.log(valid_pass, "\nincorrect password");
        res.status(400).json({ "error": "incorrect pasword" });
        return;
    }

    const token = jwt.sign({ id: user.id }, CRED.SECRET);

    console.log("valid password");
    console.log(user.id);
    res.status(200).json({ 'msg': "successful", 'uid': user.id, "type": user.type, "token": token });
});

app.post('/register', async (req, res) => {
    // perform field validaiton
    const schema = joi.object({
        name: joi.string().min(6).max(100).required(),
        email: joi.string().min(5).email().required(),
        password: joi.string().alphanum().min(6).required(),
        type: joi.number().integer().min(0).max(1).required()
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ "error": error.details[0].message });

    // check if already exists in database
    const email_exists = await User.findOne({ email: req.body.email });
    if (email_exists) return res.status(400).json({ "error": "email already exists" });

    // encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);

    // save user in db
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashed,
        type: Number(req.body.type),
        classes: []
    });
    try {
        const result = await user.save();
        res.status(200).json({ "msg": "success", "data": result });
    }
    catch (e) {
        console.log(e); res.status(400).json({ "e": error });
    }
});

app.post('/get-courses', async (req, res) => {
    const schema = joi.object({
        token: joi.string().required(),
        uid: joi.string().required()
    })

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ "error": error.details[0].message });

    try {
        jwt.verify(req.body.token, CRED.SECRET);
        const user = await User.findById(req.body.uid);
        const courses = await Course.find({
            "_id": {
                $in: user.classes
            }
        });
        res.status(200).json({ 'courses': courses });
    }
    catch (err) {
        console.log("error\n", err);
        res.status(400).json({ "error": err });
        return;
    }
});

app.post("/create-course", async (req, res) => {
    const schema = joi.object({
        token: joi.string().required(),
        tuid: joi.string().required(),
        name: joi.string().min(3).max(5).required(),
        code: joi.string().alphanum().min(5).max(6).required(),
        semester: joi.number().integer().min(1).max(12).required()
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ "error": error });

    try {

        jwt.verify(req.body.token, CRED.SECRET)
        const teacher = await User.findById(req.body.tuid);
        const course = new Course({
            name: req.body.name,
            instructor: teacher.name,
            code: req.body.code,
            semester: req.body.semester,
            pool: new QArr(),
            quiz: []
        });

        const result = await course.save();
        teacher.classes.push(result.id);
        await teacher.save();
        res.status(200).json({ "data": result });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ "error": err });
    }
});

app.post("/get-questions", async (req, res) => {
    const schema = joi.object({
        token: joi.string().required,
        cid: joi.string().req(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ "error": error });

    try {
        jwt.verify(req.body.token, CRED.SECRET);
        const course = await Course.findById(req.body.cid);
        res.status(200).json({
            "MCQ": course.pool.MCQ,
            "Short": course.pool.Short,
            "Long": course.pool.Long,
            "FIB": course.pool.FIB,
            "CMatch": course.pool.CMatch
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ "error": err });
    }
});

app.post("/add-question", async (req, res) => {
    const schema = joi.object({
        token: joi.string().required(),
        cid: joi.string().required(),
        type: joi.string().min(3).max(8).required(),
        question: joi.any().required()
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ "error": error });

    try {
        jwt.verify(req.body.token, CRED.SECRET);
        const course = await Course.findById(req.body.cid);
        switch (req.body.type) {
            case "long":
                const long = new Question({
                    question: req.body.question.question,
                    keywords: req.body.question.keywords,
                    marks: req.body.question.marks
                });
                course.pool.Long.push(long);
                break;
            case "short":
                const short = new Question({
                    question: req.body.question.question,
                    keywords: req.body.question.keywords,
                    marks: req.body.question.marks
                });
                course.pool.Short.push(short);
                break;
            case "mcq":
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
                    marks: req.body.question.marks
                });
                course.pool.Short.FIB.push(fib);
                break;
            case "cmatch":
                const cmatch = new CMatch({
                    statements: req.body.question.statements,
                    answers: req.body.question.answers,
                    correct: req.body.questions.correct,
                    marks: req.body.question.marks
                });
                course.pool.Short.CMatch.push(cmatch);
                break;
            default:
                break;
        }
        const result = await course.save();
        res.status(200).json({"result": result});
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ "error": err });
    }
});

//server start notification
var server = app.listen(8000, () => {
    console.log("Server is listnening on the port 8000");
});