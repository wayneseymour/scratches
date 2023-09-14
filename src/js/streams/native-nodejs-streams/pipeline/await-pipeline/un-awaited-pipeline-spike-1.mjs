import * as fs from 'fs';
import crypto from 'crypto';
import { pipeline } from 'node:stream/promises';


const fd = fs.createReadStream('./to-be-read.txt');
const hash = crypto.createHash('sha1');
hash.setEncoding('hex');

// read all file and pipe it (write it) to the hash object
// const end = pipeline(fd, hash);
const end = pipeline(fd, (x) => {
  console.log(`\nλjs x: \n${JSON.stringify(x, null, 2)}`);
  return x;
});


console.log(`\nλjs end: \n${JSON.stringify(end, null, 2)}`);
