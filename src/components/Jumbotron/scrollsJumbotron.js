import React, { Component } from "react";
import "./jumbotron.css";

class ScrollsJumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid">
          <h1 className="display-4">
            SMKR
            <h6>
              <i className="fas fa-cannabis "></i> Welcome, please sign-up to
              continue.
            </h6>
          </h1>
        </div>
      </div>
    );
  }
}
export default ScrollsJumbotron;
