import * as fs from 'fs';
import crypto from 'crypto';
import { pipeline } from 'node:stream/promises';


async function print(readable) {
  readable.setEncoding("utf8");
  let data = "";
  for await (const chunk of readable) {
    data += chunk;
  }
  console.log(data);
}

(async function () {
  await print(fs.createReadStream("to-be-read.txt"));
})();
