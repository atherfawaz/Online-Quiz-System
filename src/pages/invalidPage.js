import React from "react";
import "../App.css";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";

function InvalidPage() {
  return (
    <div class="wapper">
      <Loader />
      <NavBar />
      <div>
        <div class="page-404">
          <div class="container">
            <div class="section-title">
              <h2>This Page Could Not Be Found!</h2>
            </div>
            <div class="page-img">
              <img src="images/404Img.jpg" alt="" />
            </div>
            <div class="error-text">
              <p>
                Page doesn’t exist or some other error occured. Go to our{" "}
                <a href="./home">home page</a> or go to back previous page
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvalidPage;
