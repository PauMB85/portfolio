import React from 'react';

import jsLogo from '../../img/logos/jslogo.png';
import html5Logo from '../../img/logos/HTML5_logo_resized.svg';
import css3Logo from '../../img/logos/CSS3_logo_and_wordmark.svg';
import './Skills.scss';



function Skills(props) {

    return (
        <div className="Skills">
            <h1>Skills</h1>
            <div className="collect-skills">
                <h2>Languages and frameworks</h2>
                <img src={jsLogo} alt="javascript logo" className="logos"/>
                <img src={html5Logo} alt="html5 logo" className="logos"/>
                <img src={css3Logo} alt="css3 logo" className="logos"/>
            </div>
            
            
            
        </div>
    );
}

export default Skills;