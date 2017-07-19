import React, { Component } from 'react';
import HomePageBody from './HomePageBody.js';
import AboutPageBody from './AboutPageBody.js';
import ProjectsPageBody from './ProjectsPageBody.js';
import ContactPageBody from './ContactPageBody.js';

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
          case 'Contact':
            return (<ContactPageBody />);
          case 'Projects':
            return (<ProjectsPageBody />);
          case 'About':
            return (<AboutPageBody />);
          case 'Home':
          default:
            return (<HomePageBody />);
        }
    }
}

export default MainBody;