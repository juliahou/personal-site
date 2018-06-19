import React, { Component } from 'react';
import logo from './logo.svg';
import pic from './pic.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div class="square">
          <div class="picture">
            <img src={pic} alt="Me :)"/>
          </div>
          <div class="links">
            <ul>
              <li>LinkedIn</li>
              <li>Github</li>
              <li>Projects</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
