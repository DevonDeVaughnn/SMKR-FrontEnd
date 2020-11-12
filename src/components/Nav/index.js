import React from "react";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <i
        class=" fas fa-cannabis"
        href="#"
        style={{
          textDecoration: "underline",
          color: "green",
        }}
      >
        SMKR
      </i>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Friends
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Messages
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Weedipedia
            </a>
          </li>
        </ul>
        <li
          class="nav-item dropdown"
          style={{
            listStyleType: "none",
          }}
        >
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{
              color: "green",
            }}
          >
            {" "}
            Options
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a
              class="dropdown-item"
              href="#"
              style={{
                color: " #ff6ec7 ",
              }}
            >
              <i class="fas fa-cannabis" id="dankLeaf">
                {" "}
              </i>{" "}
              Dank Mode{" "}
              <i class="fas fa-cannabis" id="dankLeaf">
                {" "}
              </i>
            </a>
            <a class="dropdown-item" href="#">
              Account Settings
            </a>
            <a class="dropdown-item" href="#">
              Contact Us
            </a>
          </div>{" "}
        </li>
      </div>
    </nav>
  );
}
export default Nav;
