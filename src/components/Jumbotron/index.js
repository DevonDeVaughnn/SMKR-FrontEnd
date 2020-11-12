import React from "react";

function Jumbotron() {
  return (
    <>
      <article
        class="jumbotron jumbotron-fluid"
        style={{
          textAlign: "center",
          color: "grey",
        }}
      >
        <img src="./logo192.png" alt="SMKR Official Logo" />

        <h2 class="lead" id="slogan">
          We help navigate the clouds.
        </h2>
      </article>
    </>
  );
}

export default Jumbotron;
