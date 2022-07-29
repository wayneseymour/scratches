const fs = require('node:fs');
const {Readable} = require('node:stream');
//
// import * as fs from 'node:fs';
// import {Readable} from 'node:stream';

// const nodeReadable = fs.createReadStream(
//     'some.file.txt', {encoding: 'utf-8'});
// const webReadableStream = Readable.toWeb(nodeReadable);
//
// webReadableStream.then(x => console.log(`\n### x: \n\t${x}`))


const nodeReadable = fs.createReadStream(
    'text-file.txt', {encoding: 'utf-8'});
const webReadableStream = Readable.toWeb(nodeReadable);
webReadableStream.then(x => console.log(`\n### x: \n\t${x}`))
