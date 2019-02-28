import React, { Component } from 'react';
import splashpic from './splashpic.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={splashpic} alt="splashpic" />
          <p>
            Christine Chu & Salvador Toscano
          </p>
          <p>
            May 25, 2019!
          </p>
          <p>
            More to come...
          </p>
        </header>
      </div>
    );
  }
}

export default App;
