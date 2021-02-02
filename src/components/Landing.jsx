import React from 'react';
import '../css/landing.css';
import Header from './Header';
import WebDevimg from '../images/webdev.svg';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';



const Landing = () => {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-lg m-auto">
                        <div className="text-div">
                            <h2 className="text1">Namaste, I am</h2>
                            <h1 className="text2">Devwardhan Pathak</h1>
                            <h2 className="text3">Front-End Developer</h2>
                            <h3 className="text4">JavaScript | React | CSS</h3>
                        </div>
                        <div className="social-icons">
                            <ul className="footer-icons">
                                <li className="footer-li">
                                    <a href="https://github.com/devwardhanpathak" rel="noreferrer" target="_blank">
                                        <GitHubIcon className="material-icon" />
                                    </a>
                                </li>
                                <li className="footer-li">
                                    <a href="https://www.linkedin.com/in/devwardhan-pathak-b680b1158/" rel="noreferrer" target="_blank">
                                        <LinkedInIcon className="material-icon" />
                                    </a>
                                </li>
                                <li className="footer-li">
                                    <a href="https://twitter.com/DevwardhanP" rel="noreferrer" target="_blank">
                                        <TwitterIcon className="material-icon" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg">
                        <div className="landing-image-div">
                            <img className="img-fluid" src={WebDevimg} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;