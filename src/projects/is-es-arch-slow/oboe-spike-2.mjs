import { from, fromEventPattern } from "rxjs";
import * as fs from "fs";
import * as zlib from "zlib";
import { map } from "rxjs/operators";
import oboe from "oboe";

const noop = () => {};
const begin = async (archivePath) => {
  const obj$ = (x) => oboe(fs.createReadStream(x));

  const json$ = (_) => obj$(archivePath).on('done', _)

  fromEventPattern(json$).subscribe({
    next: (x) => console.log(`\nλjs x: \n${JSON.stringify(x, null, 2)}`),
    error: (err) => console.log("error:", err),
    complete: () => console.log("the end"),
  });
};

const archivePath =
  "/Users/trezworkbox/dev/scratches/src/js/streams/native-nodejs-streams/gunzip/someotherfile.txt";
  // "/Users/trezworkbox/dev/main.worktrees/can-we-oboe/x-pack/test/functional/es_archives/ml/farequote/data.json";

begin(archivePath);
