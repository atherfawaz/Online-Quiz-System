import React, { useState } from "react";
import "../App.css";
import { useHistory } from "react-router-dom";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
const axios = require("axios");

function CreateClass() {
  const [name, setName] = useState("Class/Course Name");
  const [code, setCode] = useState("Course Code");
  const [semester, setSemester] = useState("Semester");
  const history = useHistory();

  const addCourse = async () => {
    try {
      console.log("i got to addCourse function");
      if (localStorage.token) {
        const res = axios.post("http://localhost:8000/create-course", {
          token: localStorage.token,
          tuid: localStorage.uid,
          name: name,
          code: code,
          semester: Number(semester)
        });
        console.log(res);
        console.log("added course");
        history.replace({ pathname: '/courses', state: { "id": localStorage.uid, "isStudent": localStorage.isStudent } });
      }
      else {
        console.log("Stll here")
      }
    }
    catch (err) {
      console.log(err);
    }
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
            <form onSubmit={addCourse}>
              <div class="row">
                <div class="col-md-6">
                  <div class="input-box">
                    <input
                      type="text"
                      placeholder={name}
                      data-validation="required"
                      name="name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div class="input-box">
                    <input
                      type="text"
                      placeholder={code}
                      data-validation="required"
                      name="email"
                      onChange={e => setCode(e.target.value)}
                    />
                  </div>
                  <div class="input-box">
                    <input
                      type="text"
                      placeholder={semester}
                      data-validation="required"
                      name="subject"
                      onChange={e => setSemester(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="submit-box">
                    {/* <Link to={{ pathname: "/courses", state: { type: 1 } }}> */}
                    <input type="submit" value="Create class" class="btn" />
                    {/* </Link> */}
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
