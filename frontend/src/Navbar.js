import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import logo from './assets/logo.png';

const Navbar = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="logo" width="55px"/>
      <h1 className="nav-header">Classmates</h1>
      <Button
        onClick={(event) => (window.location.href = "/")}
        className="navbarButton"
        variant="outline-primary"
      >
        Home
      </Button>

      <Button
        onClick={(event) => (window.location.href = "/about")}
        className="navbarButton"
        variant="outline-secondary"
      >
        About
      </Button>
    </nav>
  );
};

export default Navbar;
