import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

class Nav extends Component {
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
              <Link to="/profile" className="nav-link">
                Reccomendations
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
