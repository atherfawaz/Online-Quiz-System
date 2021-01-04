import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
import { STATES } from "mongoose";
const axios = require("axios");

function Home() {
  const history = useHistory();
  if (localStorage.token) {
    history.replace({
      pathname: "/courses",
      state: { id: localStorage.uid, isStudent: localStorage.isStudent },
    });
  }

  const [login_username, setLogin_Username] = useState("username");
  const [login_password, setLogin_Password] = useState("password");
  const [register_username, setRegister_Username] = useState("username");
  const [register_password, setRegister_Password] = useState("password");
  const [register_email, setRegister_Email] = useState("email");
  const [register_userType, setRegister_userType] = useState("user_type");

  const Login = () => {
    axios
      .post("http://localhost:8000/login", {
        username: login_username,
        password: login_password,
      })
      .then(function (response) {
        console.log(response.data);
        if (!response.data.token) {
          alert("Retry login");
          return;
        }
        localStorage.token = response.data.token;
        localStorage.uid = response.data.uid;
        localStorage.isStudent = response.data.type === 1 ? 1 : 0;
        //   history.push({pathname:'/courses', state:{type:0}});

        history.replace({
          pathname: "/courses",
          state: { id: localStorage.uid, isStudent: localStorage.isStudent },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const Register = () => {
    axios
      .post("http://localhost:8000/register", {
        name: register_username,
        password: register_password,
        email: register_email,
        type: register_userType,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          console.log(error.response);
        }
      });
  };

  return (
    <div className="wapper">
      <Loader />
      <NavBar />
      <div>
        <section class="login-view">
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <div class="section-title">
                  <h2>Student</h2>
                  <p>Login</p>
                </div>
                <div class="input-box">
                  <input
                    type="text"
                    placeholder={login_username}
                    onChange={(e) => setLogin_Username(e.target.value)}
                  />
                </div>
                <div class="input-box">
                  <input
                    type="password"
                    placeholder={login_password}
                    onChange={(e) => setLogin_Password(e.target.value)}
                  />
                </div>
                <div class="check-slide">
                  <label class="label_check" for="checkbox-01">
                    <input id="checkbox-01" type="checkbox" /> Remember Me
                  </label>
                  <div class="right-link">
                    <a href="#">Lost Password? </a>
                  </div>
                </div>
                <div class="submit-slide">
                  <button type="submit" class="btn" onClick={Login}>
                    Login
                  </button>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="section-title">
                  <h2>REGISTER</h2>
                  <p>Register now - Completely free</p>
                </div>
                <div class="input-box">
                  <input
                    type="text"
                    placeholder={register_username}
                    onChange={(e) => setRegister_Username(e.target.value)}
                  />
                </div>
                <div class="input-box">
                  <input
                    type="text"
                    placeholder={register_email}
                    onChange={(e) => setRegister_Email(e.target.value)}
                  />
                </div>
                <div class="input-box">
                  <input
                    type="text"
                    placeholder={register_userType}
                    onChange={(e) => setRegister_userType(e.target.value)}
                  />
                </div>
                <div class="input-box">
                  <input
                    type="password"
                    placeholder={register_password}
                    onChange={(e) => setRegister_Password(e.target.value)}
                  />
                </div>
                <div class="submit-slide">
                  <input
                    type="submit"
                    value="SIGN UP"
                    class="btn"
                    onClick={Register}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
