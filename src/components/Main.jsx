import React, { Component } from 'react';
import Header from './Header';
import Landing from './Landing';
import About from './About';
import Skill from './Skill';
import Projects from './ProjectComponent';
import Contact from './Contact';
import Footer from './Footer';
export class Main extends Component {

    render() {
        return (
            <>
                <Header />
                <Landing />
                <About />
                <Skill />
                <Projects />
                <Contact />
                <Footer />
            </>
        );
    };
};

