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
              <h1>Quiz Result</h1>
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
                <a href="/quiz">Quiz</a>
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
                <div id="countdown_stop"></div>
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
                <div class="quiz-result">
                  <h3>Stats</h3>
                  <div class="result-info">
                    <div class="info-slide">
                      <p>
                        Average<span>0</span>
                      </p>
                    </div>
                    <div class="info-slide">
                      <p>
                        Max<span>0</span>
                      </p>
                    </div>
                    <div class="info-slide">
                      <p>
                        Min<span>0</span>
                      </p>
                    </div>
                  </div>
                  <div class="leaderboard">
                    <h3>leaderboard</h3>
                    <div class="qustion-review">
                      <p>
                        Lorem ipsum dolor sit amet,<span>0</span>
                      </p>
                    </div>
                    <div class="qustion-review">
                      <p>
                        Nunc malesuada dui id ex tristique<span>0</span>
                      </p>
                    </div>
                    <div class="qustion-review">
                      <p>
                        Sed rhoncus nunc id risus sollicitudin, <span>0</span>
                      </p>
                    </div>
                    <div class="qustion-review">
                      <p>
                        Morbi lobortis leo vitae justo tincidunt<span>0</span>
                      </p>
                    </div>
                    <div class="qustion-review">
                      <p>
                        Aliquam eu justo eget felis<span>0</span>
                      </p>
                    </div>
                    <div class="qustion-review">
                      <p>
                        Etiam non lacus consectetur<span>0</span>
                      </p>
                    </div>
                    <div class="qustion-review">
                      <p>
                        Pellentesque sagittis mi eu<span>0</span>
                      </p>
                    </div>
                    <div class="qustion-review">
                      <p>
                        Maecenas egestas turpis <span>0</span>
                      </p>
                    </div>
                    <div class="qustion-review">
                      <p>
                        Mauris aliquet dui non <span>0</span>
                      </p>
                    </div>
                    <div class="qustion-review">
                      <p>
                        Aenean ultricies arcu<span>0</span>
                      </p>
                    </div>
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
