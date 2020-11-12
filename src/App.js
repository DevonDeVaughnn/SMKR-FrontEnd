//import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import UserSign from "./pages/SignUp";
import Jumbotron from "./components/Jumbotron";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <UserSign />
    </div>
  );
}

export default App;
