import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";

function CreateClass() {
  const val = () => {
    console.log("Here");
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
            <h1>Create a class</h1>
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
              <a href="#">Create a class</a>
            </li>
          </ul>
        </div>
      </section>
      <section class="contact-message">
        <div class="container">
          <div class="section-title">
            <h2>Enter details to add a new class</h2>
          </div>
          <div class="form-filde">
            <form action="/courses">
              <div class="row">
                <div class="col-sm-6">
                  <div class="input-box">
                    <input
                      type="text"
                      placeholder="Class/Course Name"
                      data-validation="required"
                      name="name"
                    />
                  </div>
                  <div class="input-box">
                    <input
                      type="text"
                      placeholder="Section"
                      data-validation="required"
                      name="email"
                    />
                  </div>
                  <div class="input-box">
                    <input
                      type="text"
                      placeholder="Timings/Schedule"
                      data-validation="required"
                      name="subject"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="input-box">
                    <textarea
                      placeholder="Description"
                      data-validation="required"
                      name="message"
                    ></textarea>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="submit-box">
                    <Link to={{pathname:'/courses', state:{type: 1}}}>
                    <input type="submit" value="Create class" class="btn" />
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

export default CreateClass;
