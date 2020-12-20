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
              <p>Opps Error</p>
            </div>
            <div class="page-img">
              <img src="images/404Img.jpg" alt="" />
            </div>
            <div class="error-text">
              <p>
                Page doesn’t exist or some other error occured. Go to our{" "}
                <a href="index.html">home page</a> or go to back previous page
              </p>
            </div>
          </div>
        </div>
        <footer id="footer">
          <div class="footer-top">
            <div class="container">
              <div class="row">
                <div class="col-sm-6 col-md-3">
                  <h5>Popular Courses</h5>
                  <div class="course-slide">
                    <div class="img">
                      <img src="images/blog/post-img1.jpg" alt="" />
                    </div>
                    <p>
                      <a href="courses-list.html">
                        when an unknown printer took{" "}
                      </a>
                    </p>
                    <div class="price">$55</div>
                  </div>
                  <div class="course-slide">
                    <div class="img">
                      <img src="images/blog/post-img2.jpg" alt="" />
                    </div>
                    <p>
                      <a href="courses-list-sideBar.html">
                        when an unknown printer took{" "}
                      </a>
                    </p>
                    <div class="price">$505</div>
                  </div>
                  <div class="course-slide">
                    <div class="img">
                      <img src="images/blog/post-img3.jpg" alt="" />
                    </div>
                    <p>
                      <a href="courses-list.html">
                        when an unknown printer took{" "}
                      </a>
                    </p>
                    <div class="price">$178</div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="row">
                    <div class="col-md-offset-1 col-sm-6 col-md-5 col-xs-6">
                      <h5>Company</h5>
                      <ul class="footer-link">
                        <li>
                          <a href="about-us.html">About Us</a>
                        </li>
                        <li>
                          <a href="contact-us.html">Contact</a>
                        </li>
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="event.html">Event</a>
                        </li>
                        <li>
                          <a href="gallery.html">Gallery</a>
                        </li>
                        <li>
                          <a href="instructor-profile.html">
                            Instructor Profile
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-offset-1 col-sm-6 col-md-5 col-xs-6">
                      <h5>Links</h5>
                      <ul class="footer-link">
                        <li>
                          <a href="courses-list.html">Courses List</a>
                        </li>
                        <li>
                          <a href="price-plan.html">Pricing Table</a>
                        </li>
                        <li>
                          <a href="instructors.html">Instructors</a>
                        </li>
                        <li>
                          <a href="forums.html">Forums</a>
                        </li>
                        <li>
                          <a href="faq.html">Faq</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-3">
                  <h5>Contact Us</h5>
                  <div class="contact-view">
                    <div class="contact-slide">
                      <p>
                        <i class="fa fa-location-arrow"></i>76 Woodland Ave.
                        Sherman Drive <br />
                        Fort Walton Beach,Harlingen
                      </p>
                    </div>
                    <div class="contact-slide">
                      <p>
                        <i class="fa fa-phone"></i>+299 97 39 82
                      </p>
                    </div>
                    <div class="contact-slide">
                      <p>
                        <i class="fa fa-fax"></i>(08) 8971 7450
                      </p>
                    </div>
                    <div class="contact-slide">
                      <p>
                        <i class="fa fa-envelope"></i>
                        <a href="mailTo:academy@info.com">academy@info.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-8">
                <div class="copy-right">
                  <p>
                    Copyright © <span class="year">2016</span> Academy.
                  </p>
                  <ul class="footer-link">
                    <li>
                      <a href="/">Terms and Conditions</a>
                    </li>
                    <li>
                      <a href="/">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-4 ">
                <div class="social-media">
                  <ul>
                    <li>
                      <a href="/">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fa fa-skype"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fa fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default InvalidPage;
