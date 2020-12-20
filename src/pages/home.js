import React from "react";
import "../App.css";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <div class="wapper">
      <Loader />
      <NavBar />
    </div>
  );
}

export default Home;
