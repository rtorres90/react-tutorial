import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contador from './Contador';
import Hola from './Hola';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            <Hola nombre="AdictosAlTrabajo.com"/>
          </h1>
        </header>
        <p className="App-intro">
          <Contador/>
        </p>
      </div>
    );
  }
}

export default App;
