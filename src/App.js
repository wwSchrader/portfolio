import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import particlesParams from './assets/particles.json';
import NavigationBar from './NavigationBar.js';

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
        <NavigationBar />
      </div>
    );
  }
}

export default App;
