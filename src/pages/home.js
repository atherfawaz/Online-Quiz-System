import React from "react";
import "../App.css";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";

function Home() {
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
                  <h2>Login</h2>
                  <p>Login to your account below</p>
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
                <div class="submit-slide">
                  <input type="submit" value="Login" class="btn" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="section-title">
                  <h2>REGISTER</h2>
                  <p>Register now - Completely free</p>
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
                <div class="submit-slide">
                  <input type="submit" value="SIGN UP" class="btn" />
                </div>
              </div>
            </div>
            <div class="sosiyal-login">
              <div class="row">
                <div class="col-sm-3 col-md-3">
                  <a href="#" class="facebook">
                    <i class="fa fa-facebook"></i>Facebook
                  </a>
                </div>
                <div class="col-sm-3 col-md-3">
                  <a href="#" class="google-pluse">
                    <i class="fa fa-google-plus"></i>Google
                  </a>
                </div>
                <div class="col-sm-3 col-md-3">
                  <a href="#" class="twitter">
                    <i class="fa fa-twitter"></i>Twitter
                  </a>
                </div>
                <div class="col-sm-3 col-md-3">
                  <a href="#" class="linkedin">
                    <i class="fa fa-linkedin"></i>Linkedin
                  </a>
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
