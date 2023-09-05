import { interval, take, range, concat } from "rxjs";
import { from, fromEventPattern } from "rxjs";
import { map } from "rxjs/operators";
import * as fs from "fs";
import oboe from "oboe";
import * as zlib from "zlib";

// const subscribeToStreamingJsonStream = (archivePath) => {
//   archivePath =
//     "/Users/trezworkbox/dev/scratches/src/js/streams/native-nodejs-streams/gunzip/someotherfile.txt";
//   console.log(`\nλjs archivePath: \n\t${archivePath}`);

//   jsonStanzaStream(archivePath).subscribe({
//     next: (x) =>
//       console.log(
//         `\nλjs jsonStanzas stream - next, x: \n${JSON.stringify(x, null, 2)}`
//       ),
//     error: (err) => console.log("error:", err),
//     complete: () => console.log("the end"),
//   });
// };

// const subscribeToDecompressionStream = (gunzipObservable) => {
//   gunzipObservable().subscribe({
//     next: (x) => console.log("\nλjs decompression stream - next, x:", x),
//     error: (err) => console.log("error:", err),
//     complete: () => console.log("the end"),
//   });
// };

// subscribeToDecompressionStream(decompressionObservable(archivePath));
// subscribeToStreamingJsonStream(archivePath);

const archivePath = "myfarequote.txt";
const compressedArchivePath =
  "/Users/trezworkbox/dev/main.worktrees/can-we-oboe/x-pack/test/functional/es_archives/ml/farequote/data.json.gz";

const toStr = (x) => `${x}`;
const noop = () => {};

const begin = (tgt) => {
  const obj$ = (x) =>
    oboe(fs.createReadStream(x).pipe(zlib.createGunzip())).pipe(map(toStr));
  const json$ = () => obj$(tgt).on("done", noop);

  fromEventPattern(json$).subscribe({
    next: (x) => console.log(`\nλjs x: \n${JSON.stringify(x, null, 2)}`),
    error: (err) => console.log("error:", err),
    complete: () => console.log("the end"),
  });
};

// begin(compressedArchivePath);

// const pipedOboeStream = (x) => (_) =>
//   oboe(
//     fs
//       .createReadStream(x)
//       .pipe(zlib.createGunzip())
//       .pipe(map(toStr))
//   ).on("done", _)
// fromEventPattern(pipedOboeStream(archivePath)())
//   .subscribe((x) => console.log(x));

const jsonStanzaStream = (pathToFile) => (_) =>
  oboe(fs.createReadStream(pathToFile)).on("done", _);
const jsonStanzaObservable = (jsonStanza$) => (x) => () =>
  fromEventPattern(jsonStanza$(x));

// const result = concat(
// decompressionObservable(archivePath)(),
// jsonStanzaObservable(jsonStanzaStream)(archivePath)()
// );
jsonStanzaObservable(jsonStanzaStream)(archivePath)().subscribe((x) =>
  console.log(x)
);
