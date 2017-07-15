import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.homeState = 'Home';
        this.aboutState = 'About';
        this.skillsState = 'Skills';
        this.projectsState = 'Projects';
        this.contactState = 'Contact';

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
                <NavItem eventKey={1} href='#' active={this.checkCurrentPageStatus(this.homeState)} onClick={() => {this.handleNavigationItemPress(this.homeState)}}>{this.homeState}</NavItem>
                <NavItem eventKey={2} href='#' active={this.checkCurrentPageStatus(this.aboutState)} onClick={() => {this.handleNavigationItemPress(this.aboutState)}}>{this.aboutState}</NavItem>
                <NavItem eventKey={3} href='#' active={this.checkCurrentPageStatus(this.skillsState)} onClick={() => {this.handleNavigationItemPress(this.skillsState)}}>{this.skillsState}</NavItem>
                <NavItem eventKey={4} href='#' active={this.checkCurrentPageStatus(this.projectsState)} onClick={() => {this.handleNavigationItemPress(this.projectsState)}}>{this.projectsState}</NavItem>
                <NavItem eventKey={5} href='#' active={this.checkCurrentPageStatus(this.contactState)} onClick={() => {this.handleNavigationItemPress(this.contactState)}}>{this.contactState}</NavItem>
              </Nav>
            </Navbar>
        );
    }
}

export default NavigationBar;