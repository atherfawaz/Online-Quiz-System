import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
const axios = require("axios");

function CourseGrid() {
  const location = useLocation();
  const isStudent = localStorage.isStudent;
  
  const [questions, SetQuestions] = useState([
    { CourseName: "SE", CourseInstructor: "Bander", selected: false },
    { CourseName: "SE", CourseInstructor: "Bander", selected: false },
    { CourseName: "SE", CourseInstructor: "Bander", selected: false },
  ]);

  const RenderCourses = () => {
    axios
      .post("http://localhost:8000/get-courses", {
       token: localStorage.token,
       uid: localStorage.uid
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div class="wapper">
      <Loader />
      <NavBar />
      <section class="banner inner-page">
        <div class="banner-img">
          <img src="images/banner/courses-banner.jpg" alt="" />
        </div>
        <div class="page-title">
          <div class="container">
            <h1>Courses</h1>
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
              <a href="#">All courses</a>
            </li>
          </ul>
        </div>
      </section>
      {isStudent ? (
        <div></div>
      ) : (
        <section class="create-classes">
          <div></div>
          <div></div>

          <button class="btn" type="submit">
            Create a Class
          </button>
        </section>
      )}
      <section class="courses-view">
        <div class="container">
          <div class="row">
            <>
              {questions.map((data, id) => {
                return (
                  <div class="col-sm-6 col-md-3">
                    <div class="course-post">
                      <div class="img">
                        <img src="images/courses/courses-img4.jpg" alt="" />
                        <div class="icon">
                          <a href="#">
                            <img src="images/book-icon.png" alt="" />
                          </a>
                        </div>
                      </div>
                      <div class="info">
                        <div class="name">{data.CourseName}</div>
                        <div class="expert">
                          <span>By </span>
                          {data.CourseInstructor}
                        </div>
                      </div>
                      <div class="product-footer">
                        <div class="comment-box"></div>
                        <div class="view-btn">
                          {isStudent ? (
                            <button type="submit" class="btn">
                              {" "}
                              view more
                            </button>
                          ) : (
                            <button type="submit" class="btn">
                              {" "}
                              view more
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CourseGrid;
