import axios from "axios";
import { React, useEffect, useState } from "react";
import "../App.css";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
const axios = require("axios");

const AddQuestions = () => {
  const location = useLocation();

  const [questions, setQuestions] = useState([]);
  const [cid, setCid] = useState("");
  const [quizNum, setQuizNum] = useState("quizNum");
  const [weightage, setWeightage] = useState("weightage");
  const [startingTime, setStartingTime] = useState("startingtime");
  const [timer, setTimer] = useState("timer");
  const [date, setDate] = useState("date");
  const [additionalInstructions, setAdditionalInstructions] = useState(
    "additionalinstructions"
  );

  const handleSelected = (index) => {
    SetQuestions(
      questions.map((item, id) => {
        if (index === id) {
          return { ...item, selected: !item.selected };
        }
        return item;
      })
    );
  };

  const getQuestions = async () => {
    try {
      const res = await axios.post("http://locahost:8000/get-questions", {
        token: localStorage.token,
        cid: cid,
      });
      setQuestions(res.data.questions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setCid(location.state.cid);
    getQuestions();
    setDate(location.state.date);
    setWeightage(location.state.weightage);
    setQuizNum(location.state.quizNum);
    setStartingTime(location.state.startingTime);
    setTimer(location.state.timer);
    setAdditionalInstructions(location.state.additionalInstructions);
  }, []);

  const printFunc = () => {
    console.log("Here");
  };

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
        count += Element.marks;
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
          <div class="contact-boxView">
            <div class="row">
              <div>
                <div class="contact-box yello">
                  <div class="icon-box">
                    <i class="fa fa-list-ul"></i>
                  </div>
                  <h4>Add questions</h4>
                  <a href="/addquestions">Choose from Pool</a>
                </div>
              </div>
            </div>
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
                                <div class="name">{data.statement}</div>
                              </div>
                            </td>
                            <td>
                              <div class="product-details">
                                <div class="name">{data.type}</div>
                              </div>
                            </td>
                            <td>
                              <div class="product-details">
                                <div class="name">{data.marks}</div>
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
                        printFunc();
                      }}
                    >
                      Add selected question(s)
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        printFunc();
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
