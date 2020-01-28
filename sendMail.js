const AWS = require('aws-sdk');

const ses = new AWS.SES({region: 'us-east-1'});

export function handler(event, context, callback){
    console.log('context:', context);
    console.log('event', event);
    const { apisite } = event.headers;
    console.log('enviorement: ', process.env[apisite]);
    const { mailTo, name, surname, subject, text } = JSON.parse(event.body);
    const bodyMail = `Hola acabas de recibir un mail de ${name} ${surname} (${mailTo}): \n ${text}`;
    const params = {
        Destination: {
            ToAddresses: [process.env[apisite]]
        },
        Message: {
            Body: {
                Text: { Data: bodyMail}
            },
            Subject: { Data: subject}
        },
        Source: process.env[apisite]
    };
    ses.sendEmail(params, (error, data) => {
        //enable cors
        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        };

        if(error) {
            const response = {
                statusCode: 500,
                headers: headers,
                body: JSON.stringify({ status: false })
            };
            callback(null, response);
            return;
        }

        // Return status code 200 and the newly created item
        const response = {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify(data)
        };
        callback(null, response);
    });
};