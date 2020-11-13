import React from "react";
import data from "../data.json";

/*
I need to iterate over the array and generate a unique card per strain
Main problem is that the json file has no key for the name of the strain
The name of the strain is an actual array that contains all of the other elements
Tough challenge


*/

function extractJSON(obj, indent) {
  for (const i in obj) {
    if (Array.isArray(obj[i]) || typeof obj[i] === "object") {
      console.log(indent + i + " is array or object");
      extractJSON(obj[i], indent + " > " + i + " > ");
    } else {
      console.log(indent + i + ": " + obj[i]);
    }
  }
}

//extracting the name from the key
const strainNames = Object.keys(data[0]);
extractJSON(strainNames, "");

function Strain() {
  return (
    <div className="card" style={{ width: "18rem" }}>
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
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
}
export default Strain;
