import React, { Component } from "react";
import { setState } from "react-dom";

import Jumbotron from "../../Jumbotron";
import BottomJumbotron from "../../Jumbotron/FactJumbotron";

import { Col, Row, Container, Button } from "react-bootstrap";
import axios from "axios";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class OMDB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomMovie: {
        title: "",
        year: "",
        rating: 0,
        actors: "",
        plot: "",
        author: "",
      },
    };
  }

  async componentDidMount() {
    let movie = Math.floor(Math.random() * 2155529 + 1);
    let queryURL = `http://www.omdbapi.com/?i=tt${movie}&apikey=989099eb`;
    const ranMovie = await axios({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log("response", response);

      let movieRand = {
        title: response.data.Title,
        year: response.data.Year,
        rating: response.data.Rating,
        actors: response.data.Actors,
        plot: response.data.Plot,
        author: response.data.Author,
      };

      return movieRand;
    });
    this.setState({
      randomMovie: ranMovie,
    });
    console.log("hey:", this.state.randomMovie);
  }

  // async handleClick() {
  //   let movie = Math.floor(Math.random() * 2155529 + 1);
  //   let queryURL = `http://www.omdbapi.com/?i=tt${movie}&apikey=989099eb`;
  //   const newMovieRand = axios({
  //     url: queryURL,
  //     method: "GET",
  //   }).then(function (response) {
  //     const newMovie = {
  //       title: response.data.Title,
  //       year: response.data.Year,
  //       rating: response.data.Rating,
  //       actors: response.data.Actors,
  //       plot: response.data.Plot,
  //       author: response.data.Author,
  //     };
  //     return newMovie;
  //   });
  //   this.setState({
  //     randomMovie: newMovieRand,
  //   });
  // }

  render() {
    let result;
    if (!this.state.randomMovie.title) {
      result = (
        <Container fluid className="home-container">
          Random Movie Fail to load
          {/* <button onClick={this.handleClick}>Try again</button> */}
        </Container>
      );
    } else {
      result = (
        <Container fluid className="home-container text-center">
          <p id="title">{this.state.randomMovie.title}</p>
          <p id="year">{this.state.randomMovie.year}</p>
          <p id="rating">{this.state.randomMovie.rating}</p>
          <p id="actors">{this.state.randomMovie.actors}</p>
          <p id="plot">{this.state.randomMovie.plot}</p>

          <hr />
          <p id="author">{this.state.randomMovie.author}</p>
        </Container>
      );
    }
    return <div>{result}</div>;
  }
}
