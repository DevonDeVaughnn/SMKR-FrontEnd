import React from "react";
import Nav from "../components/Nav/index";
import Jumbotron from "../components/Jumbotron";
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
    favRecipes: [],
    friends: [],
    favFacts: [],
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
            <Col className="columns" lg={6}>
              Cards with liked recipes and strains
            </Col>
            <Col className="columns">Shops</Col>
            <Col className="columns">Food</Col>
          </Row>
          <Row>
            <Col className="columns liked-row" lg={12}>
              Three cards of previously liked recipes/strains
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
                <div class="container-fluid">
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
