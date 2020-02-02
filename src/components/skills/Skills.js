import React from 'react';



import { AWSLambdaLogo, AWSApiGatewayLogo, AWSDynamoDBLogo, JavascriptLogo, Html5Logo, 
         Css3Logo, ReactLogo, AngularLogo, SpringLogo, SassLogo, NodeLogo, TravisLogo } from '../../utils/LogosSVG';

import './Skills.scss';



function Skills(props) {

    return (
        <div className="Skills">
            <h1>Skills</h1>
            <div className="collect-skills">
                <h2>Frameworks & languages</h2>
                <div className="logos-skills">
                    <JavascriptLogo classes="logos"/>
                    <Html5Logo classes="logos"/>
                    <Css3Logo classes="logos"/>
                    <ReactLogo classes="logos"/>
                    <AngularLogo classes="logos"/>
                    <SpringLogo classes="logos"/>
                    <SassLogo classes="logos"/>
                    <NodeLogo classes="logos"/>
                </div>
                <h2>Technologies</h2>
                <div className="logos-skills">
                    <AWSLambdaLogo classes="logos"/>
                    <AWSApiGatewayLogo classes="logos"/>
                    <AWSDynamoDBLogo classes="logos"/>
                    <TravisLogo classes="logos"/>
                </div>
            </div>
            
            
            
        </div>
    );
}

export default Skills;