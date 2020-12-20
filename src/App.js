import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginRegister from "./pages/loginregister";
import Home from "./pages/home";
import InvalidPage from "./pages/invalidPage";
import CourseDetails from "./pages/CourseDetails";
import AccountSettings from "./pages/accountSettings";
import CourseGrid from "./pages/CourseGrid";
import QuizIntro from "./pages/quizIntro";
import Quiz from "./pages/quiz";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/login" exact component={LoginRegister}></Route>
        <Route path="/courses" exact component={CourseGrid}></Route>
        <Route
          path="/account-settings"
          exact
          component={AccountSettings}
        ></Route>
        <Route path="/quizintro" exact component={QuizIntro}></Route>
        <Route path="/coursedetails" exact component={CourseDetails}></Route>
        <Route path="/quiz" exact component={Quiz}></Route>
      </div>
    </Router>
  );
}

export default App;
