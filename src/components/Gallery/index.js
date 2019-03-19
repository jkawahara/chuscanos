// *** Story component
import React, { Component } from 'react';
import "./style.css";
import { Container, Row, Col, Carousel, Form, Button } from "react-bootstrap";

class Gallery extends Component {
  render() {
    return (
      <Container id="gallery">
        <Row>
          <Col id="titlegallery">Gallery</Col>
        </Row>
        {/* <Row>
          <Col id="titlefile">Send us a pic of Christine & Sal...</Col>
        </Row>
        <Row id="filesubmit">
          <Col sm={{ span: 4, offset: 4 }}>
            <Form.Control className="forminput border border-secondary file-select" type="file" name="File" accept="image/*" required />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="file-submit" variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row> */}
        <Row>
          <Col sm={{ span: 8, offset: 2 }}>
            <Carousel id="carousel">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./chus.jpg")}
                  alt="Chus"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./toscanos.jpg")}
                  alt="Toscanos"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./globe.png")}
                  alt="Globe"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./snowboarding.jpg")}
                  alt="Snowboarding"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./dopeymedals.jpg")}
                  alt="DopeyMedals"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./christinewayback.jpg")}
                  alt="ChristineWayBack"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

// Export function for importing into /pages
export default Gallery;
