import { interval, take, range, concat } from "rxjs";
import { from, fromEventPattern } from "rxjs";
import { map } from "rxjs/operators";
import * as fs from "fs";
import oboe from "oboe";
import * as zlib from "zlib";


const archivePath = "myfarequote.txt";
const compressedArchiveFilePath =
  // "/Users/trezworkbox/dev/main.worktrees/can-we-oboe/x-pack/test/functional/es_archives/ml/farequote/data.json.gz";
  "/Users/trezworkbox/dev/main.worktrees/straight-pipe-using-sax-parser/x-pack/test/functional/es_archives/logstash_functional/data.json.gz";

const toStr = (x) => `${x}`;
const noop = () => {};

const begin = (tgt) => {
  const obj$ = (x) =>
    oboe(fs.createReadStream(x).pipe(zlib.createGunzip()))


  const json$ = () => obj$(tgt).on("done", (...args) => {
    console.log(`\nλjs args: \n${JSON.stringify(args, null, 2)}`)
  });

  json$(tgt)




  // });
};

begin(compressedArchiveFilePath)

const jsonStanzaStream = (pathToFile) => (_) =>
  oboe(fs.createReadStream(pathToFile)).on("done", _);
const jsonStanzaObservable = (jsonStanza$) => (x) => () =>
  fromEventPattern(jsonStanza$(x));

// const result = concat(
// decompressionObservable(archivePath)(),
// jsonStanzaObservable(jsonStanzaStream)(archivePath)()
// );
// jsonStanzaObservable(jsonStanzaStream)(archivePath)().subscribe((x) =>
//   console.log(x)
// );
