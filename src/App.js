import React from "react";
import UserContext from "./userContext/UserContext";
//import UserSign from "./pages/SignUp";
//import StrainCard from "./pages/StrainCard"
//import Messages from "./pages/Messages"
import Profile from "./pages/Profile";
// import FriendsPage from "./pages/Friends";
import Home from "./pages/Home";
import StrainSearch from "./pages/Straindex";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactUs from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <UserContext.Provider>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/register" component={} /> */}
            {/* <Route exact path="/login" component={} /> */}
            {/* <Route exact path="/:id" component={Profile} /> */}
            {/* <Route exact path="/friends/:id" component={FriendsPage} /> */}
            {/* <Route exact path="/straindex" component={StrainSearch} /> */}
            <Route exact path="/contactus" component={ContactUs} />
            {/* <Route exact path="/messages" component={Messages} /> */}
            {/* <Route exact path="/straindex/:id" component={StrainCard} /> */}
            {/* <Route exact path="/straindex/:id" component={AccountSettings} /> */}
            {/* <Route exact path="/straindex/:id" component={Contact /> */}
          </Switch>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
