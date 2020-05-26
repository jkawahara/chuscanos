// *** Splash component
import React, { Component } from 'react';
import { Container, Row, Col} from "react-bootstrap";
import "./style.css";

class Splash extends Component {
  render() {
    return (
      <Container id="splash">
        {/* <Row>
          
        </Row> */}
        <Row>
<<<<<<< HEAD
          <Col id="annivsplash">
            Congrats,<br></br>
            Christine & Salvador,<br></br>
            Happy 1 Year Anniversary!<br></br>
          </Col>
          {/* <Col id="titlesplash">
||||||| merged common ancestors
          <Col id="titlesplash">
=======
          <Col id="annivsplash">
            Congrats to Christine & Salvador...<br></br>
            Happy 1 Year Anniversary!<br></br>
          </Col>
          {/* <Col id="titlesplash">
>>>>>>> 5a7affabb7316fee1c5ae83929663670cec721c0
            Christine Joyce Chu<br></br>
            and<br></br>
            Salvador Nu&ntilde;o Toscano
          </Col> */}
        </Row>
      </Container>
    );
  }
}

// Export function for importing into /pages
export default Splash;
