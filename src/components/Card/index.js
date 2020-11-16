import React from "react";
import "./jumbotron.css";
import Nav from "../Nav";
//import user from "../Form/signupForm";

function Card() {
  return (
    <>
      <article className="card" style={{ width: "20rem" }}>
        <img className="card-img-top" src="..." alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">{}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            next
          </a>
          <a href="#" className="card-link">
            prev
          </a>
        </div>
        <h2 id="welcome">Welcome {user}!</h2>
        <h4 id="slogan">We help navigate the clouds.</h4>
      </article>
    </>
  );
}

export default Card;
