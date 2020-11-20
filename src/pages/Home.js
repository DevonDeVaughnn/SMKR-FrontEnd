import React, { Component } from "react";
import { setState } from "react-dom";
import Nav from "../components/Nav/index";
import Jumbotron from "../components/Jumbotron";
import BottomJumbotron from "../components/Jumbotron/FactJumbotron";
import InfoCards from "../components/Card";
import Factoid from "../components/Factoid";
import "../components/AppCss/style.css";
import "../";
import { Col, Row, Container, Button } from "react-bootstrap";
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
        <Container fluid className="home-container">
          <Row>
            <Col size="md-12" className="column">
              <Nav />
              <Jumbotron userData={this.state.user} />
              <InfoCards />
            </Col>
          </Row>
          <Row>
            <Col size="md-12" className="column">
              <BottomJumbotron />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
