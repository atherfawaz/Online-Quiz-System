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
                    <h1>Quiz History</h1>
                </div>
            </div>
        </section>
        <section class="breadcrumb">
        	<div class="container">
            	<ul>
                	<li><a href="#">Home</a></li>
                    <li><a href="#">Quiz History</a></li>
                </ul>
            </div>
        </section>
        <div class="archived-course">
        	<div class="container">
            	<div class="course-archivedInfo">
                	<div class="name">Quiz History for CS104</div>
					<div class="progress-title">
                    	<h3>Introduction to React</h3>
                    </div>
                    <div class="progress-chart">
                    	<img src="images/progress-chart.jpg" alt=""/>
                    </div>
                    <div class="chapters">
                        <div class="chapters-title">Quiz 1</div>
                        <div class="chapters-info">
                        <div class="chapters-slide">
                                <h4><a href="#">Total Score </a> (0/9) <span>None </span></h4>
                                <p> Component Scores: 0/2 &nbsp; 0/4 &nbsp; 0/2 &nbsp; 0/1 </p>
                            </div>
                        </div>
                    </div>
                    <div class="chapters">
                        <div class="chapters-title">Quiz 2</div>
                        <div class="chapters-info">
                            <div class="chapters-slide">
                                <h4><a href="#">Total Score </a> (0/9) <span>None </span></h4>
                                <p> Component Scores: 0/2 &nbsp; 0/4 &nbsp; 0/2 &nbsp; 0/1 </p>
                            </div>
                        </div>
                    </div>
                    <div class="chapters">
                        <div class="chapters-title">Quiz 3</div>
                        <div class="chapters-info">
                            <div class="chapters-slide">
                                <h4><a href="#">Total Score </a> (0/5) <span>None </span></h4>
                                <p> Component Scores: 0/1 &nbsp; 0/1 &nbsp; 0/1 &nbsp; 0/2 </p>
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