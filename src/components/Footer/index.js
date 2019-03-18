// *** Story component
import React, { Component } from 'react';
import "./style.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <Container id="footer">
        <Row>
          <Col id="titlefooter">
            Contact Us
          </Col>
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
                    <Form.Control className="forminput border border-secondary" type="email" placeholder="example@gmail.com" name="Email" required />
                  </p>
                </Col>
              </Row>
              <Row> 
                <Col sm={{ span: 6, offset: 3 }}>
                  <p>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      {/* <Form.Label>Message...</Form.Label> */}
                      <Form.Control as="textarea" rows="6" className="forminput border border-secondary" name="Message" placeholder="Message..." required />
                    </Form.Group>
                  </p>
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
export default Footer;
