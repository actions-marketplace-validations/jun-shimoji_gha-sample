const core = require('@actions/core');
const request = require('request');

try {
    // const token = core.getInput('access_token');
    // const message = core.getInput('message');
    // const url = 'https://notify-api.line.me/api/notify'
    const url = core.getInput('my_url');
    request.post(url, {
        headers: {
            "Content-type": "application/json",
          },
        json: {"text":"Hello, World!!!!"}
    })
    .on('response', function (response) {
        response.setEncoding('utf8');
        response.on('data', function (data) {
            console.log(data);
            if (response.statusCode !== 200) {
                core.setFailed(data.message);
            }
        });
    });
} catch (error) {
  core.setFailed(error.message);
}