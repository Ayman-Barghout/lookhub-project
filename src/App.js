import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import User from "./components/pages/User";
import Users from "./components/pages/Users";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar icon="fab fa-github" title="LookHub" />
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/about" component={About} />
          <Route exact path="/user/:login" component={User} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
