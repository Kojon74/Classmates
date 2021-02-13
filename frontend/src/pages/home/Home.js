import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
import './home.css'
import classmates from '../../assets/classmates.jpg'

const Home = () => {
  return (
    <div>
      <Jumbotron style={{ backgroundImage: `url(${classmates})`, }}>
        <h1>Classmates</h1>
        <div style={{ width: "450px" }}>
          <p className="titlePara">
          Meeting your classmates online, and start collaborating now!
          </p>
        </div>
        <p>
          <Button variant="primary">Sign up</Button>
          <Button variant="light" className="signInButton">Sign in</Button>
        </p>
      </Jumbotron>
    </div>
  );
};


export default Home;
