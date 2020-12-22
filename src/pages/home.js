import React from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";

function Home() {
  
  // const history = useHistory();
  // const studentLogin = () => {
  //   history.push({pathname:'/courses', state:{type:0}});
  // }
  // const teachLogin = () => {
  //   history.push({pathname:'/courses', state:{type:1}});
  
  
  
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
                  <p>Login as a student</p>
                </div>
                <div class="input-box">
                  <input type="text" placeholder="User Name" />
                </div>
                <div class="input-box">
                  <input type="text" placeholder="Password" />
                </div>
                <div class="check-slide">
                  <label class="label_check" for="checkbox-01">
                    <input id="checkbox-01" type="checkbox" /> Remember Me
                  </label>
                  <div class="right-link">
                    <a href="#">Lost Password? </a>
                  </div>
                </div>
                <Link to={{pathname:'/courses', state:{type: 0}}}>
                  <div class="submit-slide">
                    <button type='submit' class="btn">Login</button>
                  </div>
                </Link>
              </div>
              <div class="col-sm-6">
                <div class="section-title">
                  <h2>Teacher</h2>
                  <p>Login as a teacher</p>
                </div>
                <div class="input-box">
                  <input type="text" placeholder="User Name" />
                </div>
                <div class="input-box">
                  <input type="text" placeholder="Email" />
                </div>
                <div class="input-box">
                  <input type="password" placeholder="Password" />
                </div>
                <div class="input-box">
                  <input type="password" placeholder="Re-Password" />
                </div>
                <Link to={{pathname: '/courses', state: {type: 1}}}>
                  <div class="submit-slide">
                    <button type="submit" class="btn">Login</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
