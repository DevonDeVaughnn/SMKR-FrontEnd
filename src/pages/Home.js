import React from "react";
import Nav from "../components/Nav/index";
import user from "./SignUp";
import "../App.css";
import { Col, Row, Container } from "../components/Grid";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Home = () => {
  let user = "(change this to each user)";
  function addElement() {
    const element = document.getElementById("root");
    element.classList.add("bg");
    element.classList.add("bg bg2");
    element.classList.add("bg bg3");
    element.classList.add("content");
  }

  return (
    <div>
      <Container fluid>
        <Row>
          <Col size="md-3" className="column">
            <h2>Weed Shops</h2>

            <ul
              style={{
                listStyleType: "none",
                paddingTop: "30px",
              }}
            >
              <li>
                <a href="#" id="shops">
                  <img src="https://picsum.photos/200" alt="" />
                </a>
              </li>
            </ul>
            <ul
              style={{
                listStyleType: "none",
              }}
            >
              <li>
                <a href="#" id="shops">
                  <img src="https://picsum.photos/200" alt="" />
                </a>
              </li>
            </ul>
            <ul
              style={{
                listStyleType: "none",
              }}
            >
              <li>
                <a href="#" id="shops">
                  <img src="https://picsum.photos/200" alt="" />
                </a>
              </li>
            </ul>
            <ul
              style={{
                listStyleType: "none",
              }}
            >
              <li>
                <a href="#" id="shops">
                  <img src="https://picsum.photos/200" alt="" />
                </a>
              </li>
            </ul>
            <ul
              style={{
                listStyleType: "none",
              }}
            >
              <li>
                <a href="#" id="shops">
                  <img src="https://picsum.photos/200" alt="" />
                </a>
              </li>
            </ul>
          </Col>

          <Col size="md-6" className="column">
            <Nav />
            <h4 id="greeting">{user}, what are we SMKN?</h4>
            <textarea id="posts"></textarea>
            <hr />
            <h1>This will be a friends stream</h1>

            <button
              type="button"
              class="btn  btn-outline-primary"
              style={{
                color: "green",
                borderColor: "green",
              }}
            >
              <p>In Flight Movie</p>
            </button>
            <hr />
            <h2>This will be a square box that pulls movie recommendation</h2>
          </Col>
          <Col size="md-3" className="column">
            <h2>Food options</h2>
            <ul
              style={{
                listStyleType: "none",
                paddingTop: "30px",
              }}
            >
              <li>
                <a href="#" id="shops">
                  <img src="https://picsum.photos/200" alt="" />
                </a>
              </li>
            </ul>
            <ul
              style={{
                listStyleType: "none",
              }}
            >
              <li>
                <a href="#" id="shops">
                  <img src="https://picsum.photos/200" alt="" />
                </a>
              </li>
            </ul>
            <ul
              style={{
                listStyleType: "none",
              }}
            >
              <li>
                <a href="#" id="shops">
                  <img src="https://picsum.photos/200" alt="" />
                </a>
              </li>
            </ul>
            <ul
              style={{
                listStyleType: "none",
              }}
            >
              <li>
                <a href="#" id="shops">
                  <img src="https://picsum.photos/200" alt="" />
                </a>
              </li>
            </ul>
            <ul
              style={{
                listStyleType: "none",
              }}
            >
              <li>
                <a href="#" id="shops">
                  <img src="https://picsum.photos/200" alt="" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Home;
