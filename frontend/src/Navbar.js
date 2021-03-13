import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logo.png";
import { Link, useHistory } from "react-router-dom";
import { projectAuth } from "./firebase";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { isLoggedIn } = useGlobalContext();

  let history = useHistory();

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const logout = () => {
    projectAuth.signOut();
    // await sleep(3000);
    history.push("/");
  };

  return (
    <nav className="nav">
      <div className="main-pages">
        <Link className="nav-header" to="/">
          <img className="logo" src={logo} alt="logo" />
          Classmates
        </Link>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </div>
      {isLoggedIn ? (
        <Link className="auth-link login" to="/login" onClick={logout}>
          Log out
        </Link>
      ) : (
        <div className="auth">
          <Link className="auth-link login" to="/login">
            Log in
          </Link>
          <Link className="auth-link signup" to="/signup">
            Sign up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
