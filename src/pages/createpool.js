import React from "react";
import {Link } from 'react-router-dom';
import "../App.css";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";

function CreatePool() {
  return (
    <div className="wapper">
      <Loader />
      <NavBar />
      <section class="banner inner-page">
        	<div class="banner-img"><img src="images/banner/contact-us.jpg" alt=""/></div>
            <div class="page-title">	
	            <div class="container">
                    <h1>CreatePool</h1>
                </div>
            </div>
        </section>
        <section class="breadcrumb">
        	<div class="container">
            	<ul>
                	<li><a href="#">Home</a></li>
                    <li><a href="#">Create Pool</a></li>
                </ul>
            </div>
        </section>
        <section class="contact-message">
        	<div class="container">
            	<div class="section-title">
                	<h2>Pool Settings</h2>
                </div>
                <div class="form-filde">
                    <form action="http://design.dev.drcsystems.ooo:8084/themeforest/academy/html/thank-you.html" method="post">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="input-box">
                                    <input type="text" placeholder="Question Statement" data-validation="required" name="quiznum"/>
                                </div>
                                <div class="input-box">
                                    <input type="text" placeholder="Marks" data-validation="required" name="time"/>
                                </div>
                                <div class="input-box">
                                    <input type="dropdown" placeholder="Type" data-validation="required" name="time"/>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="input-box">
                                    <textarea placeholder="Additional Instructions" data-validation="required" name="instr"></textarea>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="submit-box">
                                    <Link to={{pathname:"/coursedetails", state:{type: 1}}}>
                                        <input type="submit" value="Create" class="btn"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
  );
}

export default CreatePool;