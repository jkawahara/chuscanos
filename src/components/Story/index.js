// *** Story component
import React, { Component } from 'react';
import "./style.css";
import { Container, Row, Col} from "react-bootstrap";

class Story extends Component {
  render() {
    return (
      <Container id="story">
        <Row>
          <Col id="titlestory">Their Story</Col>
        </Row>
        <Row>
          <Col>Sal is reflecting...</Col>
        </Row>
      </Container>
    );
  }
}

// Export function for importing into /pages
export default Story;
