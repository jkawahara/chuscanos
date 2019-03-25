// *** Timing component
import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import moment from 'moment';

class Timing extends Component {
  state = {
    remainTime: moment().to('2019-05-26 15:30')
  };

  render() {
    return (
      <Container id="timing">
        <Row>
          <Col>
            <p id="titletiming">Together With Their Families</p>
            <p>
              Sunday, The Twenty-Sixth Of May<br></br>
              Two Thousand Nineteen<br></br>
              At Half Past Three In The Afternoon
            </p>
          </Col>
        </Row>
        <Row>
          <Col id="titleremain" sm={{ span: 4, offset: 4 }}>
            <p>{this.state.remainTime}</p>
          </Col>
        </Row>
      </Container>
      
    );
  }
};

// Export function for importing into /pages
export default Timing;
