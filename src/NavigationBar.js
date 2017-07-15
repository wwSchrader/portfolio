import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPageState: props.currentPageState
        };

        this.handleNavigationItemPress = this.handleNavigationItemPress.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            currentPageState: nextProps.currentPageState
        });
    }

    handleNavigationItemPress(newPageState) {
        this.props.onNavigationPress(newPageState);
    }

    checkCurrentPageStatus(navPageItem) {
        if (this.state.currentPageState === navPageItem) {
            return true;
        }
    }

    render() {
        return (
            <Navbar default fluid>
              <Navbar.Header>
                <Navbar.Brand>Warren Schrader</Navbar.Brand>
              </Navbar.Header>
              <Nav>
                <NavItem eventKey={1} href='#' active={this.checkCurrentPageStatus('home')} onClick={() => {this.handleNavigationItemPress('home')}}>Home</NavItem>
                <NavItem eventKey={2} href='#'>About</NavItem>
                <NavItem eventKey={3} href='#'>Skills</NavItem>
                <NavItem eventKey={4} href='#'>Projects</NavItem>
                <NavItem eventKey={5} href='#'>Contact</NavItem>
              </Nav>
            </Navbar>
        );
    }
}

export default NavigationBar;