import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginRegister from "./pages/loginregister";
import Home from "./pages/home";
import InvalidPage from "./pages/invalidPage";
import AccountSettings from "./pages/accountSettings"

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/login" exact component={LoginRegister}></Route>
        <Route path="/account-settings" exact component={AccountSettings}></Route>
        <Route component={InvalidPage}></Route>
      </div>
    </Router>
  );
}

export default App;