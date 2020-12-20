import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginRegister from "./pages/loginregister";
import Home from "./pages/home";
import InvalidPage from "./pages/invalidPage";
<<<<<<< HEAD
import AccountSettings from "./pages/accountSettings"
=======
import AccountSettings from "./pages/accountSettings";
import CourseGrid from "./pages/CourseGrid";
>>>>>>> 67389dc4387d5c1a6708c60a60b87ed53ba40766

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/login" exact component={LoginRegister}></Route>
<<<<<<< HEAD
        <Route path="/account-settings" exact component={AccountSettings}></Route>
        <Route component={InvalidPage}></Route>
=======
        <Route path="/courses" exact component={CourseGrid}></Route>
        <Route
          path="/account-settings"
          exact
          component={AccountSettings}
        ></Route>
>>>>>>> 67389dc4387d5c1a6708c60a60b87ed53ba40766
      </div>
    </Router>
  );
}

export default App;
