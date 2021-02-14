import React, { useState, useHistory } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Navbar = () => {
  return (
    <div>
      <Button onClick={event =>  window.location.href='/'} className="navbarButton" variant="outline-primary">
        Home
      </Button>
    
      <Button onClick={event =>  window.location.href='/about'} className="navbarButton" variant="outline-secondary">
        About
      </Button>
    </div>
  );
};

export default Navbar;
