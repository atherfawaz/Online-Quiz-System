import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginRegister from "./pages/loginregister";
import Home from "./pages/home";
import InvalidPage from "./pages/invalidPage";
import CourseDetails from "./pages/CourseDetails";
import CourseDetailsTeacher from "./pages/CourseDetailsTeacher";
import AccountSettings from "./pages/accountSettings";
import CourseGrid from "./pages/CourseGrid";
import QuizIntro from "./pages/quizIntro";
import QuizResult from "./pages/quizResult";
import Quiz from "./pages/quiz";
import CreateClass from "./pages/createclass";
import createQuiz from "./pages/createQuiz";
import AddQuestions from "./pages/addQuestions";
import ViewQuizHistory from "./pages/viewquizhistory";
import CreatePool from "./pages/createpool";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/login" exact component={LoginRegister}></Route>
        <Route path="/courses" exact component={CourseGrid}></Route>
        <Route path="/account-settings" exact component={AccountSettings}></Route>
        <Route path="/quiz" exact component={Quiz}></Route>
        <Route path="/quizintro" exact component={QuizIntro}></Route>
        <Route path="/quizresult" exact component={QuizResult}></Route>
        <Route path="/createclass" exact component={CreateClass}></Route>
        <Route path="/createquiz" exact component={createQuiz}></Route>
        <Route path="/addquestions" exact component={AddQuestions}></Route>
        <Route path="/viewquizhistory" exact component={ViewQuizHistory}></Route>
        <Route path="/coursedetails" exact component={CourseDetails}></Route>
        <Route path="/createpool" exact component={CreatePool}></Route>
      </div>
    </Router>
  );
}

export default App;
