import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from './Card';
import Form from 'react-bootstrap/Form';
import './PopUp.css';

const PopUp = ({setShowModal}) => {
    const submitClickHandler = () => {
        if (firstName==0 || lastName==0 || enteredEmail==0 || enteredStudentId==0 || university==0 || department==0 || enteredPassword==0 || enteredConfirmPassword==0) {
            setNoEmptyFields(false);
        } else if (enteredPassword != enteredConfirmPassword) {
            setPasswordsMatch(false);
        } else {
            window.location.href='/course'
        }
    };
    const[firstName, setFirstName] = useState(0);
    const[lastName, setLastName] = useState(0);
    const[enteredEmail, setEnteredEmail] = useState(0);
    const[enteredStudentId, setEnteredStudentId] = useState(0);
    const[university, setUniversity] = useState(0);
    const[department, setDepartment] = useState(0);
    const[enteredPassword, setEnteredPassword] = useState(0);
    const[enteredConfirmPassword, setEnteredConfirmPassword] = useState(0);
    const[noEmptyFields, setNoEmptyFields] = useState(true);
    const[passwordsMatch, setPasswordsMatch] = useState(true);

    const FirstNameHandler = e => {
        setFirstName(e.target.value);
    };
    const LastNameHandler = e => {
        setLastName(e.target.value);
    };
    const EmailHandler = e => {
        setEnteredEmail(e.target.value);
    };
    const StudentIdHandler = e => {
        setEnteredStudentId(e.target.value);
    };
    const universityDropdownHandler = e => {
        setUniversity(e.target.value);
    };
    const departmentDropdownHandler = e => {
        setDepartment(e.target.value);
    };
    const passwordHandler = e => {
        setEnteredPassword(e.target.value);
    };
    const confirmPasswordHandler = e => {
        setEnteredConfirmPassword(e.target.value);
    };


    return (
        <div className="popUp">
            <Card>
                <Form className="form">
                    <h1>Sign up</h1>
                    <Form.Group controlId="exampleForm.ControlInput1">
                    {!noEmptyFields && <p className="warning">Please fill in all fields</p>}
                    <br/>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="e.g.: John" onChange={FirstNameHandler}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="e.g.: John" onChange={LastNameHandler}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="text" placeholder="e.g.: example@email.com" onChange={EmailHandler}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1" >
                    <Form.Label>Student ID</Form.Label>
                    <Form.Control type="text" placeholder="e.g.: 12345" onChange={StudentIdHandler}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>University</Form.Label>
                    <Form.Control as="select" value='' onChange={universityDropdownHandler} value={university}>
                        <option key='blankChoice' hidden value />
                        <option>University of Calgary</option>
                        <option>University of Alberta</option>
                        <option>University of British Clombia</option>
                        <option>University of Saskatchwan</option>
                        <option>University of Toronto</option>
                    </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Department</Form.Label>
                    <Form.Control as="select" value='' onChange={departmentDropdownHandler} value={department}>
                        <option key='blankChoice' hidden value />
                        <option>Arts</option>
                        <option>Sciences</option>
                        <option>Engineering</option>
                        <option>Nursing</option>
                        <option>Law</option>
                    </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Must include numbers" onChange={passwordHandler}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" placeholder="Must include numbers" onChange={confirmPasswordHandler}/>
                    {!passwordsMatch && <p className="warning">Passwords don't match</p>}
                    <p>Note: Please fill in your correct email and student ID, this information is used to varify your status as a student</p>
                    </Form.Group>
                </Form>
        
                <Button variant="primary" className="mainPageButton" onClick={submitClickHandler}>Submit</Button>
                <Button variant="primary" className="cancelButton" onClick={() => setShowModal(false)}>Cancel</Button>
    
            </Card>
        </div>
    )
}

export default PopUp
