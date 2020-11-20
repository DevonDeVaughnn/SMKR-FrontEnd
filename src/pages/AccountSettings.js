import React, { Component } from "react";
import axios from "axios";
import { Row, Container, Form, Col, Button, Card } from "react-bootstrap";
import LoginJumbotron from "../components/Jumbotron/loginJumbotron";
import "../components/Form/form.css";

//import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: this.username,
      password: this.password,
    };
    axios
      .post("login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <Container fluid className="card card-text center">
        <Row>
          <LoginJumbotron />
        </Row>
        <Row>
          <Col size="md-12" className="column">
            <Button variant="primary" size="lg" block>
              Update username
            </Button>
            <Button variant="primary" size="lg" block>
              Update email
            </Button>
            <Button variant="primary" size="lg" block>
              Update password
            </Button>
            <Button variant="danger" size="lg" block>
              Delete account
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
