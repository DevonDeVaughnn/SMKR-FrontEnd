import React from "react";
import Nav from "../components/Nav/index";
import Jumbotron from "../components/Jumbotron";
import InfoCards from "../components/Card";
import axios from "axios";
import "../components/Profiles/style.css";
import { Col, Row, Container } from "react-bootstrap";

class Profile extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    age: "",
    favStrains: [],
  };

  getUserInfo = () => {
    axios
      .get("/users")
      .then(() => {
        console.log("Data Recieved");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Nav />
          </Row>
          <Row>
            <Jumbotron />
          </Row>
          <Row className="rows">
            <Col className="columns profile-picture" lg={12}>
              <img src="https://picsum.photos/200" alt="random pic"></img>
            </Col>
          </Row>
          <Row>
            <Col className="columns movie-column-button"></Col>
          </Row>
          <Row>
            <Col className="columns movie-column"></Col>
          </Row>{" "}
          <Row>
            <Col className="columns" lg={12}>
              <InfoCards />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
