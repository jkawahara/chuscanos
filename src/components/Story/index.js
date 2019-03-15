// *** Story component
import React, { Component } from 'react';
import "./style.css";
import { Container, Row, Col} from "react-bootstrap";

class Story extends Component {
  render() {
    return (
      <Container id="story">
        <Row>
          <Col id="titlestory">The Story</Col>
        </Row>
      </Container>
    );
  }
}

// Export function for importing into /pages
export default Story;
