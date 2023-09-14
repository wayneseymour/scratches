import * as fs from 'fs';
import { pipeline } from 'node:stream/promises';

async function run() {
  await pipeline(
    fs.createReadStream("./to-be-read.txt"),
    fs.createWriteStream("./has-been-read.txt")
  );
  console.log("Pipeline succeeded.");
}

run().catch(console.error);
