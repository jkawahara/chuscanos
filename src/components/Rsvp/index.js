// *** RSVP component
import React, { Component } from 'react';
import "./style.css";
import { Container, Row, Col, Form, Button} from "react-bootstrap";

class Rsvp extends Component {
  render() {
    return (
      <Container id="rsvp">
        <Row>
          <Col id="titlersvp">RSVP Response By The Eleventh Of April</Col>
        </Row>
        <Row>
          <Col>
            <Form action="https://formspree.io/jjshon@gmail.com" method="POST">
              <Row className="forminputs">
                <Col sm={{ span: 4, offset: 1 }}>
                  <Form.Control className="forminput border border-secondary" type="string" placeholder="First & Last Name" name="Name" required />
                  <Form.Control className="forminput border border-secondary" type="number" placeholder="Number Attending" name="Number Attending" />        
                </Col>
                <Col sm={4}>
                  <Form.Group as={Row}>
                    <Col sm={10}>
                      <Form.Check className="formradio"
                        type="radio"
                        label="Accepts With Pleasure"
                        name="Attendance at Christine & Salvador's Marriage"
                        value="Accepts With Pleasure"
                        id="formHorizontalRadios1"
                        required
                      />
                      <Form.Check
                        type="radio"
                        label="Declines With Regret"
                        name="Attendance at Christine & Salvador's Marriage"
                        value="Declines With Regret"
                        id="formHorizontalRadios2"
                        required
                      />
                    </Col>
                  </Form.Group>
                </Col>
                <Col sm={2}>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

// Export function for importing into /pages
export default Rsvp;
