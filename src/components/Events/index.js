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
            <a href="https://goo.gl/maps/7WqyNjpPUuB2">Events</a>
          </Col>
        </Row>
        <Row>
          <Col>
            <p id="ceremony">Ceremony</p>
            <p>Half Past Three In The Afternoon</p>
            <p>
              <a href="https://www.ola.community/">Our Lady of Angels</a><br></br>
              1721 Hillside Drive<br></br>
              Burlingame, California
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p id="reception">
              Reception<br></br>
              Cocktails, Dinner, And Dancing
            </p>
            <p>Half Past Five In The Afternoon</p>
            <p>
              <a href="https://kohlmansion.com/">Kohl Mansion</a><br></br>
              2750 Adeline Drive<br></br>
              Burlingame, California
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p id="reception">
              Accommodations Overnight<br></br>
            </p>
            <p>
              It means the world to us to have you at our celebration. For your convenience negotiated group hotel rates have been identified and available for booking via the link below. We are anxious for the days to pass where we can smile, laugh, wine, and dine the weekend away!
            </p>
            <p>
              <a href="https://groups.hotels.com/Search/?locale=en_US&City=2750%20Adeline%20Dr%2C%20Burlingame%2C%20CA%2094010%2C%20USA&Latitude=37.5826519&Longitude=-122.3830636&InDate=05/25/2019&OutDate=05/27/2019&gid=5131452&NumRooms=1&sc=HotelsCom-EN&kw=eventpage&_hp=3172019211934#search/2750%20Adeline%20Dr%2C%20Burlingame%2C%20CA%2094010/none/none/05-25-2019/05-27-2019/default/ASC/ASC/ASC/0/none/none/none/0/0/0/0/0/0/0/0/0/0/0/0/0/none/none/0/5/37.5826519/-122.3830636/2750%20Adeline%20Dr%2C%20Burlingame%2C%20CA%2094010%2C%20USA/1/0/0/0/1/1/results/0/">Chu_Toscano Hotel Bookings Link</a>
            </p>
          </Col>
        </Row>
        <Row id="map">
          {/* <img src={require("./eventsmap.png")} alt="eventsmap"
          /> */}
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6872.131726760218!2d-122.38290358291239!3d37.582728227229666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x808f763a022577f5%3A0xa37412bde980bf1f!2sOur+Lady+of+Angels+Catholic%2C+Hillside+Drive%2C+Burlingame%2C+CA!3m2!1d37.5857534!2d-122.3731976!4m5!1s0x808f7646226cbc9b%3A0x177573ace0ad329f!2sKohl+Mansion%2C+Burlingame%2C+CA!3m2!1d37.582864!2d-122.3831415!5e0!3m2!1sen!2sus!4v1552705962307" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
        </Row>
      </Container>
    );
  }
}

// Export function for importing into /pages
export default Events;
