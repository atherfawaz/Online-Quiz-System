import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginRegister from "./pages/loginregister";
import Home from "./pages/home";
import InvalidPage from "./pages/invalidPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home}></Route>
        <Route path="/home" exact component={LoginRegister}></Route>
        <Route path="/login" exact component={LoginRegister}></Route>
        <Route component={InvalidPage}></Route>
      </div>
    </Router>
  );
}

export default App;
