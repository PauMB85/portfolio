import React from 'react';

import { ReactComponent as Javascript} from './../img/logos/jslogo.svg';
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









export function JavascriptLogo ({classes}) {
    return(
        <Javascript alt="javascript logo" className={classes} />
    );
};

export function Html5Logo ({classes}) {
    return(
        <Html5 alt="html5 logo" className={classes}/>
    );
};

export function Css3Logo ({classes}) {
    return(
        <Css3 alt="css3 logo" className={classes}/>
    );
};

export function ReactLogo ({classes}) {
    return(
        <ReactL alt="react logo" className={classes}/>
    );
};

export function AngularLogo ({classes}) {
    return(
        <Angular alt="angular logo" className={classes}/>
    );
};

export function SpringLogo ({classes}) {
    return(
        <Spring alt="spring logo" className={classes}/>
    );
};

export function SassLogo ({classes}) {
    return(
        <Sass alt="sass logo" className={classes}/>
    );
};

export function NodeLogo ({classes}) {
    return(
        <NodeJS alt="node logo" className={classes}/>
    );
};

export function AWSLambdaLogo ({classes}) {
    return(
        <AwsLambda alt="aws lambda logo" className={classes}/>
    );
};

export function AWSApiGateway ({classes}) {
    return(
        <AwsApiGateway alt="aws api gateway logo" className={classes}/>
    );
}

export function AWSDynampDB ({classes}) {
    return(
        <AwsDynamoDB alt="aws dynamodb logo" className={classes}/>
    );
}

