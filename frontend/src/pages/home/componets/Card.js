import React from 'react';
import '../home.css'

const Card = props => {
    return (
        <div className="card">{props.children}</div>
    );
};



export default Card;
