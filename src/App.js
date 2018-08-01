import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Colors from './Colors';
import axios from 'axios';

class App extends Component {
  state = {
    colors: [],
    input: ''
  }

  componentDidMount() {
    axios.get('http://www.colr.org/json/colors/random/2')
      .then(response => {
        this.setState({
          colors: response.data.colors.map(color => color.hex),
        });
      });
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Colors colors={this.state.colors} input={this.state.input} />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          input:
          <input type="text" onChange={this.handleInputChange} value={this.state.input}>
          </input>
        </div>
      </div>
    );
  }
}

export default App;
