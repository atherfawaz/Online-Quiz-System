import React from "react";
import "../App.css";
import MCQ from "./mcq";
import FIB from "./fib";
import Cmatch from "./cmatch";
import Long from "./long";
import Short from "./short";

const Posts = ({ loading, questions, posts }) => {
  const renderPost = () => {
    console.log(posts);
    if (posts == "question 1") {
      return <MCQ />;
    } else if (posts == "question 2") {
      return <FIB />;
    } else if (posts == "question 3") {
      return <Cmatch />;
    } else if (posts == "question 4") {
      return <Long />;
    } else if (posts == "question 5") {
      return <Short />;
    } else {
      console.log("Invalid type; check type in Posts.js");
    }
  };

  return (
    <div>
      <div>
        <div class="time-info">Total time </div>
        <div id="countdown"></div>
      </div>
      {renderPost()}
    </div>
  );
};

export default Posts;
