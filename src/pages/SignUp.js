import React, { Component } from "react";
import axios from "axios";
import WelcomeJumbotron from "../components/Jumbotron/welcomeJumbotron";

// import UserContext from "../context/UserContext";
// import { useHistory } from "react-router-dom";
import { Row, Container, Form, Col, Button } from "react-bootstrap";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class SignUp extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: this.username,
      password: this.password,
      email: this.email,
      age: this.age,
    };
    console.log(data);
    axios
      .post("/signup", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <WelcomeJumbotron />
        </Row>
        <Row>
          <Col size="md-12" className="column">
            <Form.Group onSubmit={this.handleSubmit}>
              <label>Username</label>
              <Form.Control
                type="text"
                placeholder="Username"
                onChange={(e) => (this.username = e.target.value)}
              />
              <br />
              <label>Email</label>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => (this.email = e.target.value)}
              />
              <br />
              <label>Password</label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => (this.password = e.target.value)}
              />
              <br />
              <label>Age</label>
              <Form.Control
                type="number"
                placeholder="Age"
                onChange={(e) => (this.age = e.target.value)}
              />
              <br />
            </Form.Group>
            <Button
              className="btn btn-primary btn-block"
              type="submit"
              onClick={this.handleSubmit}
            >
              Sign-Up
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
