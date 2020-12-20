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
                    <div class="banner-img"><img src="images/banner/quiz.jpg" alt="" /></div>
                    <div class="page-title">
                        <div class="container">
                            <h1>Quiz Intro</h1>
                        </div>
                    </div>
                </section>
                <section class="breadcrumb white-bg">
                    <div class="container">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Quiz</a></li>
                        </ul>
                    </div>
                </section>
                <section class="quiz-view">
                    <div class="container">
                        <div class="quiz-title">
                            <h2>General Quiz</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div class="row">
                            <div class="col-sm-4 col-md-3">
                                <div class="time-info">Total time </div>
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
                                <div class="quiz-intro">
                                    <h3>Introduction</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their </p>
                                    <div class="start-btn">
                                        <a href="/courses" class="btn">Start Quizz</a>
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
