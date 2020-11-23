import React from "react";
import Nav from "../components/Nav/index";
import { Card, Row, Button, Container } from "react-bootstrap";
import axios from "axios";

//extracting the name from the key

function StrainCards() {
  const [strain, setStrain] = React.useState({
    strains: [],
  });
  const [strainIndex, setStrainIndex] = React.useState(0);
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

  React.useEffect(() => {
    getSTRAIN();
  }, []);
  const handleButtonClick = (num) => {
    if (strainIndex === 0 && num === -1) {
      return setStrainIndex(strain.strains.length - 1);
    }
    if (strainIndex === strain.strains.length - 1 && num === 1) {
      return setStrainIndex(0);
    }
    if (num === 1) {
      return setStrainIndex((prevIndex) => prevIndex + 1);
    } else {
      return setStrainIndex((prevIndex) => prevIndex - 1);
    }
  };
  const currStrain = strain.strains[strainIndex];

  return (
    <>
      {strain.strains.length > 0 ? (
        <Container text-center className="bg-dark text-center text-white">
          <div>
            <Nav />
          </div>
          <Card.Img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUvbJWCwqCC7vQuV961Bb-ug8jXu-RaHUYw&usqp=CAU"
            alt="Card image"
          />
          <Card.Header>The Staindex (Switching Api Soon)</Card.Header>
          <Card.Title style={{ textDecoration: "underline", color: "" }}>
            <h2>{currStrain.name}</h2>
          </Card.Title>{" "}
          <Card.Text style={{ textDecoration: "underline", color: "" }}>
            <h4>Flavors</h4>
            {currStrain.flavors.map((flavor) => (
              <span className="cardText"> {flavor}</span>
            ))}
          </Card.Text>
          <Card.Text style={{ textDecoration: "underline", color: "" }}>
            <h4>Upsides</h4>
            {currStrain.effects.positive.map((effect) => (
              <span className="cardText"> {effect}</span>
            ))}
          </Card.Text>
          <Card.Text style={{ textDecoration: "underline", color: "" }}>
            <h4>Downsides</h4>
            {currStrain.effects.negative.map((effect) => (
              <span className="cardText"> {effect}</span>
            ))}
          </Card.Text>
          <div className="cardBody">
            <Button
              className="cardLink btn btn-primary"
              onClick={() => handleButtonClick(-1)}
            >
              Prev
            </Button>
            <Button
              className="cardLink btn btn-primary"
              onClick={() => handleButtonClick(1)}
            >
              Next
            </Button>
          </div>
        </Container>
      ) : null}
    </>
  );
}
export default StrainCards;

// effects:
// medical: (5) ["Depression", "Insomnia", "Pain", "Stress", "Lack of Appetite"]
// negative: ["Dizzy"]
// positive: (4) ["Relaxed", "Hungry", "Happy", "Sleepy"]
// __proto__: Object
// flavors: Array(3)
// 0: "Earthy"
// 1: "Chemical"
// 2: "Pine"
// length: 3
// __proto__: Array(0)
// id: 1
// name: "Afpak"
// race: "hybrid"
