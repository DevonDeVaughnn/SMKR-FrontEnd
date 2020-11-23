import React, { useState } from "react";
import { setState } from "react-dom";
import Nav from "../components/Nav/index";
import Jumbotron from "../components/Jumbotron";
import BottomJumbotron from "../components/Jumbotron/FactJumbotron";
import Factoid from "../components/Factoid";
import SearchStrain from "./StrainCards";
import "../components/AppCss/style.css";
import "../";
import { Col, Row, Container, Button } from "react-bootstrap";
import axios from "axios";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OMDB from "../components/Api/OMDB/OMDB";

export default function Home() {
  return (
    <Container fluid className="home-container">
      <Row>
        <Col size="md-12" className="column text-center">
          <Nav />
          <Jumbotron />
          <p style={{ alignText: "center" }}>
            (New Movie Api for your convenience coming soon!)
          </p>
        </Col>
      </Row>
      <Row>
        <Col size="md-12" className="column">
          <OMDB />
          <BottomJumbotron />
        </Col>
      </Row>
      <br />
    </Container>
  );
}
