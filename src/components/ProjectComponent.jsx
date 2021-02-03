import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../css/projects.css';
import Munim from './images/munim.PNG';
import Rummy from './images/rummy.PNG';
import Portfolio from './images/portfolio.png';
class Projects extends Component {
    constructor(props) {
        super(props);
    };


    render() {
        return (
            <div className="container">
                <div className="row" >
                    <h1 className="project-heading">Projects</h1>
                </div>
                <div className="row">
                    <div className="col-md-5 m-4 col-sm-6">
                        <Card>
                            <CardImg top width="100%" src={Munim} alt="Munim" />
                            <CardBody>
                                <CardTitle tag="h5">Munim</CardTitle>
                                <CardText>It is an online web based inventory managment system and
                                costumer can see products of nearby shops.
                                </CardText>
                                <Button href="https://github.com/devwardhanpathak">GitHub Link</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-5 m-4 col-sm-6">
                        <Card>
                            <CardImg top width="100%" src={Rummy} alt="Rummy" />
                            <CardBody>
                                <CardTitle tag="h5">Rummy</CardTitle>
                                <CardText>An online web based rummy game where you can play and win
                            </CardText>
                                <Button href="https://github.com/devwardhanpathak/rummy_project">GitHub Link</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-5 m-4 col-sm-6">
                        <Card>
                            <CardImg top width="100%" src={Portfolio} alt="Rummy" />
                            <CardBody>
                                <CardTitle tag="h5">Portfolio</CardTitle>
                                <CardText>My Personal Portfolio
                            </CardText>
                                <Button href="https://github.com/devwardhanpathak/my_portfolio">GitHub Link</Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div >
        );
    };
}

export default Projects;