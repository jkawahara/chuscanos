// *** Story component
import React, { Component } from 'react';
import "./style.css";
import { Container, Row, Col} from "react-bootstrap";

class Events extends Component {
  render() {
    return (
      <Container id="events">
        <Row>
          <Col id="titleevents">
            Events
          </Col>
        </Row>
        <Row>
          <Col>
            <p id="ceremony">Ceremony</p>
            <p>Half Past Three In The Afternoon</p>
            <p>
              Our Lady of Angels<br></br>
              1721 Hillside Drive<br></br>
              Burlingame, California
            </p>
          </Col>
          <Col>
            <p id="reception">
              Reception<br></br>
              Cocktails, Dinner, And Dancing
            </p>
            <p>Half Past Five In The Afternoon</p>
            <p>
              Kohl Mansion<br></br>
              2750 Adeline Drive<br></br>
              Burlingame, California
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

// Export function for importing into /pages
export default Events;
