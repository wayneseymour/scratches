const stream = require('stream');
const {promisify} = require('util');
const fs = require('fs');
const got = require('got');

const pipeline = promisify(stream.pipeline);

(async () => {
    await pipeline(
        got.stream('https://sindresorhus.com'),
        fs.createWriteStream('tre.html')
    );

    // // For POST, PUT, PATCH, and DELETE methods, `got.stream` returns a `stream.Writable`.
    // await pipeline(
    //     fs.createReadStream('index.html'),
    //     got.stream.post('https://sindresorhus.com')
    // );//?
})();
