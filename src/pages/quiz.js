import React from "react";
import "../App.css";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";

function quiz() {
  return (
    <div className="wapper">
      <Loader />
      <NavBar />
      <section class="banner inner-page">
        <div class="banner-img">
          <img src="images/banner/quiz.jpg" alt="" />
        </div>
        <div class="page-title">
          <div class="container">
            <h1>Quiz</h1>
          </div>
        </div>
      </section>
      <section class="breadcrumb white-bg">
        <div class="container">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Quiz</a>
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
              <div id="countdown"></div>
              <div class="qustion-list">
                <div class="qustion-slide fill">
                  <div class="qustion-number">Question 1</div>
                  <span>2</span>
                </div>
                <div class="qustion-slide active">
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
              <div class="qustion-main">
                <div class="qustion-box">
                  <div class="qustion">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </div>
                  <div class="ans">
                    <div class="ans-slide">
                      <label class="label_radio" for="radio-01">
                        <input
                          name="sample-radio"
                          id="radio-01"
                          value="1"
                          type="radio"
                        />
                        simply dummy
                      </label>
                    </div>
                    <div class="ans-slide">
                      <label class="label_radio" for="radio-02">
                        <input
                          name="sample-radio"
                          id="radio-02"
                          value="1"
                          type="radio"
                        />
                        Lorem Ipsum
                      </label>
                    </div>
                    <div class="ans-slide">
                      <label class="label_radio" for="radio-03">
                        <input
                          name="sample-radio"
                          id="radio-03"
                          value="1"
                          type="radio"
                        />
                        typesetting industry
                      </label>
                    </div>
                    <div class="ans-slide">
                      <label class="label_radio" for="radio-04">
                        <input
                          name="sample-radio"
                          id="radio-04"
                          value="1"
                          type="radio"
                        />
                        printing and typesetting industry
                      </label>
                    </div>
                  </div>
                  <div class="save-btn">
                    <a href="#" class="btn2">
                      Save Ans
                    </a>
                  </div>
                  <div class="btn-slide">
                    <a href="#" class="btn">
                      <i class="fa fa-angle-left"></i>
                    </a>
                    <a href="#" class="btn">
                      <i class="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
                <div class="submit-quiz">
                  <a href="quiz-result.html" class="btn">
                    submit quiz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default quiz;
