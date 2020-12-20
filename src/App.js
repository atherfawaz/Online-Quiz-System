import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginRegister from "./pages/loginregister";
import Home from "./pages/home";
import InvalidPage from "./pages/invalidPage";
<<<<<<< HEAD
import CourseDetails from "./pages/CourseDetails";
import CourseGrid from "./pages/CourseGrid";
=======
import AccountSettings from "./pages/accountSettings"
>>>>>>> khizars

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home}></Route>
<<<<<<< HEAD
        <Route path="/home" exact component={LoginRegister}></Route>
        <Route path="/course" exact component={LoginRegister}></Route>
        <Route path="/coursedetails" exact component={LoginRegister}></Route>
=======
        <Route path="/home" exact component={Home}></Route>
        <Route path="/login" exact component={LoginRegister}></Route>
        <Route path="/account-settings" exact component={AccountSettings}></Route>
>>>>>>> khizars
        <Route component={InvalidPage}></Route>
      </div>
    </Router>
  );
}

export default App;
