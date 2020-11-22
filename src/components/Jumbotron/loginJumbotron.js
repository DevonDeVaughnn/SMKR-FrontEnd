import React, { Component } from "react";
import "./jumbotron.css";

class LoginJumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid">
          <h1 className="display-4">
            SMKR <i className="fas fa-cannabis "></i>
            <h6>Welcome back. Please Log-in.</h6>
          </h1>
        </div>
      </div>
    );
  }
}
export default LoginJumbotron;
