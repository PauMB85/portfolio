import React from 'react';

import { Paper, IconButton } from '@material-ui/core';
import { LinkedinLogo, GithubLogo } from '../../utils/LogosSVG';

import './Footer.scss';

function Footer(props) {
	return (
		<div className="Footer">
			<Paper className="paper" variant="outlined" square>
				<div className="flex-column">
					<div className="social">
						<IconButton aria-label="linkedin" href="https://www.linkedin.com/in/paumaravi/" target="_blank" rel="noreferrer">
							<LinkedinLogo classes="icons" />
						</IconButton>
						<IconButton aria-label="github" href="https://github.com/PauMB85" target="_blank" rel="noreferrer">
							<GithubLogo classes="icons github-icon" />
						</IconButton>
					</div>
					<div className="rights">&copy; Pau Maravi Busquets - portfolio v1.0</div>
					<div className="rights">
						In the construction of this project the technologies have been used React, AWS Lambda, API Gateway, S3, Route 53 y SNS
					</div>
				</div>
			</Paper>
		</div>
	);
}

export default Footer;
