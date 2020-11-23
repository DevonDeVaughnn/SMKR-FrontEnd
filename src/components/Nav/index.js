import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import axios from "axios";

class Nav extends React.Component {
  state = {
    id: "",
    race: "",
    flavors: "",
    effects: "",
    name: "",
    strain: [],
  };
  componentDidMount = () => {
    this.getStrain();
  };
  getStrain = async () => {
    axios
      .get("strain/:id")
      .then((response) => {
        const data = response.data;
        this.setState({ strain: data });
        console.log("Data Recieved");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  displayStrain = (strain) => {
    if (!strain) return null;

    strain.map((strain, index) => {
      <div key={index}>
        <h3>{strain.name}</h3>
        <p>{strain.race}</p>
      </div>;
    });
  };
  searchStrain = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-brand">SMKR</div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/home" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                My Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/thescrolls" className="nav-link">
                The Scrolls
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/strains" className="nav-link">
                The Scroll Cards
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Straindex
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/straindex" className="dropdown-item">
                  Strain Library
                </Link>

                <Link to="/account" className="dropdown-item">
                  Account Settings
                </Link>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button
              onClick={this.getStrain()}
              className="btn btn-primary"
              type="submit"
              //disabled={parseInt(user.age) < 21 ? true : false}
              style={{
                textAlign: "center",
                position: "center",
                border: "none",

                fontFamily: "Playfair Display, serif",
              }}
            >
              <i className="fas fa-cannabis"></i>
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Nav;
