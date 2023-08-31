import { from, forkJoin, of, timer } from "rxjs";
import * as fs from "fs";
import * as zlib from "zlib";

const dir = `src/js/streams/native-nodejs-streams/gunzip/someotherfile.txt.gz`;

("/Users/trezworkbox/dev/scratches/src/js/streams/native-nodejs-streams/gunzip/someotherfile.txt.gz");

const gzip$ = fs.createReadStream(dir).pipe(zlib.createGunzip());

const observable = forkJoin({
  unzipped: from(gzip$),
  foo: of(1, 2, 3, 4),
  bar: Promise.resolve(8),
  baz: timer(4000),
});
observable.subscribe({
  next: (value) => console.log("value: ", value),
  complete: () => console.log("This is how it ends!"),
});

// Logs:
// { foo: 4, bar: 8, baz: 0 } after 4 seconds
// 'This is how it ends!' immediately after
