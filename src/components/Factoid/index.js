import React from "react";

const facts = require("../Api/Strains/weedFacts.json");
function Factoids() {
  const randomFactoid = facts.facts;
  const displayRandomFact =
    randomFactoid[Math.floor(Math.random() * randomFactoid.length)];
  console.log(displayRandomFact);
  return (
    <div className="media">
      <div className="media-body text-center">
        <h5 className="mt-4 text-center">You know...They say...</h5>
        <h6 className="mt-4 text-center">{displayRandomFact}</h6>
      </div>
    </div>
  );
}
export default Factoids;
