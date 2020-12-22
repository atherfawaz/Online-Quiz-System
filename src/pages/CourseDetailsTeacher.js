import React from "react";
import "../App.css";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";

function CourseDetailsTeacher() {
  return (
    <div className="wapper">
      <Loader />
      <NavBar />
      <section class="banner inner-page">
        <div class="banner-img">
          <img src="images/banner/courses-banner.jpg" alt="" />
        </div>
        <div class="page-title">
          <div class="container">
            <h1>courses details</h1>
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
            <li>
              <a href="#">courses details</a>
            </li>
          </ul>
        </div>
      </section>
      <div class="course-details">
        <div class="container">
          <h2>Basic Time Management Course</h2>
          <div class="course-details-main">
            <div class="course-img">
              <img src="images/courses/courses-img8.jpg" alt="" />
            </div>
            <div class="course-info">
              <div class="course-box">
                <div class="icon">
                  <i class="fa fa-file"></i>
                </div>
                <p>17 Lessons</p>
              </div>
              <div class="course-box">
                <div class="icon">
                  <i class="fa fa-exclamation"></i>
                </div>
                <p>7 Quizzes</p>
              </div>
              <div class="course-box">
                <div class="icon">
                  <i class="fa fa-file-text-o"></i>
                </div>
                <p>13 Documents</p>
              </div>
              <div class="course-box">
                <div class="icon">
                  <i class="fa fa-video-camera"></i>
                </div>
                <p>9 vedio</p>
              </div>
              <div class="course-box">
                <div class="icon">
                  <i class="fa fa-mortar-board"></i>
                </div>
                <p>1719 Students</p>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="course-instructorInfo">
                  <div class="info-slide">
                    <i class="fa fa-user-secret"></i>Rebecca Smith
                  </div>
                  <div class="info-slide">
                    <i class="fa fa-calendar"></i>16-09-2016 - 15-08-2018{" "}
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="btn-row">
                  <a href="/createquiz" class="btn">
                    <i class="fa fa-cart-plus"></i>Create a Quiz
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="info">
            <h4>Course Overview</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable.{" "}
            </p>
          </div>
          <div class="instructors">
            <h4>Meet The Instructors</h4>
            <div class="row">
              <div class="col-sm-4">
                <div class="instructors-box">
                  <div class="img">
                    <img src="images/user-img/img6.jpg" alt="" />
                  </div>
                  <div class="name">variations passages</div>
                  <div class="designation">reasonable</div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or{" "}
                  </p>
                  <div class="link">
                    <a href="instructor-profile.html">More Info</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="instructors-box">
                  <div class="img">
                    <img src="images/user-img/img7.jpg" alt="" />
                  </div>
                  <div class="name">variations passages</div>
                  <div class="designation">reasonable</div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or{" "}
                  </p>
                  <div class="link">
                    <a href="instructor-profile.html">More Info</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="instructors-box">
                  <div class="img">
                    <img src="images/user-img/img8.jpg" alt="" />
                  </div>
                  <div class="name">variations passages</div>
                  <div class="designation">reasonable</div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or{" "}
                  </p>
                  <div class="link">
                    <a href="instructor-profile.html">More Info</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="syllabus">
            <h4>Syllabus</h4>
            <div class="syllabus-box">
              <div class="syllabus-title">1st lesson</div>
              <div class="syllabus-view first">
                <div class="main-point active">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </div>
                <div class="point-list">
                  <ul>
                    <li>
                      <a href="course-lessons.html">
                        vedio : Lorem ipsum dolor sit amet.{" "}
                        <span class="hover-text">
                          Watch Video<i class="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="course-lessons.html">
                        Document : semper dolor quis lectus facilisis laoreet.{" "}
                        <span class="hover-text">
                          Let's Go<i class="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="quiz-intro.html">
                        Quizzes : auctor quam quis commodo feugiat.{" "}
                        <span class="hover-text">
                          upgrade now<i class="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li class="no-link">
                      There are many variations of passages of Lorem Ipsum
                      available,{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="syllabus-box">
              <div class="syllabus-title">2st lesson</div>
              <div class="syllabus-view">
                <div class="main-point">
                  It is a long established fact that a reader will be distracted
                  by the
                </div>
                <div class="point-list">
                  <ul>
                    <li>
                      <a href="course-lessons.html">
                        Lessons : auctor quam quis commodo feugiat.{" "}
                        <span class="hover-text">
                          understand now<i class="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="course-lessons.html">
                        vedio : Lorem ipsum dolor sit amet.{" "}
                        <span class="hover-text">
                          Watch Video<i class="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="course-lessons.html">
                        Document : semper dolor quis lectus facilisis laoreet.{" "}
                        <span class="hover-text">
                          Let's Go<i class="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="quiz-intro.html">
                        Quizzes : auctor quam quis commodo feugiat.{" "}
                        <span class="hover-text">
                          upgrade now<i class="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="syllabus-box">
              <div class="syllabus-title">3st lesson</div>
              <div class="syllabus-view">
                <div class="main-point">
                  readable content of a page when looking at its layout. The
                  point of{" "}
                </div>
                <div class="point-list">
                  <ul>
                    <li>
                      <a href="course-lessons.html">
                        Lessons : auctor quam quis commodo feugiat.{" "}
                        <span class="hover-text">
                          understand now<i class="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="course-lessons.html">
                        vedio : Lorem ipsum dolor sit amet.{" "}
                        <span class="hover-text">
                          Watch Video<i class="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="course-lessons.html">
                        Document : semper dolor quis lectus facilisis laoreet.{" "}
                        <span class="hover-text">
                          Let's Go<i class="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="syllabus-box">
              <div class="syllabus-title">4st lesson</div>
              <div class="syllabus-view">
                <div class="main-point">
                  using Lorem Ipsum is that it has a more-or-less normal
                  distribution{" "}
                </div>
                <div class="point-list">
                  <ul>
                    <li>
                      <a href="course-lessons.html">
                        Lessons : auctor quam quis commodo feugiat.{" "}
                        <span class="hover-text">
                          understand now<i class="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="course-lessons.html">
                        vedio : Lorem ipsum dolor sit amet.{" "}
                        <span class="hover-text">
                          Watch Video<i class="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="quiz-intro.html">
                        Quizzes : auctor quam quis commodo feugiat.{" "}
                        <span class="hover-text">
                          upgrade now<i class="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="syllabus-box">
              <div class="syllabus-title">5st lesson</div>
              <div class="syllabus-view">
                <div class="main-point">
                  of letters, as opposed to using 'Content here, content here',{" "}
                </div>
                <div class="point-list">
                  <ul>
                    <li>
                      <a href="course-lessons.html">
                        Lessons : auctor quam quis commodo feugiat.{" "}
                        <span class="hover-text">
                          understand now<i class="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="course-lessons.html">
                        Document : semper dolor quis lectus facilisis laoreet.{" "}
                        <span class="hover-text">
                          Let's Go<i class="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="quiz-intro.html">
                        Quizzes : auctor quam quis commodo feugiat.{" "}
                        <span class="hover-text">
                          upgrade now<i class="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="reviews">
            <h4>Reviews</h4>
            <div class="row">
              <div class="col-sm-5">
                <div class="rating-info">
                  <label>Detailed Rating</label>
                  <div class="rating-slide">
                    <span>Stars 5</span>
                    <div class="bar">
                      <div class="fill" style={{ width: "50%" }}></div>
                    </div>
                    <em>10</em>
                  </div>
                  <div class="rating-slide">
                    <span>Stars 4</span>
                    <div class="bar">
                      <div class="fill" style={{ width: "40%" }}></div>
                    </div>
                    <em>8</em>
                  </div>
                  <div class="rating-slide">
                    <span>Stars 3</span>
                    <div class="bar">
                      <div class="fill" style={{ width: "30%" }}></div>
                    </div>
                    <em>6</em>
                  </div>
                  <div class="rating-slide">
                    <span>Stars 2</span>
                    <div class="bar">
                      <div class="fill" style={{ width: "35%" }}></div>
                    </div>
                    <em>7</em>
                  </div>
                  <div class="rating-slide">
                    <span>Stars 1</span>
                    <div class="bar">
                      <div class="fill" style={{ width: "0" }}></div>
                    </div>
                    <em>0</em>
                  </div>
                </div>
              </div>
              <div class="col-sm-5">
                <label>Average Rating</label>
                <div class="rating-box">
                  <div class="rating">4.3</div>
                  <div class="rating-star">
                    <div class="fill" style={{ width: "86%" }}></div>
                  </div>
                  <span>31 Ratings</span>
                </div>
              </div>
            </div>
            <div class="reviews-view">
              <h4>Reviews List</h4>
              <div class="reviews-slide">
                <div class="img">
                  <img src="images/user-img/student-img1.png" alt="" />
                </div>
                <div class="rating-star">
                  <div class="fill" style={{ width: "82%" }}></div>
                </div>
                <span>5 Day ago</span>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you{" "}
                </p>
              </div>
              <div class="reviews-slide">
                <div class="img">
                  <img src="images/user-img/student-img1.png" alt="" />
                </div>
                <div class="rating-star">
                  <div class="fill" style={{ width: "69%" }}></div>
                </div>
                <span>5 Month ago</span>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you{" "}
                </p>
              </div>
              <div class="reviews-slide">
                <div class="img">
                  <img src="images/user-img/student-img1.png" alt="" />
                </div>
                <div class="rating-star">
                  <div class="fill" style={{ width: "70%" }}></div>
                </div>
                <span>2.5 Years ago</span>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailsTeacher;
