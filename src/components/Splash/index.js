// *** Splash component
import React, { Component } from 'react';
import "./style.css";
import { Container, Row, Col} from "react-bootstrap";

class Splash extends Component {
  render() {
    return (
      <Container id="splash">
        <Row>
          <Col>Save our wedding date</Col>
        </Row>
        <Row>
          <Col>Christine & Salvador</Col>
        </Row>
      </Container>
    );
  }
}

// Export function for importing into /pages
export default Splash;
