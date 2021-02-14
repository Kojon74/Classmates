import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import Title from "./componets/Title";
import Card from "./componets/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PopUp from "./componets/PopUp";
import Welcome from "./componets/Welcome";

const Home = () => {
  const [emailMatchingCheck, setEmailMatchingCheck] = useState(false);
  const [showUniError, setShowUniError] = useState(false);
  const [showDepError, setShowDepError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [university, setUniversity] = useState(0);
  const [department, setDepartment] = useState(0);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const ButtonClickHandler = () => {
    setShowModal(true);
  };
  const universityDropdownHandler = (e) => {
    setUniversity(e.target.value);
  };
  const departmentDropdownHandler = (e) => {
    setDepartment(e.target.value);
  };
  const guestInputHandler = () => {
    if (university == 0 && department == 0) {
      setShowUniError(true);
      setShowDepError(true);
    } else if (university == 0 && department != 0) {
      setShowUniError(true);
    } else if (department == 0 && university != 0) {
      setShowDepError(true);
    } else {
      window.location.href = "/course";
    }
  };
  const emailInputHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const passwordInputHandler = (e) => {
    setEnteredPassword(e.target.value);
  };
  const LogInHandler = () => {};

  return (
    <div>
      {/* <Title>Classmates</Title> */}
      <Welcome />
      <Container fluid="md">
        <Row>
          <Col>
            <Card>
              <Form className="form">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Name *Optional</Form.Label>
                  <Form.Control type="text" placeholder="e.g.: John" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>University</Form.Label>
                  <Form.Control
                    as="select"
                    value=""
                    onChange={universityDropdownHandler}
                    value={university}
                  >
                    <option key="blankChoice" hidden value />
                    <option>University of Calgary</option>
                    <option>University of Alberta</option>
                    <option>University of British Clombia</option>
                    <option>University of Saskatchwan</option>
                    <option>University of Toronto</option>
                  </Form.Control>
                  {showUniError && <p className="warning">Make a selection</p>}
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>Department</Form.Label>
                  <Form.Control
                    as="select"
                    value=""
                    onChange={departmentDropdownHandler}
                    value={department}
                  >
                    <option key="blankChoice" hidden value />
                    <option>Arts</option>
                    <option>Sciences</option>
                    <option>Engineering</option>
                    <option>Nursing</option>
                    <option>Law</option>
                  </Form.Control>
                  {showDepError && <p className="warning">Make a selection</p>}
                </Form.Group>
              </Form>
              <Button
                variant="primary"
                className="mainPageButton"
                onClick={guestInputHandler}
              >
                Search as a guest
              </Button>
            </Card>
          </Col>
          <Col>
            <Card>
              <Form className="form">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g.: example@email.com"
                    onChange={emailInputHandler}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Must include numbers"
                    onChange={passwordInputHandler}
                  />
                  {!emailMatchingCheck && (
                    <p className="warning">
                      Your email and password don't match
                    </p>
                  )}
                </Form.Group>
              </Form>
              <div>
                <Button
                  variant="primary"
                  className="mainPageButton"
                  onClick={LogInHandler}
                >
                  Log in
                </Button>

                <Button
                  variant="primary"
                  className="signinformButton"
                  onClick={ButtonClickHandler}
                >
                  Sign up
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      {showModal && <PopUp setShowModal={setShowModal}></PopUp>}
    </div>
  );
};

export default Home;
