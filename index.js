require('dotenv').config()
var request = require('request');
var fs = require('fs');

var imageFile = fs.readFileSync('images/face.jpg');
var encoded = Buffer.from(imageFile).toString('base64');

request.post({
    url: 'https://api.remove.bg/v1.0/removebg',
    formData: {
        // image_file: fs.createReadStream('images/face.jpg'),
        image_file_b64: encoded,
        size: 'auto',
    },
    headers: {
        'X-Api-Key': process.env.API_KEY
    },
    encoding: null
}, function(error, response, body) {
    if(error) return console.error('Request failed:', error);
    if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
    fs.writeFileSync("no-bg.png", body);
});