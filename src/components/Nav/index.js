// *** Navigation for SPA to jump quickly to specific section
import React, { Component } from 'react';
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Navigation extends Component {
  render () {
    return (
      <Navbar id="navbar" fixed="top" collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">Christine & Salvador</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#timing">Timing</Nav.Link>
            <Nav.Link href="#splash">Splash</Nav.Link>
            <Nav.Link href="#story">Story</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#guestbook">Guestbook</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#registry">Registry</Nav.Link>
            <Nav.Link href="#rsvp">RSVP</Nav.Link>
            <Nav.Link href="#footer">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }  
}

// Export function for importing into /pages
export default Navigation;
