import React, { useEffect } from 'react';
import '../css/about.css';
import AOS from "aos";
import "aos/dist/aos.css";
import aboutpic from './images/about.svg';
const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    return (
        <>
            <div id="about" className="container-fluid mt-5">
                <div data-aos="fade-down" className="row">
                    <h1 className="about-heading">
                        About Me
                    </h1>
                </div>
                <div data-aos="fade-up" className="row mt-lg-5">
                    <div className="col-lg">
                        <img className="about-pic img-fluid" src={aboutpic} alt="about-pic" />
                    </div>
                    <div className="col-lg">
                        <div className="container">
                            <div className="about-para-div">
                                <h1 className="about-para-heading">Hi, I'm <span className="name-about">Devwardhan</span></h1>
                                <p className="aboutpara">
                                    I'm curious and passionate Front-End Developer.
                                    As a quick learner with an enthausiasm for creating, I'm looking for new project.
                                    <br /><br />
                                    I can work on HTML, CSS ,JavaScript and frameworks like Reactjs and Bootstrap.
                                    I can make responsive User Interface.
                                    <br /><br />
                                    Currently, I'm seeking a job as Front-End Developer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;