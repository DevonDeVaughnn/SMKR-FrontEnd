import React, { Component } from "react";
import { setState } from "react-dom";
import Nav from "../components/Nav/index";
import Jumbotron from "../components/Jumbotron";
import NotUserJumbotron from "../components/Jumbotron";
import InfoCards from "../components/Card";
import Factoid from "../components/Factoid";
import "../App.css";
import { Col, Row, Container } from "../components/Grid";
import axios from "axios";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class Home extends Component {
  state = {
    user: "",
    date: Date.now(),
  };
  componentDidMount() {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    axios.get("/home", config).then(
      (res) => {
        this.setState({
          user: res.data,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="md-12" className="column">
              <Nav />
              <Jumbotron billy="goat" userData={this.state.user} />
              <p>This works</p>
              <InfoCards />
              <Factoid />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
