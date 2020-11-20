import React, { Component } from "react";
import "./jumbotron.css";
import Factoid from "../Factoid";

class BottomJumbotron extends Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container-fluid">
          <h1 class="display-4">
            <i className="fas fa-cannabis fa-3x"></i>
          </h1>
          <h2 class="lead">
            <Factoid />
          </h2>
        </div>
      </div>
    );
  }
}
export default BottomJumbotron;
