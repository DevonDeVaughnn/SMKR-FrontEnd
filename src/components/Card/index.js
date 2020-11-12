import React from "react";
import "./jumbotron.css";
import Nav from "../Nav";
import user from "../Form/signupForm";

function Card() {
  return (
    <>
      <article className="jumbotron jumbotron-fluid">
        <h2 id="welcome">Welcome {user}!</h2>
        <h4 id="slogan">We help navigate the clouds.</h4>
      </article>
    </>
  );
}

export default Card;
