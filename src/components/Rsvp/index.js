// *** RSVP component
import React, { Component } from 'react';
import { Container, Row, Col, Form, Button} from "react-bootstrap";
import "./style.css";

class Rsvp extends Component {
  render() {
    return (
      <Container id="rsvp">
        <Row>
          <Col id="titlersvp">RSVP Response By The Eleventh Of April, With Invitation</Col>
        </Row>
        <Row>
          <Col>
            <Form action="https://formspree.io/cjchu@gene.com" method="POST">
              <Row className="forminputs">
                <Col sm={{ span: 6, offset: 3 }}>
                  <p>
                    <Form.Control className="forminput border border-secondary" type="string" placeholder="First & Last Name" name="Name" required />
                  </p>
                </Col>
              </Row>
              <Row> 
                <Col sm={{ span: 6, offset: 3 }}>
                  <p>
                    <Form.Control className="forminput border border-secondary" type="number" placeholder="Number Attending" name="Number Attending" />
                  </p>
                </Col>
              </Row>
              <Row>
                <Col sm={{ span: 6, offset: 3 }}>
                  <Form.Group as={Row}>
                    <Col>
                      <Form.Group>
                        <Form.Check className="formradio"
                          type="radio"
                          label="Accepts With Pleasure"
                          name="Attendance at Christine & Salvador's Marriage"
                          value="Accepts With Pleasure"
                          id="formHorizontalRadios1"
                          required
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Check
                          type="radio"
                          label="Declines With Regret"
                          name="Attendance at Christine & Salvador's Marriage"
                          value="Declines With Regret"
                          id="formHorizontalRadios2"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
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
