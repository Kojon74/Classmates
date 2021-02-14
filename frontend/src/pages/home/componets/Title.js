import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
import '../home.css'
import classmates from '../../../assets/classmates.jpg'

const Title = props => {
    return (
        <Jumbotron style={{ backgroundImage: `url(${classmates})`, ...props.style}}>
          <h1 className="companyName">{props.children}</h1>
          <div style={{ width: "450px" }}>
            <p className="titlePara">
            Meeting your classmates online, and start collaborating now!
            </p>
          </div>
          <p>
            <Button onClick={ event => window.location.href='/about'} variant="primary">Learn More</Button>
          </p>
        </Jumbotron>
    );
};


export default Title
