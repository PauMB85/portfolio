import React from 'react';

import { Paper, IconButton } from '@material-ui/core';
import { LinkedinLogo, GithubLogo } from './../../utils/LogosSVG'; 

import './Footer.scss';

function Footer(props) {
    return (
        <div className="Footer">
            <Paper className="paper">
                <div className="flex-column">
                    <div className="social">
                        <IconButton aria-label="linkedin" href="https://www.linkedin.com/in/paumaravi/" target="_blank">
                            <LinkedinLogo  classes="icons"/>
                        </IconButton>
                        <IconButton aria-label="github" href="https://github.com/PauMB85" target="_blank">
                            <GithubLogo  classes="icons github-icon"/>
                        </IconButton>
                    </div>
                    <div className="rights">
                        &copy; Pau Maravi Busquets - portfolio v1.0
                    </div>
                </div>
            </Paper>
        </div>
    );
}

export default Footer;