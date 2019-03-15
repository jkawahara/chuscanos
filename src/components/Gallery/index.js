// *** Story component
import React, { Component } from 'react';
import "./style.css";
import { Container, Row, Col} from "react-bootstrap";

class Gallery extends Component {
  render() {
    return (
      <Container id="gallery">
        <Row>
          <Col id="titlegallery">Gallery</Col>
        </Row>
      </Container>
    );
  }
}

// Export function for importing into /pages
export default Gallery;
