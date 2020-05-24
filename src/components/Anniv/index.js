// *** Anniv component
import React, { Component } from 'react';
import { Container, Row, Col} from "react-bootstrap";
import { Fireworks } from 'fireworks/lib/react';
// import "./style.css";

class Anniv extends Component {
  let fxProps = {
    count: 3,
    interval: 200,
    colors: ['#cc3333', '#4CAF50', '#81C784'],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
    })
  }
  
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Fireworks {...fxProps} />
          </Col>
        </Row>
      </Container>
    );
  }
}

// Export function for importing into /pages
export default Anniv;
