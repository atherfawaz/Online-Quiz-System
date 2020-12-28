import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "../App.css";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";

const CreateQuiz = () => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setCid(location.state.cid);
  }, [location]);

  const [cid, setCid] = useState("");
  const [quizNum, setQuizNum] = useState("quizNum");
  const [weightage, setWeightage] = useState("weightage");
  const [startingTime, setStartingTime] = useState("startingtime");
  const [timer, setTimer] = useState("timer");
  const [date, setDate] = useState("date");
  const [additionalInstructions, setAdditionalInstructions] = useState(
    "additionalinstructions"
  );

  const addQuestions = () => {
    history.replace({
      pathname: "./addQuestions",
      state: {
        cid: cid,
        quizNum: quizNum,
        weightage: weightage,
        startingTime: startingTime,
        timer: timer,
        date: date,
        additionalInstructions: additionalInstructions,
      },
    });
  };

  return (
    <div className="wapper">
      <Loader />
      <NavBar />
      <section class="banner inner-page">
        <div class="banner-img">
          <img src="images/banner/contact-us.jpg" alt="" />
        </div>
        <div class="page-title">
          <div class="container">
            <h1>Create Quiz</h1>
          </div>
        </div>
      </section>
      <section class="breadcrumb">
        <div class="container">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Create Quiz</a>
            </li>
          </ul>
        </div>
      </section>
      <section class="contact-message">
        <div class="container">
          <div class="section-title">
            <h2>Quiz Settings</h2>
          </div>
          <div class="form-filde">
            <form onSubmit={addQuestions}>
              <div class="row">
                <div class="col-sm-6">
                  <div class="input-box">
                    <input
                      type="text"
                      placeholder="Quiz #"
                      data-validation="required"
                      name="quiznum"
                      onChange={(e) => {
                        setQuizNum(e.target.value);
                      }}
                    />
                  </div>
                  <div class="input-box">
                    <input
                      type="number"
                      placeholder="Weightage"
                      data-validation="required"
                      name="weightage"
                      onChange={(e) => {
                        setWeightage(e.target.value);
                      }}
                    />
                  </div>
                  <div class="input-box">
                    <input
                      type="text"
                      placeholder="Starting time"
                      data-validation="required"
                      name="time"
                      onChange={(e) => {
                        setStartingTime(e.target.value);
                      }}
                    />
                  </div>
                  <div class="input-box">
                    <input
                      type="number"
                      placeholder="Time Required / Duration"
                      data-validation="required"
                      name="duration"
                      onChange={(e) => {
                        setTimer(e.target.value);
                      }}
                    />
                  </div>
                  <div class="input-box">
                    <input
                      type="date"
                      placeholder="Date"
                      data-validation="required"
                      name="date"
                      onChange={(e) => {
                        setDate(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="input-box">
                    <textarea
                      placeholder="Additional Instructions"
                      data-validation="required"
                      name="instr"
                      onChange={(e) => {
                        setAdditionalInstructions(e.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="submit-box">
                    <input type="submit" value="Choose questions" class="btn" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateQuiz;
