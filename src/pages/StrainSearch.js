import React, { useState, useEffect } from "react";
import { setState } from "react-router-dom";

import "../components/AppCss/style.css";

import { Col, Row, Container, Button } from "react-bootstrap";
import axios from "axios";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function StrainSearch() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("/strain")
      .then((res) => console.log(res))
      .then((json) => setData(json));
  }, []);

  return <h1>Hello</h1>;
}
