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
          <h1 className="App-title">Memorice</h1>
        </header>
        <div>
          <Tablero rows='2' columns='4'/>
        </div>
      </div>
    );
  }
}

export default App;
