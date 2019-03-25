// *** Story component
import React, { Component } from 'react';
import { Container, Row, Col} from "react-bootstrap";
import "./style.css";

class Registry extends Component {
  render() {
    return (
      <Container id="registry">
        <Row>
          <Col id="titleregistry">
            <a href="https://www.myregistry.com/wedding-registry/Christine-Chu-and-Salvador-Toscano-Davis-CA/1859929">Registry</a>
          </Col>
        </Row>
      </Container>
    );
  }
}

// Export function for importing into /pages
export default Registry;
