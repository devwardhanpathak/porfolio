import React, { Component } from 'react';
import Header from './Header';
import Landing from './Landing';
import About from './About';
import Skill from './Skill';
export class Main extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="container-fluid">
                    <div className="row"><Landing /></div>
                    <div className="row"><About /></div>
                    <div className="row"><Skill /></div>
                </div>
            </>
        );
    };
};

