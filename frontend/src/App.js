import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Course from "./pages/course/Course";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/course">
          <Course />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
