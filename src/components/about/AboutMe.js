import React, { useState, useEffect } from 'react';

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import me from './../../me.jpg'
import './AboutMe.scss';

function AboutMe(props) {

    const [isAboutMe, setIsAboutMe] = useState(false);
    const [aboutMe, setAboutMe] = useState(0);

    useEffect(() => {
        const aboutMePosition = document.getElementById('about');
        setAboutMe(aboutMePosition.offsetTop);
    },[]);

    useEffect(() => {
        if(aboutMe > 0){
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[aboutMe]);

    const handleScroll = () => {
        
        const positionScroll = window.pageYOffset;
        if(positionScroll >= aboutMe || positionScroll > aboutMe / 2.5){
            setIsAboutMe(true);
        }

        //setIsAboutMe(positionScroll > aboutMe ? true : false);
        
    }

    return (
        <div className="AboutMe">
            <h1>About me</h1>
            <div className="flex-column-reverse">
                <div className="img-element">
                    <img alt="me" src={me} className="img-me"/> 
                </div>
                { isAboutMe ? <Description /> : null}
            </div>
        </div>
    );
}

function Description () {
    return (
       <div className="text-element">
            <div className="text-about animation-text-fade-in-left">
                <div>
                    Hola! Soy Pau Maraví y soy un apasionado del desarrollo web.
                </div>
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
                <div>
                    En mi tiempo libre me gusta conocer nuevas tecnologías y hacer un PoC para conocerlas.
                </div>
                <div>
                    Cuando tengo que crear un nuevo proyecto, siempre me gusta utilizar AWS (lambda, dynamoDB, API Gateway, ...) para back-end
                    y para el front me gusta utilizar AngularJS(tachado) Angular o React.
                </div>   
            </div>
        </div> 
    );
}

export default AboutMe;