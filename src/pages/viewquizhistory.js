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
        
    </div>
  );
}

export default ViewQuizHistory;