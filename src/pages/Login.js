import React, { Component, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Row, Container, Form, Col, Button, Card } from "react-bootstrap";
import LoginJumbotron from "../components/Jumbotron/loginJumbotron";
import "../components/Form/form.css";

//import { BrowserRouter, Switch, Route } from "react-router-dom";

function Login() {
  let history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };
    axios
      .post("login", data)
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          history.push("/home");
        } else {
          alert("Either Username or Password is incorrect");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container fluid className="card card-text center">
      <Row>
        <LoginJumbotron />
      </Row>
      <Row>
        <Col size="md-12" className="column">
          <Form.Group onSubmit={handleSubmit()}>
            <label>Username</label>
            <Form.Control
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label>Password</label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          </Form.Group>
          <Button
            className="btn btn-block"
            type="submit"
            style={{ marginBottom: "70px" }}
            onClick={handleSubmit()}
          >
            <i className="fa fa-cannabis" style={{ color: "whitesmoke" }}></i>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
export default Login;
