/*
-It will have a navbar
-user picture in middle(future dev)
-Under the nav bar will be three boxes with random weeds and their positive 
    -tell axios to grab three random strains from the db and put them in an array
    - for each in the array create a card 
-Directly under that, will be a stream of users input
-on the right side of the page will be random memes
-on the left side will be random movie quotes
-possible spotify on bottom middle
*/
import React from "react";
import Nav from "../components/Nav/index";

import "../App.css";
import { Col, Row, Container } from "../components/Grid";

const Home = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col size=" md-3" className="column">
            <h2>Random bad movie posters</h2>

            <ul
              style={{
                listStyleType: "none",
                paddingTop: "150px",
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
            <img
              src="https://picsum.photos/400"
              alt=""
              style={{
                border: "5px solid #555",
                borderRadius: "10px",
                marginTop: "150px",
              }}
            />
            <h5>This will be the users name</h5>
            <hr />
            <h1>This will be users stream</h1>

            <hr />
            <h2>
              This will be three boxes with cards of their fav three strands
            </h2>
          </Col>
          <Col size="md-3" className="column">
            <h2>Food options</h2>
            <ul
              style={{
                listStyleType: "none",
                paddingTop: "150px",
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
