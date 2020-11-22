import React, { Component } from "react";
import "./jumbotron.css";

class WelcomeJumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid">
          <h1 className="display-4">
            SMKR <i className="fas fa-cannabis "></i>
            <h6>Welcome, please sign-up to continue.</h6>
          </h1>
          <h2 className="lead"></h2>
        </div>
      </div>
    );
  }
}
export default WelcomeJumbotron;
