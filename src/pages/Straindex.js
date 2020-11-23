import React from "react";
import axios from "axios";
import { Table, Jumbotron } from "react-bootstrap";
import Factoids from "../components/Factoid/index";

function TheScrolls() {
  const [strain, setStrain] = React.useState({
    strains: [],
  });

  React.useEffect(() => {
    const getSTRAIN = async () => {
      const API_KEY = "mwfjhhH";
      const BASE_URL = "http://strainapi.evanbusse.com/" + API_KEY;
      const SEARCH_URL = BASE_URL + "/strains/search/all";
      try {
        const { data: strains } = await axios.get(SEARCH_URL);
        setStrain((strain) => ({
          ...strain,
          strains: Object.entries(strains).map(([name, obj]) => ({
            ...obj,
            name,
          })),
        }));
      } catch (error) {
        console.log(error);
      }
    };
    getSTRAIN();
  }, []);

  return (
    <>
      <Factoids w-100 text-center />
      <br></br>
      <Jumbotron w-100 text-center>
        <i className="fa fa-cannabis fa-7x" style={{ color: "whitesmoke" }}></i>{" "}
        <h2> T H E S C R O L L S . . . </h2>
        <h5>Please scroll. . . we have over 2000 strains</h5>
        <h6>(search feature coming soon)</h6>
      </Jumbotron>
      <Table
        striped
        borderd
        style={{
          color: "white",
          textAlign: "center",
          borderLeft: "1px solid white",
          borderRight: "1px solid white",
        }}
      >
        <thead
          style={{
            borderLeft: "1px solid white",
            borderRight: "1px solid white",
            background: "#064206",
          }}
        >
          <tr>
            <th>
              <h4>Name</h4>
            </th>
            <th>
              <h4>Race</h4>
            </th>
            <th>
              <h4>Flavors</h4>
            </th>
            <th>
              <h4>Positives</h4>
            </th>
            <th>
              <h4>Negatives</h4>
            </th>
            <th>
              <h4>Medical Effects</h4>
            </th>
          </tr>
        </thead>
        <tbody
          style={{
            borderLeft: "1px solid white",
            borderRight: "1px solid white",
            background: "#042f047e",
          }}
        >
          {strain.strains.map((s, i) => (
            <tr key={i}>
              <td>{s.name} </td>
              <td>{s.race} </td>
              <td>{s.flavors.join(", ")} </td>
              <td>{s.effects.positive.join(", ")} </td>
              <td>{s.effects.negative.join(", ")} </td>
              <td>{s.effects.medical.join(", ")} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
export default TheScrolls;
