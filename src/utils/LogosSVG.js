import React from 'react';

import awsLambda from './../img/logos/aws-lambda.svg';
import awsApiGateway from './../img/logos/aws-api-gateway.svg';
import awsDynamoDB from './../img/logos/aws-dynamodb.svg';
import javascript from './../img/logos/jslogo.svg';
import html5 from './../img/logos/HTML5_logo_resized.svg';
import css3 from './../img/logos/CSS3_logo_and_wordmark.svg';
import react from './../img/logos/react.svg';
import angular from './../img/logos/angular-logo.svg';
import spring from './../img/logos/spring-3.svg';
import sass from './../img/logos/sass-1.svg';
import node from './../img/logos/nodejs-1.svg';

export function JavascriptLogo ({classes}) {
    return(
        <img src={javascript} alt="javascript logo" className={classes}/>
    );
};

export function Html5Logo ({classes}) {
    return(
        <img src={html5} alt="html5 logo" className={classes}/>
    );
};

export function Css3Logo ({classes}) {
    return(
        <img src={css3} alt="css3 logo" className={classes}/>
    );
};

export function ReactLogo ({classes}) {
    return(
        <img src={react} alt="react logo" className={classes}/>
    );
};

export function AngularLogo ({classes}) {
    return(
        <img src={angular} alt="angular logo" className={classes}/>
    );
};

export function SpringLogo ({classes}) {
    return(
        <img src={spring} alt="spring logo" className={classes}/>
    );
};

export function SassLogo ({classes}) {
    return(
        <img src={sass} alt="sass logo" className={classes}/>
    );
};

export function NodeLogo ({classes}) {
    return(
        <img src={node} alt="node logo" className={classes}/>
    );
};

export function AWSLambdaLogo ({classes}) {
    return(
        <img src={awsLambda} alt="aws lambda logo" className={classes}/>
    );
};

export function AWSApiGateway ({classes}) {
    return(
        <img src={awsApiGateway} alt="aws api gateway logo" className={classes}/>
    );
}

export function AWSDynampDB ({classes}) {
    return(
        <img src={awsDynamoDB} alt="aws dynamodb logo" className={classes}/>
    );
}

