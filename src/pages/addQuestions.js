import { React, useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "../App.css";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
const axios = require("axios");

const AddQuestions = () => {
  const location = useLocation();
  const history = useHistory();

  const [questions, setQuestions] = useState([]);
  const [cid, setCid] = useState("");
  const [quizNum, setQuizNum] = useState("quizNum");
  const [weightage, setWeightage] = useState("weightage");
  const [startingTime, setStartingTime] = useState("12");
  const [timer, setTimer] = useState("timer");
  const [date, setDate] = useState("date");
  const [additionalInstructions, setAdditionalInstructions] = useState(
    "additionalinstructions"
  );

  const handleSelected = (index) => {
    setQuestions(
      questions.map((item, id) => {
        if (index === id) {
          return { ...item, selected: !item.selected };
        }
        return item;
      })
    );
  };

  const sendQuestions = async () => {
    try {
      console.log("in send questions ", startingTime);
      let mcqs = [];
      let fib = [];
      let cmatch = [];
      let short = [];
      let long = [];
      questions
        .filter((e) => {
          return e.type == "mcq" && e.selected;
        })
        .forEach((elem) => mcqs.push(elem.question._id));
      questions
        .filter((e) => {
          return e.type == "fib" && e.selected;
        })
        .forEach((elem) => fib.push(elem.question._id));
      questions
        .filter((e) => {
          return e.type == "cmatch" && e.selected;
        })
        .forEach((elem) => cmatch.push(elem.question._id));
      questions
        .filter((e) => {
          return e.type == "short" && e.selected;
        })
        .forEach((elem) => short.push(elem.question._id));
      questions
        .filter((e) => {
          return e.type == "long" && e.selected;
        })
        .forEach((elem) => long.push(elem.question._id));

      const res = await axios.post("http://localhost:8000/create-quiz", {
        token: localStorage.token,
        cid: cid,
        qno: Number(quizNum),
        mcqs: mcqs,
        fib: fib,
        cmatch: cmatch,
        short: short,
        long: long,
        date: date,
        start_time: startingTime,
        timer: Number(timer),
        total_marks: countMarks(),
        weightage: Number(weightage),
        instruction: additionalInstructions,
      });

      console.log(res);
      console.log("cid in send func: ", cid);
      history.replace({ pathname: "./courseDetails", state: { cid: cid } });
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      }
      if (error.requst) {
        console.log(error.request);
      } else console.log(error);
    }
  };

  const getQuestions = async () => {
    try {
      console.log("token: ", localStorage.token);
      console.log("cid:", location.state.cid);
      const res = await axios.post("http://localhost:8000/get-questions", {
        token: localStorage.token,
        cid: location.state.cid,
      });

      var AllQuestions = [];
      res.data.MCQ.forEach((element) =>
        AllQuestions.push({ type: "mcq", question: element, selected: false })
      );
      res.data.Short.forEach((element) =>
        AllQuestions.push({ type: "short", question: element, selected: false })
      );
      res.data.Long.forEach((element) =>
        AllQuestions.push({ type: "long", question: element, selected: false })
      );
      res.data.FIB.forEach((element) =>
        AllQuestions.push({ type: "fib", question: element, selected: false })
      );
      res.data.CMatch.forEach((element) =>
        AllQuestions.push({
          type: "cmatch",
          question: element,
          selected: false,
        })
      );

      setQuestions(AllQuestions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("cid: ", location.state.cid);
    setCid(location.state.cid);
    getQuestions();
    setDate(location.state.date);
    setWeightage(location.state.weightage);
    setQuizNum(location.state.quizNum);
    setStartingTime(location.state.startingTime);
    console.log("incoming starting time: ", location.state.startingTime);
    console.log("set starting time: ", startingTime);
    setTimer(location.state.timer);
    setAdditionalInstructions(location.state.additionalInstructions);
  }, [location]);

  const countSelected = () => {
    let count = 0;
    questions.forEach((Element) => {
      if (Element.selected) {
        count += 1;
      }
    });

    return count;
  };

  const countMarks = () => {
    let count = 0;
    questions.forEach((Element) => {
      if (Element.selected) {
        count += Element.question.marks;
      }
    });

    return count;
  };

  return (
    <div className="wapper">
      <Loader />
      <NavBar />
      <section class="contact-detail">
        <div class="container">
          <div class="section-title">
            <h2>Questions</h2>
            <p>
              Please choose questions from the question pool linked to the class
            </p>
          </div>
        </div>
      </section>
      <div>
        <section class="cart-page">
          <div class="container">
            <div class="table-view">
              <div class="cart-table">
                <table>
                  <thead>
                    <tr>
                      <th>Statement</th>
                      <th>Type</th>
                      <th>Marks</th>
                      <th>Selected</th>
                    </tr>
                  </thead>
                  <tbody>
                    <>
                      {questions.map((data, id) => {
                        return (
                          <tr key={id}>
                            <td>
                              <div class="product-details">
                                <div class="name">{data.question.question}</div>
                              </div>
                            </td>
                            <td>
                              <div class="product-details">
                                <div class="name">{data.type}</div>
                              </div>
                            </td>
                            <td>
                              <div class="product-details">
                                <div class="name">{data.question.marks}</div>
                              </div>
                            </td>
                            <td>
                              <div class="product-details">
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleSelected(id);
                                  }}
                                >
                                  {data.selected ? "unselect" : "select"}
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </>
                  </tbody>
                </table>
              </div>
              <div class="cart-total">
                <table>
                  <tbody>
                    <tr>
                      <td>Total Questions:</td>
                      <td>{countSelected()}</td>
                    </tr>
                    <tr>
                      <td>Total Marks:</td>
                      <td>{countMarks()}</td>
                    </tr>
                  </tbody>
                  <div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        sendQuestions();
                      }}
                    >
                      Add selected question(s)
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Generate random question(s)
                    </button>
                  </div>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddQuestions;
