import React, { Component } from 'react';
import Nav from "./components/Nav";
// import Splash from "./components/Splash";
// import Story from "./components/Story";
// import Timing from "./components/Timing";
// import Events from "./components/Events";
// import Gallery from "./components/Gallery";
// import Registry from "./components/Registry";
// import Rsvp from "./components/Rsvp";
import splashpic from "./splashpic.jpeg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        {/* <Splash />
        <Story />
        <Timing />
        <Events />
        <Gallery />
        <Registry />
        <Rsvp /> */}
      </div>
    );
  }
}

export default App;
