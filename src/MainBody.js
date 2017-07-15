import React, { Component } from 'react';
import HomePageBody from './HomePageBody.js';
import AboutPageBody from './AboutPageBody.js';

class MainBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: props.currentState
    };
  }

  componentWillReceiveProps(nextProps) {
        this.setState({
            currentState: nextProps.currentState
        });
    }

    render() {
        switch (this.state.currentState) {
          case 'About':
            return (<AboutPageBody />);
          case 'Home':
          default:
            return (<HomePageBody />);
        }
    }
}

export default MainBody;