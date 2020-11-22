import React from "react";

const facts = require("../Api/Strains/weedFacts.json");
function Factoids() {
  const randomFactoid = facts.facts;
  const displayRandomFact =
    randomFactoid[Math.floor(Math.random() * randomFactoid.length)];
  console.log(displayRandomFact);
  return (
    <div className="media">
      <div className="media-body">
        <h5 className="mt-0">You know...They say...</h5>
        <h6>{displayRandomFact}</h6>
      </div>
    </div>
  );
}
export default Factoids;
