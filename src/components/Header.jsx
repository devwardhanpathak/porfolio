import React, { Component } from 'react';
import {
    Nav, Navbar, NavbarToggler, Collapse, NavItem
} from 'reactstrap';
import DehazeIcon from '@material-ui/icons/Dehaze';
import '../css/header.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar className="my-nav" expand="md">
                    <div className="container-fluid">
                        <div className="mr-auto header-logo">Devwardhan</div>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto nav-link" navbar>
                                <NavItem className="menu-item">About Me</NavItem>
                                <NavItem className="menu-item">Skills</NavItem>
                                <NavItem className="menu-item">Projects</NavItem>
                                <NavItem className="menu-item">Contact Me</NavItem>
                            </Nav>
                        </Collapse>
                        <NavbarToggler onClick={this.toggleNav}><span className="nav-icon"><DehazeIcon /></span></NavbarToggler>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;