import React from 'react';

import { AWSLambdaLogo, AWSApiGateway, AWSDynampDB, JavascriptLogo, Html5Logo, 
         Css3Logo, ReactLogo, AngularLogo, SpringLogo, SassLogo, NodeLogo } from '../../utils/LogosSVG';

import './Skills.scss';



function Skills(props) {

    return (
        <div className="Skills">
            <h1>Skills</h1>
            <div className="collect-skills">
                <h2>Frameworks y lenguajes</h2>
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
                <h2>Tecnologías</h2>
                <div className="logos-skills">
                    <AWSLambdaLogo classes="logos"/>
                    <AWSApiGateway classes="logos"/>
                    <AWSDynampDB classes="logos"/>
                </div>
            </div>
            
            
            
        </div>
    );
}

export default Skills;