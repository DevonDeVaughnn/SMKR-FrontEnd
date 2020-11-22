import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import WelcomeJumbotron from "../components/Jumbotron/welcomeJumbotron";
import "../components/Form/form.css";
// import UserContext from "../context/UserContext";
// import { useHistory } from "react-router-dom";
import { Row, Container, Form, Col, Button } from "react-bootstrap";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function SignUp() {
  let history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
      email: email,
      age: age,
    };

    axios
      .post("/signup", data)
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          history.push("/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container fluid className="card card-text center">
      <Row>
        <WelcomeJumbotron />
      </Row>
      <Row>
        <Col size="md-12" className="column text-center">
          <Form.Group onSubmit={handleSubmit}>
            <label>Username</label>
            <Form.Control
              type="text"
              placeholder="Enter a unique username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label>Email</label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Password</label>
            <Form.Control
              type="password"
              placeholder="Password must be at least 6 characters"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <label>Age</label>
            <Form.Control
              type="number"
              placeholder="You must be 21 to register"
              onChange={(e) => setAge(e.target.value)}
            />
            <br />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{ marginBottom: "70px" }}
            onClick={handleSubmit}
          >
            <i className="fa fa-cannabis" style={{ color: "whitesmoke" }}></i>{" "}
            Sign-Up
          </Button>
          <Link to="/login">
            {" "}
            <Button
              variant="primary"
              type="submit"
              style={{ marginBottom: "70px" }}
            >
              Log-In{" "}
              <i className="fa fa-cannabis" style={{ color: "whitesmoke" }}></i>
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
export default SignUp;
