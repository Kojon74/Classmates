import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import Title from './componets/Title';
import Card from './componets/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PopUp from './componets/PopUp';



  const Home = () => {
    
    const[showModal, setShowModal] = useState(false);

    const ButtonClickHandler = () => {
      setShowModal(true);
    };

  return (
    <body className="homePage">
      <div>
        <Title>Classmates</Title>
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
                    <Form.Control as="select">
                      <option>University of Calgary</option>
                      <option>University of Alberta</option>
                      <option>3</option>
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
                </Form>
                <Button variant="primary" className="mainPageButton">Search as a guest</Button>
              </Card>
            </Col>
            <Col>
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
                      <option>University of Calgary</option>
                      <option>University of Alberta</option>
                      <option>3</option>
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
                <div>
                  <Button variant="primary" className="mainPageButton">Log in</Button>
                
                  <Button variant="primary" className="signinformButton" onClick={ButtonClickHandler}>Sign up</Button>
                  {showModal && <PopUp></PopUp>}
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </body>
  );
};


export default Home;
