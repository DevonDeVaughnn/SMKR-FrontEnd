import React from "react";

import "../App.css";
import { Col, Row, Container } from "../components/Grid";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function Home() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col size="md-3">
            <h2>This will be shops near you</h2>
          </Col>
          <Col size="md-6">
            <h2>This will be Navbar/Stream</h2>
          </Col>
          <Col size="md-3">
            <h2>This will be food option</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Home;
