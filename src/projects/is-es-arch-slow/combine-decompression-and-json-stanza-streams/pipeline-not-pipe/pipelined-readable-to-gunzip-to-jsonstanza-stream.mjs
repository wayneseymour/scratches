import { pipeline } from 'node:stream'
import * as fs from "fs";
import oboe from "oboe";
import * as zlib from "zlib";

const archivePath = "myfarequote.txt";
const compressedArchiveFilePath =
  // "/Users/trezworkbox/dev/main.worktrees/can-we-oboe/x-pack/test/functional/es_archives/ml/farequote/data.json.gz";
  "/Users/trezworkbox/dev/main.worktrees/straight-pipe-using-sax-parser/x-pack/test/functional/es_archives/logstash_functional/data.json.gz";

const toStr = (x) => `${x}`;
const noop = () => {};

const begin = (pathToCompressedFile) => {
  const obj$ = (x) =>
    oboe(
      pipeline(fs.createReadStream(x), zlib.createGunzip(), (err) => {
        if (err) {
          console.error("Pipeline failed.", err);
        } else {
          console.log("Pipeline succeeded.");
        }
      })
    );
  const json$ = () =>
    obj$(pathToCompressedFile).on("done", (...args) => {
      console.log(`\nλjs args: \n${JSON.stringify(args, null, 2)}`);
    });
  json$(pathToCompressedFile);
};

begin(compressedArchiveFilePath);
