// *** Timing component
import React, { Component } from 'react';
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import ReactMomentCountDown from 'react-moment-countdown';
import moment from 'moment';

class Timing extends Component {
  constructor (props) {
    super(props)
    this.state = { endCountdown: false }
    this.sampleOnTick = this.sampleOnTick.bind(this)
    this.sampleOnCountdownEnd = this.sampleOnCountdownEnd.bind(this)
  }

  sampleOnTick (countdown) {
    this.setState({ endCountdown: countdown <= 0 })
  }
  sampleOnCountdownEnd () {
    console.log('Ceremony Time!')
  }

  render() {
    const dateInFuture = moment('2019-05-26 15:30:00', 'YYYY-MM-DD HH:mm:ss');

    return (
      <Container id="timing">
        <Row>
          <Col>
            <p>Save Our Wedding Date</p>
            <p>
              Sunday, The Twenty-Sixth Of May<br></br>
              Two Thousand Nineteen<br></br>
              At Half Past Three In The Afternoon
            </p>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col sm={{ span: 2, offset: 2 }}>
            <ReactMomentCountDown toDate={dateInFuture}
              targetFormatMask='DD'
              onTick={this.sampleOnTick}
              onCountdownEnd={this.sampleOnCountdownEnd}
            /><br></br>
            Days
          </Col> 
          <Col sm={2}>
            <ReactMomentCountDown toDate={dateInFuture}
              targetFormatMask='HH'
              onTick={this.sampleOnTick}
              onCountdownEnd={this.sampleOnCountdownEnd}
            /><br></br>
            Hours
          </Col> 
          <Col sm={2}>
            <ReactMomentCountDown toDate={dateInFuture}
              targetFormatMask='mm'
              onTick={this.sampleOnTick}
              onCountdownEnd={this.sampleOnCountdownEnd}
            /><br></br>
            Minutes
          </Col> 
          <Col sm={2}>
            <ReactMomentCountDown toDate={dateInFuture}
              targetFormatMask='ss'
              onTick={this.sampleOnTick}
              onCountdownEnd={this.sampleOnCountdownEnd}
            /><br></br>
            Seconds
          </Col> 
        </Row>
      </Container>
      
    );
  }
};

// Export function for importing into /pages
export default Timing;
