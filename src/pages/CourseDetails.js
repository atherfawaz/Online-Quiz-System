import React from "react";
import { useLocation, Link } from 'react-router-dom';
import "../App.css";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";

function CourseDetails() {
  const location = useLocation();
  const isStudent = location.state.type===0?true:false;

  console.log(isStudent);
  return (
    <div className="wapper">
      <Loader />
      <NavBar />
      <section className="banner inner-page">
        <div className="banner-img">
          <img src="images/banner/courses-banner.jpg" alt="" />
        </div>
        <div className="page-title">
          <div className="container">
            <h1>courses details</h1>
          </div>
        </div>
      </section>
      <section className="breadcrumb">
        <div className="container">
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
      <div className="course-details">
        <div className="container">
          <h2>Basic Time Management Course</h2>
          <div className="course-details-main">
            <div className="course-img">
              <img src="images/courses/courses-img8.jpg" alt="" />
            </div>
            <div className="course-info">
              <div className="course-box">
                <div className="icon">
                  <i className="fa fa-file"></i>
                </div>
                <p>17 Lessons</p>
              </div>
              <div className="course-box">
                <div className="icon">
                  <i className="fa fa-exclamation"></i>
                </div>
                <p>7 Quizzes</p>
              </div>
              <div className="course-box">
                <div className="icon">
                  <i className="fa fa-file-text-o"></i>
                </div>
                <p>13 Documents</p>
              </div>
              <div className="course-box">
                <div className="icon">
                  <i className="fa fa-video-camera"></i>
                </div>
                <p>9 vedio</p>
              </div>
              <div className="course-box">
                <div className="icon">
                  <i className="fa fa-mortar-board"></i>
                </div>
                <p>1719 Students</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="course-instructorInfo">
                  <div className="info-slide">
                    <i className="fa fa-user-secret"></i>Rebecca Smith
                  </div>
                  <div className="info-slide">
                    <i className="fa fa-calendar"></i>16-09-2016 - 15-08-2018{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="btn-row">
                  <div>
                    {
                      isStudent ? (<div></div>) : (
                        <Link to={{ pathname: '/createpool', state: { type: location.state.type } }}><button type="submit" class="btn">Edit Pool</button></Link>)
                    }
                  </div>
                  <div>
                    {
                      isStudent ? (<Link to={{ pathname: '/viewquizhistory', state: { type: location.state.type } }}><button type="submit" class="btn">Quiz History</button></Link>) : (
                        <Link to={{ pathname: '/viewquizhistory', state: { type: location.state.type } }}><button type="submit" class="btn">Quiz History</button></Link>)
                    }
                  </div>
                  {
                    isStudent ? (<Link to={{ pathname: '/quizintro', state: { type: location.state.type } }}><button type='submit' class='btn'>Take Quiz</button></Link>)
                      : (<Link to={{ pathname: '/createquiz', state: { type: location.state.type } }}><button type='submit' class='btn'>Create Quiz</button></Link>)
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="info">
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
          <div className="instructors">
            <h4>Meet The Instructors</h4>
            <div className="row">
              <div className="col-sm-4">
                <div className="instructors-box">
                  <div className="img">
                    <img src="images/user-img/img6.jpg" alt="" />
                  </div>
                  <div className="name">variations passages</div>
                  <div className="designation">reasonable</div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or{" "}
                  </p>
                  <div className="link">
                    <a href="instructor-profile.html">More Info</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="instructors-box">
                  <div className="img">
                    <img src="images/user-img/img7.jpg" alt="" />
                  </div>
                  <div className="name">variations passages</div>
                  <div className="designation">reasonable</div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or{" "}
                  </p>
                  <div className="link">
                    <a href="instructor-profile.html">More Info</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="instructors-box">
                  <div className="img">
                    <img src="images/user-img/img8.jpg" alt="" />
                  </div>
                  <div className="name">variations passages</div>
                  <div className="designation">reasonable</div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or{" "}
                  </p>
                  <div className="link">
                    <a href="instructor-profile.html">More Info</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="syllabus">
            <h4>Syllabus</h4>
            <div className="syllabus-box">
              <div className="syllabus-title">1st lesson</div>
              <div className="syllabus-view first">
                <div className="main-point active">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </div>
                <div className="point-list">
                  <ul>
                    <li>
                      <a href="course-lessons.html">
                        vedio : Lorem ipsum dolor sit amet.{" "}
                        <span className="hover-text">
                          Watch Video<i className="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="course-lessons.html">
                        Document : semper dolor quis lectus facilisis laoreet.{" "}
                        <span className="hover-text">
                          Let's Go<i className="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="quiz-intro.html">
                        Quizzes : auctor quam quis commodo feugiat.{" "}
                        <span className="hover-text">
                          upgrade now<i className="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li className="no-link">
                      There are many variations of passages of Lorem Ipsum
                      available,{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="syllabus-box">
              <div className="syllabus-title">2st lesson</div>
              <div className="syllabus-view">
                <div className="main-point">
                  It is a long established fact that a reader will be distracted
                  by the
                </div>
                <div className="point-list">
                  <ul>
                    <li>
                      <a href="course-lessons.html">
                        Lessons : auctor quam quis commodo feugiat.{" "}
                        <span className="hover-text">
                          understand now<i className="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="course-lessons.html">
                        vedio : Lorem ipsum dolor sit amet.{" "}
                        <span className="hover-text">
                          Watch Video<i className="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="course-lessons.html">
                        Document : semper dolor quis lectus facilisis laoreet.{" "}
                        <span className="hover-text">
                          Let's Go<i className="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="quiz-intro.html">
                        Quizzes : auctor quam quis commodo feugiat.{" "}
                        <span className="hover-text">
                          upgrade now<i className="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="syllabus-box">
              <div className="syllabus-title">3st lesson</div>
              <div className="syllabus-view">
                <div className="main-point">
                  readable content of a page when looking at its layout. The
                  point of{" "}
                </div>
                <div className="point-list">
                  <ul>
                    <li>
                      <a href="course-lessons.html">
                        Lessons : auctor quam quis commodo feugiat.{" "}
                        <span className="hover-text">
                          understand now<i className="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="course-lessons.html">
                        vedio : Lorem ipsum dolor sit amet.{" "}
                        <span className="hover-text">
                          Watch Video<i className="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="course-lessons.html">
                        Document : semper dolor quis lectus facilisis laoreet.{" "}
                        <span className="hover-text">
                          Let's Go<i className="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="syllabus-box">
              <div className="syllabus-title">4st lesson</div>
              <div className="syllabus-view">
                <div className="main-point">
                  using Lorem Ipsum is that it has a more-or-less normal
                  distribution{" "}
                </div>
                <div className="point-list">
                  <ul>
                    <li>
                      <a href="course-lessons.html">
                        Lessons : auctor quam quis commodo feugiat.{" "}
                        <span className="hover-text">
                          understand now<i className="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="course-lessons.html">
                        vedio : Lorem ipsum dolor sit amet.{" "}
                        <span className="hover-text">
                          Watch Video<i className="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="quiz-intro.html">
                        Quizzes : auctor quam quis commodo feugiat.{" "}
                        <span className="hover-text">
                          upgrade now<i className="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="syllabus-box">
              <div className="syllabus-title">5st lesson</div>
              <div className="syllabus-view">
                <div className="main-point">
                  of letters, as opposed to using 'Content here, content here',{" "}
                </div>
                <div className="point-list">
                  <ul>
                    <li>
                      <a href="course-lessons.html">
                        Lessons : auctor quam quis commodo feugiat.{" "}
                        <span className="hover-text">
                          understand now<i className="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="course-lessons.html">
                        Document : semper dolor quis lectus facilisis laoreet.{" "}
                        <span className="hover-text">
                          Let's Go<i className="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="quiz-intro.html">
                        Quizzes : auctor quam quis commodo feugiat.{" "}
                        <span className="hover-text">
                          upgrade now<i className="fa fa-angle-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="reviews">
            <h4>Reviews</h4>
            <div className="row">
              <div className="col-sm-5">
                <div className="rating-info">
                  <label>Detailed Rating</label>
                  <div className="rating-slide">
                    <span>Stars 5</span>
                    <div className="bar">
                      <div className="fill" style={{ width: "50%" }}></div>
                    </div>
                    <em>10</em>
                  </div>
                  <div className="rating-slide">
                    <span>Stars 4</span>
                    <div className="bar">
                      <div className="fill" style={{ width: "40%" }}></div>
                    </div>
                    <em>8</em>
                  </div>
                  <div className="rating-slide">
                    <span>Stars 3</span>
                    <div className="bar">
                      <div className="fill" style={{ width: "30%" }}></div>
                    </div>
                    <em>6</em>
                  </div>
                  <div className="rating-slide">
                    <span>Stars 2</span>
                    <div className="bar">
                      <div className="fill" style={{ width: "35%" }}></div>
                    </div>
                    <em>7</em>
                  </div>
                  <div className="rating-slide">
                    <span>Stars 1</span>
                    <div className="bar">
                      <div className="fill" style={{ width: "0" }}></div>
                    </div>
                    <em>0</em>
                  </div>
                </div>
              </div>
              <div className="col-sm-5">
                <label>Average Rating</label>
                <div className="rating-box">
                  <div className="rating">4.3</div>
                  <div className="rating-star">
                    <div className="fill" style={{ width: "86%" }}></div>
                  </div>
                  <span>31 Ratings</span>
                </div>
              </div>
            </div>
            <div className="reviews-view">
              <h4>Reviews List</h4>
              <div className="reviews-slide">
                <div className="img">
                  <img src="images/user-img/student-img1.png" alt="" />
                </div>
                <div className="rating-star">
                  <div className="fill" style={{ width: "82%" }}></div>
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
              <div className="reviews-slide">
                <div className="img">
                  <img src="images/user-img/student-img1.png" alt="" />
                </div>
                <div className="rating-star">
                  <div className="fill" style={{ width: "69%" }}></div>
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
              <div className="reviews-slide">
                <div className="img">
                  <img src="images/user-img/student-img1.png" alt="" />
                </div>
                <div className="rating-star">
                  <div className="fill" style={{ width: "70%" }}></div>
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

export default CourseDetails;