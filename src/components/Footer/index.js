// *** Story component
import React, { Component } from 'react';
import "./style.css";
import { Container, Row, Col} from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <Container id="footer">
        <Row>
          <Col id="titlefooter">
            Contact Us
          </Col>
        </Row>
      </Container>
    );
  }
}

// Export function for importing into /pages
export default Footer;
