import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import particlesParams from './assets/particles.json';
import NavigationBar from './NavigationBar.js';
import MainBody from './MainBody.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.particlesParams = particlesParams;

    this.state = {
      page: 'home'
    }
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
        <MainBody currentState={this.state.page} />
      </div>
    );
  }
}

export default App;
