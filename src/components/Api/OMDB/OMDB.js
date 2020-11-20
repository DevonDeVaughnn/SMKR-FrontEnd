import React, { Component } from "react";
import { setState } from "react-dom";

import Jumbotron from "../../Jumbotron";
import BottomJumbotron from "../../Jumbotron/FactJumbotron";

import { Col, Row, Container, Button } from "react-bootstrap";
import axios from "axios";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class OMDB extends Component {
  getRandomMovie = (data) => {
    let movieString = JSON.stringify(data);
    var title = "space+jam";
    var queryURL =
      "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=989099eb";

    axios({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      console.log(response.Runtime);
    });
  };

  render() {
    return (
      <div>
        <Container fluid className="home-container">
          <p id="title">Forrest Gump</p>
          <p id="year">1994</p>
          <p id="rating">8.8</p>
          <p id="actors">
            Tom Hanks, Rebecca Williams, Sally Field, Michael Conner Humphreys
          </p>
          <p id="plot">
            Forrest Gump, while not intelligent, has accidentally been present
            at many historic moments, but his true love, Jenny Curran, eludes
            him.
          </p>

          <button id="refresh">Next</button>
          <hr />
          <p id="author">© 2014 Yiğit Biber</p>
        </Container>
      </div>
    );
  }
}
