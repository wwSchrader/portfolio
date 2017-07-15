import React, { Component } from 'react';
import HomePageBody from './HomePageBody.js';

class MainBody extends Component {
  constructor(props) {
    super(props);
    this.currentState = props.currentState;
  }

  componentWillReceiveProps(nextProps) {
        this.setState({
            currentState: nextProps.currentState
        });
    }

    render() {
        switch (this.currentState) {
          case 'home':
            return (<HomePageBody />);
        }
    }
}

export default MainBody;