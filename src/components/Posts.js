import React from "react";

const Posts = ({ loading, questions, posts }) => {
  const renderPost = () => {
    console.log("Current post to be rendered: ", posts);
    if (posts == "question 1") {
      return (
        <div>
          <h2>Question 1, H1</h2>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Question 2, H2</h2>
        </div>
      );
    }
  };

  return (
    <ul className="list-group mb-4">
      <div>{renderPost()}</div>
    </ul>
  );
};

export default Posts;
