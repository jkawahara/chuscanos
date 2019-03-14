// *** Splash component
import React, { Component } from 'react';
import "./style.css";
import { Container, Row, Col} from "react-bootstrap";

class Splash extends Component {
  render() {
    return (
      <Container id="splash">
        <Row>
          <Col id="textname">Christine Joyce Chu & Salvador Nu&ntilde;o Toscano</Col>
        </Row>
      </Container>
    );
  }
}

// Export function for importing into /pages
export default Splash;
