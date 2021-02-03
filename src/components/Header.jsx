import React, { Component } from 'react';
import {
    Nav, Navbar, NavbarToggler, Collapse, NavItem
} from 'reactstrap';
import { Link } from 'react-scroll';
import '../css/header.css';
import AOS from "aos";
import "aos/dist/aos.css";


class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            clicked: true
        };
    }

    componentDidMount() {
        AOS.init();
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
            clicked: !this.state.clicked
        });
    }
    render() {
        return (
            <div>
                <Navbar data-aos="fade-down"
                    data-aos-anchor-placement="top-center" className="my-nav" expand="md">
                    <div className="container-fluid">
                        <div className="mr-auto header-logo">Devwardhan</div>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto nav-link" navbar>
                                <NavItem className="menu-item">
                                    <Link to="about" spy={true} smooth={true}>About</Link>
                                </NavItem>
                                <NavItem className="menu-item">
                                    <Link to="skill" spy={true} smooth={true}>Skills</Link>
                                </NavItem>
                                <NavItem className="menu-item">
                                    <Link to="projects" spy={true} smooth={true}>Projects</Link>
                                </NavItem>
                                <NavItem className="menu-item">
                                    <Link to="contact" spy={true} smooth={true}>Contact</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        <NavbarToggler onClick={this.toggleNav}><span className={this.state.clicked ? "fas fa-bars" : "fas fa-times"}></span></NavbarToggler>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;