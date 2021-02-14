import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Course from "./pages/course/Course";
import { AppProvider } from "./pages/course/context";

const App = () => {
  return (
    <AppProvider>
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
    </AppProvider>
  );
};

export default App;
