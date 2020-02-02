import React from 'react';

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import me from './../../me.jpg'
import './AboutMe.scss';

function AboutMe(props) {


    return (
        <div className="AboutMe">
            <h1 className="scroll-up-text">About me</h1>
            <div className="about-elements">
                <Description />
            </div>
        </div>
    );
}

function Description () {
    return (
        <React.Fragment>
            <div className="img-element about-1">
                <img alt="me" src={me} className="img-me"/> 
            </div>
            <div className="text-element about-2">
                <div className="text-about">
                    <div>
                        Hi! I am Pau Maraví. I am passionate about technology and web development.
                    </div>
                    <br />
                    <div>
                        I work as a full stack developer. 
                        In the front end I use:
                        <br />
                        <div className="flex-row-start">
                            <KeyboardArrowRightIcon /> AngularJS ...
                        </div>
                        <div className="flex-row-start">
                            <KeyboardArrowRightIcon /> ReactJS, oh yeah!  
                        </div>
                        in the back end I use spring with Java 7/8.
                    </div>
                    <br />
                    <div>
                        In my free time I like to know new technologies and do a PoC to know them.
                    </div>
                </div>
            </div>
            <div className="text-element about-3">
                <div className="text-about">
                    <div>
                        When I have to create a new project, I always like to use AWS (lambda, dynamoDB, API Gateway, ...) for back-end
                        and for the front I like to use Angular or React.
                        In addition, I like to use DevOps tools to be able to carry out a control of the developments like Travis and Github.
                    </div>
                </div>
            </div>
        </React.Fragment>
        
    );
}

export default AboutMe;