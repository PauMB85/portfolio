import React from 'react';

import { ReactComponent as Javascript } from './../img/logos/jslogo.svg';
import { ReactComponent as Html5 } from './../img/logos/HTML5_logo_resized.svg';
import { ReactComponent as Css3 } from './../img/logos/CSS3_logo_and_wordmark.svg';
import { ReactComponent as ReactL } from './../img/logos/react.svg';
import { ReactComponent as Angular } from './../img/logos/angular-logo.svg';
import { ReactComponent as Spring } from './../img/logos/spring-3.svg';
import { ReactComponent as Sass } from './../img/logos/sass-1.svg';
import { ReactComponent as NodeJS } from './../img/logos/nodejs-1.svg';
import { ReactComponent as AwsLambda } from './../img/logos/aws-lambda.svg';
import { ReactComponent as AwsApiGateway } from './../img/logos/aws-api-gateway.svg';
import { ReactComponent as AwsDynamoDB } from './../img/logos/aws-dynamodb.svg';
import { ReactComponent as Linkedin } from './../img/logos/linkedin-icon-2.svg';
import { ReactComponent as Github } from './../img/logos/github-1.svg';
import { ReactComponent as Travis } from './../img/logos/travis-ci.svg';
import { ReactComponent as PauMB } from './../img/logos/nombre-logo-pau.svg';

export function JavascriptLogo({ classes }) {
	return <Javascript id="js_logo" alt="javascript logo" className={classes} />;
}

export function Html5Logo({ classes }) {
	return <Html5 id="html_log" alt="html5 logo" className={classes} />;
}

export function Css3Logo({ classes }) {
	return <Css3 id="css3_logo" alt="css3 logo" className={classes} />;
}

export function ReactLogo({ classes }) {
	return <ReactL id="react_logo" alt="react logo" className={classes} />;
}

export function AngularLogo({ classes }) {
	return <Angular id="angular_logo" alt="angular logo" className={classes} />;
}

export function SpringLogo({ classes }) {
	return <Spring id="spring_logo" alt="spring logo" className={classes} />;
}

export function SassLogo({ classes }) {
	return <Sass id="sass_logo" alt="sass logo" className={classes} />;
}

export function NodeLogo({ classes }) {
	return <NodeJS id="node_logo" alt="node logo" className={classes} />;
}

export function AWSLambdaLogo({ classes }) {
	return <AwsLambda id="aws_lambda_logo" alt="aws lambda logo" className={classes} />;
}

export function AWSApiGatewayLogo({ classes }) {
	return <AwsApiGateway id="aws_api_gateway_logo" alt="aws api gateway logo" className={classes} />;
}

export function AWSDynamoDBLogo({ classes }) {
	return <AwsDynamoDB id="aws_dynamo_db_logo" alt="aws dynamodb logo" className={classes} />;
}

export function LinkedinLogo({ classes }) {
	return <Linkedin id="linkedin_logo" alt="linkedin logo" className={classes} />;
}

export function GithubLogo({ classes }) {
	return <Github id="github_logo" alt="github logo" className={classes} />;
}

export function TravisLogo({ classes }) {
	return <Travis id="travis_logo" alt="travis logo" className={classes} />;
}

export function PauMBLogo({ classes }) {
	return <PauMB id="paumb_logo" alt="paumb logo" className={classes} />;
}
