import React, { useEffect } from 'react';
import skillpic from './images/skill.svg';
import '../css/skill.css';
import AOS from "aos";
import "aos/dist/aos.css";


const Skill = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    return (
        <>
            <div id="skill" className="container-fluid mt-lg-5">
                <div data-aos="fade-down" className="row">
                    <h1 className="skill-heading">Skills</h1>
                </div>
                <div data-aos="fade-up" className="row mt-3">
                    <div className="col-lg">
                        <div className="container-fluid skill-text-div">
                            <div className="row">
                                <div className="col">
                                    <h1 data-aos="zoom-in" className="skill-text">HTML</h1>
                                </div>
                                <div className="col">
                                    <h1 data-aos="zoom-out" className="skill-text">CSS</h1>
                                </div>
                                <div className="w-100">
                                </div>
                                <div className="col">
                                    <h1 data-aos="zoom-in" className="skill-text">JavaScript</h1>
                                </div>
                                <div className="w-100"></div>
                                <div className="col">
                                    <h1 data-aos="zoom-out" className="skill-text">React.js</h1>
                                </div>
                                <div className="col">
                                    <h1 data-aos="zoom-in" className="skill-text">Bootstrap</h1>
                                </div>
                                <div className="w-100"></div>
                                <div className="col">
                                    <h1 data-aos="zoom-out" className="skill-text">GitHub</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg">
                        <img className="skill-pic img-fluid" src={skillpic} alt="skill-pic" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skill;