import React, { Component } from "react";
import "./jumbotron.css";
import Factoid from "../Factoid";

class BottomJumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid">
          <h1 className="display-4">
            <i className="fas fa-cannabis fa-3x"></i>
          </h1>
          <h2 className="lead">
            <Factoid />
          </h2>
        </div>
      </div>
    );
  }
}
export default BottomJumbotron;
