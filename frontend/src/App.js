import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Course from "./pages/course/Course";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import { AppProvider } from "./context";

const App = () => {
  return (
    <Router>
      <AppProvider>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/course">
            <Course />
          </Route>
        </Switch>
      </AppProvider>
    </Router>
  );
};

export default App;
