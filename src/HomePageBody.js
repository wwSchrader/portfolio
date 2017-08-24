import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import TypeWriter from 'react-typewriter';

class HomePageBody extends Component {

  render() {
    return (
      <Jumbotron>
        <h1> Hello. </h1>
        <TypeWriter typing={1}>
          <h3>My name is Warren.</h3>
          <p>A programmer, designer, and creator.</p>
        </TypeWriter>
      </Jumbotron>
    );
  }
}

export default HomePageBody;
