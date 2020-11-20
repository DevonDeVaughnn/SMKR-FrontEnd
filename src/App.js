import React, { useState, useEffect } from "react";
import UserContext from "./context/UserContext";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AccountSettings from "./pages/AccountSettings";
import OMDB from "./components/Api/OMDB/OMDB";
import Straindex from "./pages/StrainCards";
// import Messages from "./pages/Messages"
import Profile from "./pages/Profile";

// import StrainSearch from "./pages/Straindex";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/ombd" component={OMDB} />
            <Route exact path="/straindex" component={Straindex} />
            <Route exact path="/account" component={AccountSettings} />

            {/* <Route exact path="/account/:id" component={AccountSettings} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
