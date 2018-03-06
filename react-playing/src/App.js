import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tablero from './Tablero';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
          <Tablero ancho='3' largo='3'/>
      </div>
    );
  }
}

export default App;
