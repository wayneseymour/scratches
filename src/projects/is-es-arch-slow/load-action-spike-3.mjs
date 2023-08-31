import { from } from "rxjs";
import * as fs from "fs";
import * as zlib from "zlib";
import { map } from "rxjs/operators";
import oboe from "oboe";

const noop = () => { };
const begin = async (archivePath) => {
  const objStream = (x) => oboe(createReadStream(x)).on("done", noop);
  const jsonSummary$ = (_) => objStream.on("node", "!.*", _);
  from(fs.createReadStream(archivePath).pipe(zlib.createGunzip()))
    .pipe(map(toStr))
    .subscribe({
      next: (x) => console.log("\nλjs next, x:", x),
      error: (err) => console.log("error:", err),
      complete: () => console.log("the end"),
    });
};

const archivePath =
  "/Users/trezworkbox/dev/scratches/src/js/streams/native-nodejs-streams/gunzip/someotherfile.txt.gz";

begin(archivePath);
