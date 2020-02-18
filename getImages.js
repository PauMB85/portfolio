import AWS from 'aws-sdk';
const s3 = new AWS.S3({region: 'us-east-1'});

let cacheImgs;

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
};

export function handler(event, context, callback){

    if(cacheImgs){
        console.log('obtenemos imgs de cache...');
        const response = {
            statusCode: 200,
            headers: headers,
            body: cacheImgs
        };
        callback(null, response);
        return;
    }

    const bucketName = process.env['paumb_img_bucket'];

    const params = {
        Bucket: bucketName,
        Delimiter: '/',
        Prefix: ''
    };

    const foldersBucket = callS3content(params).then(data => {
        console.log('ok al obtener las carpetas', data);
        return data.CommonPrefixes;
    }).catch(err => {
        console.log('error al recuperar las carptetas', err);
        return [];
    });

    foldersBucket.then(folders => {
        if(folders.length > 0){
            const promisesContentFolders = folders.map( folder => {
                params.Prefix = `${folder.Prefix}`;
                return processFiles(params);
            });
            Promise.all(promisesContentFolders).then(data => {
                const response = {
                    statusCode: 200,
                    headers: headers,
                    body: data
                };
                cacheImgs = data;
                callback(null, response);
            }).catch(err => {
                console.log('Error al procesar los archivos', err);
                const response = {
                    statusCode: 500,
                    headers: headers,
                    body: { status: false }
                };
                callback(null, response);
                return;
            });
        } else {
            const response = {
                statusCode: 200,
                headers: headers,
                body: folders
            };
            callback(null, response);
        }
    });

    function callS3content(params) {
        return s3.listObjectsV2(params).promise();
    }

    function processFiles(params){
        return callS3content(params).then(data => {
            const imgs = {};
            if(data.Contents.length > 0 ){
                const nameFolder = data.Prefix.slice(0, -1);
                const imagenes = data.Contents.map(file => {
                    const imgg = {
                        name: file.Key,
                        url: `https://${bucketName}.s3.amazonaws.com/${file.Key}`
                    };
                    return imgg;
                });
                imgs[nameFolder] = imagenes;
            }
            return imgs;
        });
    }
};