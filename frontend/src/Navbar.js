import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Navbar = () => {
  return (
    <nav className="nav">
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
