import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from './Card';
import Form from 'react-bootstrap/Form';
import './PopUp.css';

const PopUp = () => {
    const submitClickHandler = () => {

    }
    return (
        <div className="popUp">
            <Card>
                <Form className="form">
                    <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="e.g.: John" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="e.g.: John" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="text" placeholder="e.g.: example@email.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Student ID</Form.Label>
                    <Form.Control type="text" placeholder="e.g.: 12345" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>University</Form.Label>
                    <Form.Control as="select">
                        <option className="uoc">University of Calgary</option>
                        <option className="uoa">University of Alberta</option>
                        <option className="ubc">University of British Clombia</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Department</Form.Label>
                    <Form.Control as="select" multiple>
                        <option>Arts</option>
                        <option>Science</option>
                        <option>Engineering</option>
                        <option>Nursing</option>
                        <option>Law</option>
                    </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder="Must include numbers" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="text" placeholder="Must include numbers" />
                    </Form.Group>
                </Form>
        
                <Button variant="primary" className="mainPageButton">Submit</Button>
    
            </Card>
        </div>
    )
}

export default PopUp
