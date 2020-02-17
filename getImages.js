import AWS from 'aws-sdk';
const s3 = new AWS.S3({region: 'us-east-1'});

export function handler(event, context, callback){

    const bucketName = process.env['paumb_img_bucket'];
    const prefix = event.pathParameters.folder
    const params = {
        Bucket: bucketName,
        Delimiter: '/',
        Prefix: `${prefix}/`
    };

    s3.listObjectsV2(params, (error, data) => {
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
        const contents = data.Contents;
        let logos = [];
        if(contents.length > 0) {
            logos = contents.map(img => {
                return {
                    name: img.Key,
                    url: `https://${bucketName}.s3.amazonaws.com/${img.Key}`
                };
            });
        }
        const response = {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify(logos)
        };
        callback(null, response);
    });
};