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

const archivePath =
  "/Users/trezworkbox/dev/scratches/src/js/streams/native-nodejs-streams/gunzip/someotherfile.txt.gz";
// "/Users/trezworkbox/dev/main.worktrees/can-we-oboe/x-pack/test/functional/es_archives/ml/farequote/data.json.gz";

const toStr = (x) => `${x}`;
const decompressionObservable = (x) => () =>
  from(fs.createReadStream(x).pipe(zlib.createGunzip())).pipe(map(toStr));

const jsonStanzaStream = (pathToFile) => (_) =>
  oboe(fs.createReadStream(pathToFile)).on("done", _);
const jsonStanzaObservable = (jsonStanza$) => (x) => () =>
  fromEventPattern(jsonStanza$(x));

const result = concat(
  decompressionObservable(archivePath)(),
  jsonStanzaObservable(jsonStanzaStream)(archivePath)()
);
result.subscribe((x) => console.log(x));
