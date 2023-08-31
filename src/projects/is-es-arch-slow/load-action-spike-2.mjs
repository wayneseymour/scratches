import { from } from "rxjs";
import * as fs from "fs";
import * as zlib from "zlib";
import { map } from "rxjs/operators";
import oboe from "oboe";

const toStr = (x) => `${x}`;
const begin = async (archivePath) => {
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
