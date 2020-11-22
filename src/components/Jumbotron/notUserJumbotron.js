import React, { Component } from "react";
import "./jumbotron.css";
import { Link } from "react-router-dom";

class NotUserJumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid">
          <h1 className="display-4">SMKR</h1>
          <h2 className="lead">
            Sorry, we don't see you in our database. Please sign-up! We're
            waiting!
          </h2>
          <Link to="/signup">Sign-up here.</Link>
        </div>
      </div>
    );
  }
}
export default NotUserJumbotron;
