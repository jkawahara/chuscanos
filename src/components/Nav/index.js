// *** Navigation for SPA to jump quickly to specific section
import React, { Component } from 'react';
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Navigation extends Component {
  render () {
    return (
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Christine & Salvador</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#timing">Timing</Nav.Link>
            <Nav.Link href="#splash">Splash</Nav.Link>
            <Nav.Link href="#story">Story</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#registry">Registry</Nav.Link>
            <Nav.Link href="#rsvp">RSVP</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }  
}

// Export function for importing into /pages
export default Navigation;
