import React from "react";
import "../App.css";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";

function ViewQuizHistory() {
  return (
    <div className="wapper">
      <Loader />
      <NavBar />
      <section class="banner inner-page">
        	<div class="banner-img"><img src="images/banner/contact-us.jpg" alt=""/></div>
            <div class="page-title">	
	            <div class="container">
                    <h1>ViewQuizHistory</h1>
                </div>
            </div>
        </section>
        <section class="breadcrumb">
        	<div class="container">
            	<ul>
                	<li><a href="#">Home</a></li>
                    <li><a href="#">View Quiz History</a></li>
                </ul>
            </div>
        </section>
        <div class="archived-course">
        	<div class="container">
            	<div class="course-archivedInfo">
                	<div class="name">Course Progress for Student "John Doe"</div>
					<div class="progress-title">
                    	<h3>Your enrollment: Basic Time Management Course</h3>
                        <p>Analyzing and Visualizing Data with Power BI</p>
                    </div>
                    <div class="progress-chart">
                    	<img src="images/progress-chart.jpg" alt=""/>
                    </div>
                    <div class="chapters">
                        <div class="chapters-title">Introduction</div>
                        <div class="chapters-info">
                            <div class="chapters-slide">
                                <h4><a href="#">Basic </a><span>None </span></h4>
                                <p>No problem scores in this section </p>
                            </div>
                            <div class="chapters-slide">
                                <h4><a href="#">Installation  </a><span>None </span></h4>
                                <p>No problem scores in this section </p>
                            </div>
                        </div>
                    </div>
                    <div class="chapters">
                        <div class="chapters-title">Test General Knowledge</div>
                        <div class="chapters-info">
                            <div class="chapters-slide">
                                <h4><a href="#">Phase1 </a> (0/9) <span>None </span></h4>
                                <p> Practice Scores: 0/2 &nbsp; 0/4 &nbsp; 0/2 &nbsp; 0/1 </p>
                            </div>
                            <div class="chapters-slide">
                                <h4><a href="#">Phase2  </a> (0/3) <span>None </span></h4>
                                <p> Practice Scores: 0/2 &nbsp; 0/1 </p>
                            </div>
                        </div>
                    </div>
                    <div class="chapters">
                        <div class="chapters-title">Exam</div>
                        <div class="chapters-info">
                            <div class="chapters-slide">
                                <h4><a href="#">Phase1 with hint </a> (0/5) <span>None </span></h4>
                                <p> Practice Scores: 0/1 &nbsp; 0/1 &nbsp; 0/1 &nbsp; 0/1 </p>
                            </div>
                            <div class="chapters-slide">
                                <h4><a href="#">Phase2  </a> (0/6) <span>None </span></h4>
                                <p> Practice Scores: 0/1 &nbsp; 0/1 &nbsp; 0/2 &nbsp; 0/1 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ViewQuizHistory;