import React, { Component, useState, useEffect } from "react";
import "../App.css";
import ReactPaginate from "react-paginate";
import axios from "axios";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
import Posts from "../components/Posts";
import Pagination from "../components/Pagination";

const Quiz = () => {
  const [questions, SetQuestions] = useState([
    "question 1",
    "question 2",
    "question 3",
    "question 4",
    "question 5",
    "question 6",
    "question 7",
    "question 8",
    "question 9",
    "question 10",
  ]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(1);

  useEffect(() => {
    const fetchPosts = () => {
      setPosts([questions[currentPage - 1]]);
    };
    fetchPosts();
  }, [currentPage]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            <h1>Quiz</h1>
          </div>
        </div>
      </section>
      <section class="breadcrumb white-bg">
        <div class="container">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Quiz</a>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <Posts
            posts={currentPosts}
            loading={loading}
            questions={questions}
            posts={posts}
          />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={10}
            paginate={paginate}
          />
        </div>
      </section>
    </div>
  );
};

export default Quiz;
