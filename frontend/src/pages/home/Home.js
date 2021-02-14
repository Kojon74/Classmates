import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import Title from './componets/Title.js';
import Card from './componets/Card.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Home = () => {
  return (
    <body>
      <div>
        <Title>Classmates</Title>
        <Container fluid="md">
          <Row>
            <Col>
              <Card>
                <Form className="form">
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
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
                </Form>
                <div>
                  <Button variant="primary" className="mainPageButton">Log in</Button>
                
                  <Button variant="primary" className="signinformButton">Sign up</Button>
                
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
