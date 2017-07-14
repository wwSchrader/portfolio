import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavigationBar extends Component {

    render() {
        return (
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
        );
    }
}

export default NavigationBar;