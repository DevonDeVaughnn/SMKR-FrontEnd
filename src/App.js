import React, { useState, useEffect } from "react";
import UserContext from "./context/UserContext";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Strain from "./pages/Strain";
// import Messages from "./pages/Messages"
import Profile from "./pages/Profile";
import Friends from "./pages/Friends";

// import StrainSearch from "./pages/Straindex";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/friends" component={Friends} />
            <Route exact path="/straindex" component={Strain} />
            {/* <Route exact path="/messages" component={Messages} /> */}

            {/* <Route exact path="/account/:id" component={AccountSettings} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
