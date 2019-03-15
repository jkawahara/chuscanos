// Single Page Application
import React, { Component } from 'react';
import Nav from "./components/Nav";
import Timing from "./components/Timing";
import Splash from "./components/Splash";
import Story from "./components/Story";
// import Events from "./components/Events";
// import Gallery from "./components/Gallery";
// import Registry from "./components/Registry";

import Rsvp from "./components/Rsvp";
// import Footer from "./components/Footer";
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
            <Story />
          </Col>
        </Row>
        {/* <Events /> */}
        {/* <Gallery /> */}
        {/* <Registry /> */}
        <Row>
          <Col>
            <Rsvp />
          </Col>
        </Row>
        {/* <Footer /> */}
      </Container>
    );
  }
}

export default App;
