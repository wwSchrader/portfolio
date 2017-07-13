import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import particlesParams from './assets/particles.json';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

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
        <Navbar default fluid>
          <Navbar.Header>
            <Navbar.Brand>Warren Schrader</Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href='#'>Home</NavItem>
            <NavItem eventKey={2} href='#'>About</NavItem>
            <NavItem eventKey={3} href='#'>Skills</NavItem>
            <NavItem eventKey={4} href='#'>Projects</NavItem>
            <NavItem eventKey={5} href='#'>Contact</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default App;
