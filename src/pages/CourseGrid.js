import React from "react";
import "../App.css";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";

function CourseGrid() {
  return (
    <div class="wapper">
      <Loader />
      <NavBar />
      <section class="banner inner-page">
        <div class="banner-img">
          <img src="images/banner/courses-banner.jpg" alt="" />
        </div>
        <div class="page-title">
          <div class="container">
            <h1>Courses</h1>
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
          </ul>
        </div>
      </section>
      <section class="courses-view">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3">
              <div class="course-post">
                <div class="img">
                  <img src="images/courses/courses-img4.jpg" alt="" />
                  <div class="price">$18</div>
                  <div class="icon">
                    <a href="#">
                      <img src="images/book-icon.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="info">
                  <div class="name">Basic Time Management Course</div>
                  <div class="expert">
                    <span>By </span>Michael Windzor
                  </div>
                </div>
                <div class="product-footer">
                  <div class="comment-box">
                    <div class="box">
                      <i class="fa fa-users"></i>35 Enrolled
                    </div>
                  </div>
                  <div class="rating">
                    <div class="fill" style={{ width: "45%" }}></div>
                  </div>
                  <div class="view-btn">
                    <a href="coursedetails" class="btn">
                      view more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="course-post">
                <div class="img">
                  <img src="images/courses/courses-img5.jpg" alt="" />
                  <div class="price free">free</div>
                  <div class="icon">
                    <a href="#">
                      <img src="images/book-icon.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="info">
                  <div class="name">
                    Introduction to Mobile Apps Development
                  </div>
                  <div class="expert">
                    <span>By </span>Michael Windzor
                  </div>
                </div>
                <div class="product-footer">
                  <div class="comment-box">
                    <div class="box">
                      <i class="fa fa-users"></i>35 Enrolled
                    </div>
                  </div>
                  <div class="rating">
                    <div class="fill" style={{ width: "45%" }}></div>
                  </div>
                  <div class="view-btn">
                    <a href="course-details-free.html" class="btn">
                      view more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="course-post">
                <div class="img">
                  <img src="images/courses/courses-img6.jpg" alt="" />
                  <div class="price">$23</div>
                  <div class="icon">
                    <a href="#">
                      <img src="images/book-icon.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="info">
                  <div class="name">Lorem Ipsum is simply dummy</div>
                  <div class="expert">
                    <span>By </span>text of the printing
                  </div>
                </div>
                <div class="product-footer">
                  <div class="comment-box">
                    <div class="box">
                      <i class="fa fa-users"></i>35 Enrolled
                    </div>
                  </div>
                  <div class="rating">
                    <div class="fill" style={{ width: "45%" }}></div>
                  </div>
                  <div class="view-btn">
                    <a href="coursedetails" class="btn">
                      view more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="course-post">
                <div class="img">
                  <img src="images/courses/courses-img7.jpg" alt="" />
                  <div class="price">$78</div>
                  <div class="icon">
                    <a href="#">
                      <img src="images/book-icon.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="info">
                  <div class="name">Lorem Ipsum has been the</div>
                  <div class="expert">
                    <span>By </span>unknown printer
                  </div>
                </div>
                <div class="product-footer">
                  <div class="comment-box">
                    <div class="box">
                      <i class="fa fa-users"></i>35 Enrolled
                    </div>
                  </div>
                  <div class="rating">
                    <div class="fill" style={{ width: "45%" }}></div>
                  </div>
                  <div class="view-btn">
                    <a href="coursedetails" class="btn">
                      view more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="course-post">
                <div class="img">
                  <img src="images/courses/courses-img6.jpg" alt="" />
                  <div class="price">$23</div>
                  <div class="icon">
                    <a href="#">
                      <img src="images/book-icon.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="info">
                  <div class="name">Lorem Ipsum is simply dummy</div>
                  <div class="expert">
                    <span>By </span>text of the printing
                  </div>
                </div>
                <div class="product-footer">
                  <div class="comment-box">
                    <div class="box">
                      <i class="fa fa-users"></i>35 Enrolled
                    </div>
                  </div>
                  <div class="rating">
                    <div class="fill" style={{ width: "45%" }}></div>
                  </div>
                  <div class="view-btn">
                    <a href="coursedetails" class="btn">
                      view more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="course-post">
                <div class="img">
                  <img src="images/courses/courses-img4.jpg" alt="" />
                  <div class="price">$18</div>
                  <div class="icon">
                    <a href="#">
                      <img src="images/book-icon.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="info">
                  <div class="name">Basic Time Management Course</div>
                  <div class="expert">
                    <span>By </span>Michael Windzor
                  </div>
                </div>
                <div class="product-footer">
                  <div class="comment-box">
                    <div class="box">
                      <i class="fa fa-users"></i>35 Enrolled
                    </div>
                  </div>
                  <div class="rating">
                    <div class="fill" style={{ width: "45%" }}></div>
                  </div>
                  <div class="view-btn">
                    <a href="coursedetails" class="btn">
                      view more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="course-post">
                <div class="img">
                  <img src="images/courses/courses-img7.jpg" alt="" />
                  <div class="price">$78</div>
                  <div class="icon">
                    <a href="#">
                      <img src="images/book-icon.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="info">
                  <div class="name">Lorem Ipsum has been the</div>
                  <div class="expert">
                    <span>By </span>unknown printer
                  </div>
                </div>
                <div class="product-footer">
                  <div class="comment-box">
                    <div class="box">
                      <i class="fa fa-users"></i>35 Enrolled
                    </div>
                  </div>
                  <div class="rating">
                    <div class="fill" style={{ width: "45%" }}></div>
                  </div>
                  <div class="view-btn">
                    <a href="coursedetails" class="btn">
                      view more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="course-post">
                <div class="img">
                  <img src="images/courses/courses-img5.jpg" alt="" />
                  <div class="price free">free</div>
                  <div class="icon">
                    <a href="#">
                      <img src="images/book-icon.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="info">
                  <div class="name">
                    Introduction to Mobile Apps Development
                  </div>
                  <div class="expert">
                    <span>By </span>Michael Windzor
                  </div>
                </div>
                <div class="product-footer">
                  <div class="comment-box">
                    <div class="box">
                      <i class="fa fa-users"></i>35 Enrolled
                    </div>
                  </div>
                  <div class="rating">
                    <div class="fill" style={{ width: "45%" }}></div>
                  </div>
                  <div class="view-btn">
                    <a href="course-details-free.html" class="btn">
                      view more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pagination">
            <ul>
              <li class="next">
                <a href="#">
                  <i class="fa fa-angle-left"></i>
                  <span>Next</span>
                </a>
              </li>
              <li class="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li class="prev">
                <a href="#">
                  <span>prev</span> <i class="fa fa-angle-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CourseGrid;
