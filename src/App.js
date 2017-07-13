import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import particlesParams from './assets/particles.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.particlesParams = particlesParams;
  }

  render() {
    var particleStyle = {
      position: 'absolute',
      zindex: -1,
      left: 0,
      top: 0
    };

    return (
      <div className="App">
        <Particles id="particles" params={this.particlesParams} style={particleStyle}/>


      </div>
    );
  }
}

export default App;
