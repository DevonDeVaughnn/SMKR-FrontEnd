import "./card.css";
import React, { Component, useState, useContext } from "react";
import axios from "axios";
import API from "../../utils/API";

import { Col, Info } from "../Grid";
var strains = require("../Api/Strains/strains.json");
function InfoCards() {
  const randomStrain1 = Object.keys(strains)[
    Math.floor(Math.random() * Object.keys(strains).length)
  ];
  const randomStrain2 = Object.keys(strains)[
    Math.floor(Math.random() * Object.keys(strains).length)
  ];
  const randomStrain3 = Object.keys(strains)[
    Math.floor(Math.random() * Object.keys(strains).length)
  ];
  const randomStrain4 = Object.keys(strains)[
    Math.floor(Math.random() * Object.keys(strains).length)
  ];
  const strainPositiveInfo1 = [
    Object(strains[randomStrain1].effects.positive[0]),
  ];
  const strainPositiveInfo2 = [
    Object(strains[randomStrain2].effects.positive[1]),
  ];
  const strainPositiveInfo3 = [
    Object(strains[randomStrain3].effects.positive[0]),
  ];
  const strainPositiveInfo4 = [
    Object(strains[randomStrain4].effects.positive[2]),
  ];

  const save = (e, req, res) => {
    e.preventDefault();

    axios
      .post("strain")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Col size="md-12" className="weedCard-flex">
      <Info
        className="card-deck"
        style={{
          width: "20rem",
        }}
      >
        <div className="strainInfo ">
          <img
            src="https://picsum.photos/200/"
            className="strainCard"
            alt="Weed Recipe"
          ></img>
          <div className="card-body">
            <h5 className="card-title ">{randomStrain4}</h5>
            <input
              type={"hidden"}
              value={randomStrain4}
              className="hidden-strain"
            />
            <p className="card-text">
              <span className="cardText">{strainPositiveInfo4}</span>
            </p>{" "}
            <button onClick={save}>Reccommend</button>
            <a
              className="card-text"
              href="https://www.cdc.gov/marijuana/health-effects.html"
            >
              <hr />
              <small className="text-muted">Learn more from the CDC</small>
            </a>
          </div>
        </div>
        <div className="strainInfo ">
          <img
            src="https://picsum.photos/200/"
            className="strainCard"
            alt="Weed Recipe"
          ></img>
          <div className="card-body">
            <h5 className="card-title ">{randomStrain1}</h5>
            <p className="card-text">
              <span className="cardText">{strainPositiveInfo1}</span>
            </p>{" "}
            {/* <button onClick={save}>Reccommend</button> */}
            <hr />
            <a
              className="card-text"
              href="https://www.cdc.gov/marijuana/health-effects.html"
            >
              <small className="text-muted">Learn more from the CDC</small>
            </a>
          </div>
        </div>
        <div className="strainInfo">
          <img
            src="https://picsum.photos/200/"
            className="strainCard"
            alt="Weed Top Liked"
          ></img>
          <div className="card-body">
            <h5 className="card-title">{randomStrain2}</h5>
            <p className="card-text">{strainPositiveInfo2}</p>
            {/* <button onClick={}>Reccommend</button> */}
            <hr />
            <a
              className="card-text"
              href="https://www.cdc.gov/marijuana/health-effects.html"
            >
              <small className="text-muted">Learn more from the CDC</small>
            </a>
          </div>
        </div>
      </Info>
    </Col>
  );
}
export default InfoCards;
