import React from "react";
import "../App.css";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";

function QuizIntro() {
  return (
    <div className="wapper">
      <Loader />
      <NavBar />
      <div>
        <section class="banner inner-page">
          <div class="banner-img">
            <img src="images/banner/quiz.jpg" alt="" />
          </div>
          <div class="page-title">
            <div class="container">
              <h1>Quiz Intro</h1>
            </div>
          </div>
        </section>
        <section class="breadcrumb white-bg">
          <div class="container">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Quiz</a>
              </li>
            </ul>
          </div>
        </section>
        <section class="quiz-view">
          <div class="container">
            <div class="quiz-title">
              <h2>General Quiz</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div class="row">
              <div class="col-sm-4 col-md-3">
                <div class="time-info">Total time </div>
                <div id="countdown_stop"></div>
                <div class="qustion-list">
                  <div class="qustion-slide">
                    <div class="qustion-number">Question 1</div>
                    <span>2</span>
                  </div>
                  <div class="qustion-slide">
                    <div class="qustion-number">Question 2</div>
                    <span>2</span>
                  </div>
                  <div class="qustion-slide">
                    <div class="qustion-number">Question 3</div>
                    <span>2</span>
                  </div>
                  <div class="qustion-slide">
                    <div class="qustion-number">Question 4</div>
                    <span>2</span>
                  </div>
                  <div class="qustion-slide">
                    <div class="qustion-number">Question 5</div>
                    <span>2</span>
                  </div>
                  <div class="qustion-slide">
                    <div class="qustion-number">Question 6</div>
                    <span>2</span>
                  </div>
                  <div class="qustion-slide">
                    <div class="qustion-number">Question 7</div>
                    <span>2</span>
                  </div>
                  <div class="qustion-slide">
                    <div class="qustion-number">Question 8</div>
                    <span>2</span>
                  </div>
                  <div class="qustion-slide">
                    <div class="qustion-number">Question 9</div>
                    <span>2</span>
                  </div>
                  <div class="qustion-slide">
                    <div class="qustion-number">Question 10</div>
                    <span>2</span>
                  </div>
                </div>
              </div>
              <div class="col-sm-8 col-md-9">
                <div class="quiz-intro">
                  <h3>Introduction</h3>
                  <p>Here we will add quiz details from DB </p>
                  <p>
                    o Start Time o End Time o Duration o Marks o Weightage o
                    Instructions o Number of questions o Number of pages
                  </p>
                  <div class="start-btn">
                    <a href="/quiz" class="btn">
                      Start Quiz
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default QuizIntro;
