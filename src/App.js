// Single Page Application
import React, { Component } from 'react';
import Nav from "./components/Nav";
import Timing from "./components/Timing";
import Splash from "./components/Splash";
// import Story from "./components/Story";
// import Events from "./components/Events";
// import Gallery from "./components/Gallery";
// import Registry from "./components/Registry";
import Rsvp from "./components/Rsvp";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Container className="mainapp">
        <Row>
          <Col>
            <Nav />
          </Col>
        </Row>
        <Row>
          <Col>
            <Timing />
          </Col>
        </Row>
        <Row>
          <Col>
            <Splash />
          </Col>
        </Row>
        <Row>
          <Col>
            <Rsvp />
          </Col>
        </Row>
        {/* <Story /> */}
        {/* <Events /> */}
        {/* <Gallery /> */}
        {/* <Registry /> */}
      </Container>
    );
  }
}

export default App;
