import { interval, take, range, concat } from "rxjs";
import { from, fromEventPattern } from "rxjs";
import { map } from "rxjs/operators";
import * as fs from "fs";
import oboe from "oboe";
import * as zlib from "zlib";
import { pipeline } from "node:stream";

const archivePath = "myfarequote.txt";
const compressedArchiveFilePath =
  // "/Users/trezworkbox/dev/main.worktrees/can-we-oboe/x-pack/test/functional/es_archives/ml/farequote/data.json.gz";
  "/Users/trezworkbox/dev/main.worktrees/straight-pipe-using-sax-parser/x-pack/test/functional/es_archives/logstash_functional/data.json.gz";

const toStr = (x) => `${x}`;
const noop = () => {};

const begin = (pathToCompressedFile) => {
  const gzip = true;

  const obj$ = (x) =>
    oboe(
      pipeline(fs.createReadStream(x), gzip ? zlib.createGunzip() : new PassThrough(), (err) => {
        if (err) {
          console.error("Pipeline failed.", err);
        } else {
          console.log("Pipeline succeeded.");
        }
      })
    );
  const json$ = (pathToFile) => (_) => obj$(pathToFile).on("done", _);

  fromEventPattern(json$(pathToCompressedFile)).subscribe({
    next: (x) => console.log(`\nλjs streamed - x: \n${JSON.stringify(x, null, 2)}`),
    error: (err) => console.log("error:", err),
    complete: () => console.log("the end"),
  });
};

begin(compressedArchiveFilePath);
