import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    userName: "",
    age: "",
    email: "",
    password: "",
    //favStrain
    //favRecipes
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.userName && user.email && user.age && user.password) {
      const newUser = { ...user, id: new Date().getTime.toString() };
      setUsers([...user, newUser]);
      setUser({ userName: "", email: "", age: "", password: "" });
    }
  };

  return (
    <div className="container">
      <article class="jumbotron jumbotron-fluid">
        <h1 class="display-4" id="jumbotron-title">
          SMKR
        </h1>
        <h4 class="lead">We help navigate the clouds.</h4>
      </article>
      <div>
        <article>
          <p>Please Sign-Up to continue!</p>

          <form className="signup-form">
            <div className="form-control">
              <label htmlFor="email">E-Mail: </label>
              <input
                type="text"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="userName">Username: </label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={user.userName}
                onChange={handleChange}
              />
            </div>

            <div className="form-control">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="age">Age: </label>
              <input
                type="text"
                id="age"
                name="age"
                value={user.age}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={parseInt(user.age) < 21 ? true : false}
            >
              Take Flight!
            </button>
          </form>
        </article>
      </div>
    </div>
  );
}

export default App;
