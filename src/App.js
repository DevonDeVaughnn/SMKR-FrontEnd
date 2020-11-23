import React, { useState, useEffect } from "react";
import UserContext from "./context/UserContext";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import StrainCards from "./pages/StrainCards";
import AccountSettings from "./pages/AccountSettings";
import Straindex from "../src/pages/Straindex";
import TheScrolls from "./pages/Straindex";
import Profile from "./pages/Profile";

// import StrainSearch from "./pages/Straindex";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const isLoggedIn = async () => {
      let token = localStorage.getItem("token");
      if (token === null) {
        localStorage.setItem("token", "3");
        token = "";
      }
      const tokenRes = await axios.post("/tokenValid", null, {
        headers: { token: token },

        if(err) {
          console.log(err, "couldn't get the token");
        },
      });

      if (tokenRes.data) {
        const userRes = await axios
          .get("/", {
            headers: { "x-auth-token": token },
          })
          .then(
            setUserData({
              token,
              user: userRes,
            }).catch((err) => {
              if (err) {
                console.log(err, "token res error");
              }
            })
          );
      }
    };
    isLoggedIn();
  }, []);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route exact path="/" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/thescrolls" component={TheScrolls} />
            <Route exact path="/strains" component={StrainCards} />
            <Route exact path="/account" component={AccountSettings} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>{" "}
    </>
  );
}
