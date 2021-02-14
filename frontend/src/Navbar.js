import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav">
      <Link className="nav-header" to="/">
        Classmates
      </Link>
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/about">
        About
      </Link>
    </nav>
  );
};

export default Navbar;
