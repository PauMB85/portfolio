const AWS = require('aws-sdk');

const ses = new AWS.SES({region: 'us-east-1'});

export function handler(event, context, callback){
    console.log('context:', context);
    console.log('event', event);
    const {mailTo, name, surname, subject, text } = JSON.parse(event.body);
    const bodyMail = `Hola acabas de recibir un mail de ${name} ${surname} (${mailTo}): \n ${text}`;
    const params = {
        Destination: {
            ToAddresses: ["xisketa87@hotmail.com, paumb85@gmail.com"]
        },
        Message: {
            Body: {
                Text: { Data: bodyMail}
            },
            Subject: { Data: subject}
        },
        Source: "paumb85@gmail.com"
    };
    return ses.sendEmail(params).promise().then(data => {
        console.log('mail_ok:',data);
        return response(200, 'data: mail send ok');
      })
      .catch(err => {
        console.log('mail_ko:',err);
        return response(500, 'error: error to send the mail');
      });
};

function response (statusCode, body){
    return {
        statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify(body)
    };
}