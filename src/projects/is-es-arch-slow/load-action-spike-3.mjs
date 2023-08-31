import { from, fromEventPattern } from "rxjs";
import * as fs from "fs";
import * as zlib from "zlib";
import { map } from "rxjs/operators";
import oboe from "oboe";

const noop = () => {};
const begin = async (archivePath) => {
  const obj$ = (x) => oboe(createReadStream(x));
  const json$ = (_) => obj$.on("node", "!.*", _);

  fromEventPattern(json$).subscribe({
    next: (x) => console.log("\nλjs next, x:", x),
    error: (err) => console.log("error:", err),
    complete: () => console.log("the end"),
  });
};

const archivePath =
  "/Users/trezworkbox/dev/scratches/src/js/streams/native-nodejs-streams/gunzip/someotherfile.txt";

begin(archivePath);
