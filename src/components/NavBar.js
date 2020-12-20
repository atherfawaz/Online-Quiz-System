import React from "react";

function NavBar() {
  return (
    <div>
      <div class="quck-nav">
        <div class="container">
          <div class="contact-no">
            <a href="#">
              <i class="fa fa-map-marker"></i>Brooklyn, NY 10036, United States
            </a>
          </div>
          <div class="contact-no">
            <a href="#">
              <i class="fa fa-phone"></i>+299 97 39 82
            </a>
          </div>
          <div class="contact-no">
            <a href="#">
              <i class="fa fa-globe"></i>academy.com
            </a>
          </div>
          <div class="quck-right">
            <div class="right-link">
              <a href="#">
                <i class="fa fa-handshake-o"></i>Help Center
              </a>
            </div>
            <div class="right-link">
              <a href="#">
                <i class="fa fa-headphones"></i>Online Support
              </a>
            </div>
            <div class="right-link language-select">
              <a href="javascript:void(0);">
                <i class="fa fa-language"></i>English
              </a>
              <ul class="language-list">
                <li>
                  <a href="#">Guyana</a>
                </li>
                <li>
                  <a href="#">Haiti</a>
                </li>
                <li>
                  <a href="#">Honduras</a>
                </li>
                <li>
                  <a href="#">Andorra</a>
                </li>
                <li>
                  <a href="#">Armenia</a>
                </li>
                <li>
                  <a href="#">Bahrain</a>
                </li>
              </ul>
            </div>
            <div class="right-link">
              <a href="login-register.html">
                <i class="fa  fa-user"></i>Login \ Register
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
                <a href="index.html" class="navbar-brand">
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
              <div class="cart-box">
                <a href="cart.html">
                  <i class="fa fa-shopping-basket"></i>
                </a>
              </div>
              <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                  <li class="active sub-menu">
                    <a href="index.html">Home </a>
                    <ul>
                      <li>
                        <a href="index.html">Home-1</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home-2</a>
                      </li>
                    </ul>
                  </li>
                  <li class="mega-menu sub-menu">
                    <a href="courses-list.html">Courses</a>
                    <div class="menu-view">
                      <div class="row">
                        <div class="col-sm-4">
                          <div class="menu-title">Courses Page</div>
                          <ul>
                            <li>
                              <a href="courses-gride.html">Courses Grid</a>
                            </li>
                            <li>
                              <a href="courses-gride-sideBar.html">
                                Courses Grid SideBar
                              </a>
                            </li>
                            <li>
                              <a href="courses-list.html">Courses List</a>
                            </li>
                            <li>
                              <a href="courses-list-sideBar.html">
                                Courses List SideBar
                              </a>
                            </li>
                            <li>
                              <a href="course-details.html">Course Details</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-sm-4">
                          <div class="menu-title">Quiz Page</div>
                          <ul>
                            <li>
                              <a href="quiz-intro.html">Quiz Intro</a>
                            </li>
                            <li>
                              <a href="quiz.html">Quiz</a>
                            </li>
                            <li>
                              <a href="quiz-result.html">Quiz Result</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-sm-4 menu-courses">
                          <div class="menu-title">Popular Courses</div>
                          <div class="courses-slide">
                            <div class="img">
                              <img src="images/blog/post-img1.jpg" alt="" />
                            </div>
                            <div class="name">
                              <a href="courses-gride.html">
                                Business Management
                              </a>
                            </div>
                            <div class="price">$500</div>
                          </div>
                          <div class="courses-slide">
                            <div class="img">
                              <img src="images/blog/post-img2.jpg" alt="" />
                            </div>
                            <div class="name">
                              <a href="courses-gride.html">Computing Science</a>
                            </div>
                            <div class="price">$255</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="sub-menu">
                    <a href="#">Features</a>
                    <ul>
                      <li>
                        <a href="typography.html">Typography</a>
                      </li>
                      <li>
                        <a href="price-plan.html">Price Plan</a>
                      </li>
                      <li>
                        <a href="testimonial.html">Testimonial</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li class="sub-menu">
                    <a href="event.html">Event</a>
                    <ul>
                      <li>
                        <a href="event.html">Event</a>
                      </li>
                      <li>
                        <a href="event-details.html">Event Details</a>
                      </li>
                      <li>
                        <a href="event-details2.html">Event Details2</a>
                      </li>
                    </ul>
                  </li>
                  <li class="sub-menu mega-menu">
                    <a href="forums.html">Forums</a>
                    <div class="menu-view">
                      <div class="row">
                        <div class="col-sm-4">
                          <div class="menu-title">Forums</div>
                          <ul>
                            <li>
                              <a href="forums-detail.html">Forums Detail</a>
                            </li>
                            <li>
                              <a href="forums-group.html">Forums Group</a>
                            </li>
                            <li>
                              <a href="forums-group-details.html">
                                Forums Group Details
                              </a>
                            </li>
                            <li>
                              <a href="forums-group-member.html">
                                Forums Group Member
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-sm-4">
                          <div class="menu-title"></div>
                          <ul>
                            <li>
                              <a href="forum-single-topic.html">
                                Forum Single Topic
                              </a>
                            </li>
                            <li>
                              <a href="forums-members.html">Forums Members</a>
                            </li>
                            <li>
                              <a href="forums-profile.html">Forums Profile</a>
                            </li>
                            <li>
                              <a href="forums-profile-activity.html">
                                Forums Profile Activity
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-sm-4">
                          <div class="menu-title"></div>
                          <ul>
                            <li>
                              <a href="forums-profile-forums.html">
                                Forums Profile Forums
                              </a>
                            </li>
                            <li>
                              <a href="forums-profile-friends.html">
                                Forums Profile Friends
                              </a>
                            </li>
                            <li>
                              <a href="forums-profile-groups.html">
                                Forums Profile Groups
                              </a>
                            </li>
                            <li>
                              <a href="forums-single-profile.html">
                                Forums Single Profile
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="contact-us.html">Contact Us </a>
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
