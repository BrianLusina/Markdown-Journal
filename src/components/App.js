import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import DisplayContainer from './DisplayContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to MD-Journal</h2>
        </div>
          <DisplayContainer />
      </div>
    );
  }
}

export default App;
