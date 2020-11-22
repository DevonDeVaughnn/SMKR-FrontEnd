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
          <Row>
            <Col className="columns spotify-widget">Spotify widget</Col>
          </Row>
          <Row className="rows">
            <Col className="columns profile-picture" lg={12}>
              <img src="https://picsum.photos/200" alt="random pic"></img>
              <h4>User Name</h4>
            </Col>
          </Row>
          <Row>
            <Col className="columns" lg={12}>
              <InfoCards />
            </Col>
          </Row>
          <Row className="text-center">
            <Col className="columns text-center shops">
              <h4>Shops</h4>
              <Row className="shops">Shop 1</Row>
              <Row className="shops">Shop 2</Row>
              <Row className="shops">Shop 3</Row>
            </Col>
            <Col className="columns">
              <h4>Food</h4>
              <Row className="food">Restaurant 1</Row>
              <Row className="food">Restaurant 2</Row>
              <Row className="food">Restaurant 3</Row>
            </Col>
          </Row>

          <Row>
            <Col className="columns movie-column-button">
              <button className="btn btn-primary display-movie-btn">
                Button that grabs poster and places it inside the row below
              </button>
            </Col>
          </Row>
          <Row>
            <Col className="columns movie-column">
              <div className="jumbotron jumbotron-fluid movie-jumbotron">
                <div className="container-fluid">
                  image that takes up width of col displays movies
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
