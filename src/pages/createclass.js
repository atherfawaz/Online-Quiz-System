import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";

function CreateClass() {
  const val = () => {
    console.log("Here");
  };
  return (
    <div className="wapper">
      <Loader />
      <NavBar />
    </div>
  );
}

export default CreateClass;
