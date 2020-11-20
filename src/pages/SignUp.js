import React, { Component } from "react";
import axios from "axios";
import WelcomeJumbotron from "../components/Jumbotron/welcomeJumbotron";
import "../components/Form/form.css";
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
      <Container fluid className="card card-text center">
        <Row>
          <WelcomeJumbotron />
        </Row>
        <Row>
          <Col size="md-12" className="column text-center">
            <Form.Group onSubmit={this.handleSubmit}>
              <label>Username</label>
              <Form.Control
                type="text"
                placeholder="Enter a unique username"
                onChange={(e) => (this.username = e.target.value)}
              />
              <br />
              <label>Email</label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                onChange={(e) => (this.email = e.target.value)}
              />
              <br />
              <label>Password</label>
              <Form.Control
                type="password"
                placeholder="Password must be at least 6 characters"
                onChange={(e) => (this.password = e.target.value)}
              />
              <br />
              <label>Age</label>
              <Form.Control
                type="number"
                placeholder="You must be 21 to register"
                onChange={(e) => (this.age = e.target.value)}
              />
              <br />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ marginBottom: "70px" }}
              onClick={this.handleSubmit}
            >
              {" "}
              <i className="fa fa-cannabis" style={{ color: "whitesmoke" }}></i>
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
