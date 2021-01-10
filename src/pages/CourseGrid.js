import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
const axios = require("axios");

function CourseGrid() {
  const history = useHistory();
  const isStudent = localStorage.isStudent;
  console.log(localStorage.isStudent);

  const [courses, SetCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, [isStudent]);

  const forwardClass = (arg) => {
    history.replace({ pathname: "./courseDetails", state: { cid: arg._id } });
  };

  const getCourses = async () => {
    axios
      .post("/get-courses", {
        token: localStorage.token,
        uid: localStorage.uid,
      })
      .then(function (response) {
        console.log(response);
        SetCourses(response.data.courses);
        return;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const renderButtons = (test) => {
    if (test === true) {
      console.log("is student is true");
      return (
        <section class="create-classes">
          <button class="btn" type="submit">
            Join a Class
          </button>
        </section>
      );
    } else {
      return (
        <section class="create-classes">
          <button
            class="btn"
            type="submit"
            onClick={() => {
              history.replace({ pathname: "/createclass" });
            }}
          >
            Create a Class
          </button>
        </section>
      );
    }
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
      <div>{renderButtons(isStudent)}</div>
      <section class="courses-view">
        <div class="container">
          <div class="row">
            <>
              {courses.map((data, id) => {
                return (
                  <div key={id} class="col-sm-6 col-md-3">
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
                        <div class="name">{data.name}</div>
                        <div class="expert">
                          <span>By </span>
                          {data.instructor}
                        </div>
                      </div>
                      <div class="product-footer">
                        <div class="comment-box"></div>
                        <div class="view-btn">
                          <button
                            onClick={() => {
                              forwardClass(data);
                            }}
                            class="btn"
                          >
                            view more
                          </button>
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
