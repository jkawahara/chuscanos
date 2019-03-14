// *** Timing component
import React, { Component } from 'react';
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import { oneOfType, func, instanceOf, string } from 'prop-types';
import { momentObj } from 'react-moment-proptypes';
import formatDate from './format-date';

class ReactMomentCountDown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      countdown: null
    }
  }

  componentDidMount() {
    this.tick()

    this.timer = window.setInterval(this.tick.bind(this), 1000)
  }

  componentWillUnmount() {
    window.clearInterval(this.timer)
  }

  tick() {
    const { toDate, sourceFormatMask, targetFormatMask, onCountdownEnd, onTick } = this.props
    const [delta, countdown] = formatDate(toDate, targetFormatMask, sourceFormatMask)

    if (delta <= 0) {
      window.clearInterval(this.timer)

      if (onCountdownEnd) {
        onCountdownEnd()
      }
    }

    this.setState({
      countdown
    })

    if (onTick) {
      onTick(delta)
    }
  }
  render() {
    return (
      <span>{this.state.countdown}</span>
    )
  }
};

  ReactMomentCountDown.propTypes = {
    toDate: oneOfType([
      momentObj,
      instanceOf(Date),
      string
    ]).isRequired,
    sourceFormatMask: string,
    targetFormatMask: string,
    onTick: func,
    onCountdownEnd: func
  }

  ReactMomentCountDown.defaultProps = {
    sourceFormatMask: 'YYYY-MM-DD HH:mm:ss',
    targetFormatMask: 'DD:HH:mm:ss',
    onTick: null,
    onCountdownEnd: null
  }

// Export function for importing into /pages
export default ReactMomentCountDown;
