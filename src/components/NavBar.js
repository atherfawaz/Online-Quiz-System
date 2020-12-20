import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div class="quck-nav">
        <div class="container">
          <div class="quck-right">
            <div class="right-link">
              <a href="./404">
                <i class="fa fa-handshake-o"></i>Balendos
              </a>
            </div>
            <div class="right-link">
              <a href="./404">
                <i class="fa fa-headphones"></i>Online Support
              </a>
            </div>
          </div>
        </div>
      </div>
      <header id="header">
        <div class="container">
          <nav id="nav-main">
            <div class="navbar navbar-inverse">
              <div class="navbar-header">
                <a href="./home" class="navbar-brand">
                  <img src="images/logo.png" alt="" />
                </a>
                <button
                  type="button"
                  class="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                  <li>
                    <a href="./home">Home</a>
                  </li>
                  <li>
                    <a href="./courses">Courses</a>
                  </li>
                  <li>
                    <a href="./work">Work</a>
                  </li>
                  <li>
                    <a href="./login">Login/Register</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
export default NavBar;
