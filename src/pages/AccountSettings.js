import React, { Component } from "react";
import axios from "axios";
// import User from "../../../SMKR-BackEnd/models";
import { Row, Container, Form, Col, Button, Card } from "react-bootstrap";
import LoginJumbotron from "../components/Jumbotron/loginJumbotron";
import "../components/Form/form.css";

//import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class AccountSetting extends Component {
  state = {
    oldEmail: "",
    newEmail: "",
    oldPassword: "",
    newPassword: "",
    newUserName: "",
    oldUserName: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleUpdateEmail = async () => {
    // console.log(this.state.oldEmail, this.state.newEmail);
    const res = await axios.put("/updateEmail", {
      newEmail: this.state.newEmail,
      oldEmail: this.state.oldEmail,
    });
  };
  handleUpdatePassword = async () => {
    // console.log(this.state.oldPassword, this.state.newPassword);
    const res = await axios.put("/updatePassword", {
      newPassword: this.state.newPassword,
      oldPassword: this.state.oldPassword,
    });
  };
  handleUpdateUserName = async () => {
    // console.log(this.state.oldUserName, this.state.newUserName);
    const res = await axios.put("/updateUserName", {
      newUserName: this.state.newUserName,
      oldUserName: this.state.oldUserName,
    });
  };
  handleDeleteUser = async () => {
    const res = await axios.delete("/deleteUser", { data: this.state.id });
  };
  render() {
    return (
      <Container fluid className="card card-text center">
        <Row>
          <LoginJumbotron />
        </Row>
        <Row>
          <Col size="md-12" className="column">
            <Form.Group onSubmit={this.handleSubmit}>
              <h1>Update Username</h1>
              <label> Old Username</label>
              <Form.Control
                name="oldUserName"
                value={this.state.oldUserName}
                type="text"
                placeholder=" old Username"
                onChange={this.handleChange}
              />
              <br />
              <label>New Username</label>
              <Form.Control
                name="newUserName"
                value={this.state.newUserName}
                type="text"
                placeholder="new Username"
                onChange={this.handleChange}
              />
              <br />
              <Button
                onClick={this.handleUpdateUserName}
                variant="primary"
                size="lg"
                block
              >
                Update Username
              </Button>
            </Form.Group>
            <h1>Update Email</h1>
            <Form.Group>
              <label>old Email</label>
              <Form.Control
                name="oldEmail"
                value={this.state.oldEmail}
                type="text"
                placeholder="oldEmail@email.com"
                onChange={this.handleChange}
              />
              <br />
              <label>New Email</label>
              <Form.Control
                name="newEmail"
                value={this.state.newEmail}
                type="text"
                placeholder="newEmail@email.com"
                onChange={this.handleChange}
              />
              <br />
              <Button
                onClick={this.handleUpdateEmail}
                variant="primary"
                size="lg"
                block
              >
                Update Email
              </Button>
            </Form.Group>
            <h1>Update Password</h1>
            <Form.Group onSubmit={this.handleSubmit}>
              <label> Old Password</label>
              <Form.Control
                name="oldPassword"
                value={this.state.oldPassword}
                type="password"
                placeholder=" old Password"
                onChange={this.handleChange}
              />
              <br />
              <label> New Password</label>
              <Form.Control
                name="newPassword"
                value={this.state.newPassword}
                type="password"
                placeholder=" new Password"
                onChange={this.handleChange}
              />
              <br />
              <Button
                onClick={this.handleUpdatePassword}
                variant="primary"
                size="lg"
                block
              >
                Update password
              </Button>
            </Form.Group>
            <Button
              onClick={this.handleDeleteUser}
              variant="danger"
              size="lg"
              block
            >
              Delete account
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
