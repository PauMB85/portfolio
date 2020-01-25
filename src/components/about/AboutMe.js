import React from 'react';

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import me from './../../me.jpg'
import './AboutMe.scss';

function AboutMe(props) {


    return (
        <div className="AboutMe">
            <h1 className="scroll-up-text">Sobre mi</h1>
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
                        Hola! Soy Pau Maraví y un apasionado de la tecnología y del desarrollo web.
                    </div>
                    <br />
                    <div>
                        En mi dia a dia trabajo como Full-stack. 
                        En el front-end utilizo:
                        <br />
                        <div className="flex-row-start">
                            <KeyboardArrowRightIcon /> AngularJS, si... AngularJS
                        </div>
                        <div className="flex-row-start">
                            <KeyboardArrowRightIcon /> ReactJS, oh yeah!  
                        </div>
                        y el Back-end que utilizo es Spring con Java 7/8.
                    </div>
                    <br />
                    <div>
                        En mi tiempo libre me gusta conocer nuevas tecnologías y hacer un PoC para conocerlas.
                    </div>
                </div>
            </div>
            <div className="text-element about-3">
                <div className="text-about">
                    <div>
                        Cuando tengo que crear un nuevo proyecto, siempre me gusta utilizar AWS (lambda, dynamoDB, API Gateway, ...) para back-end
                        y para el front me gusta utilizar Angular o React.
                        Además, me gusta utilizar herramientas DevOps para poder llevar a cabo un control de los desarrollos mediente Travis en Github.
                    </div>
                </div>
            </div>
        </React.Fragment>
        
    );
}

export default AboutMe;