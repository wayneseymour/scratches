import { of, from } from "rxjs";
import * as fs from "fs";
import * as zlib from "zlib";

const dir = `src/js/streams/native-nodejs-streams/gunzip/someotherfile.txt.gz`


"/Users/trezworkbox/dev/scratches/src/js/streams/native-nodejs-streams/gunzip/someotherfile.txt.gz";


const gzipStream = fs.createReadStream(dir).pipe(zlib.createGunzip())


const decompressed$ = from(gzipStream)

decompressed$.subscribe({
  next: (data) => {
    console.log(`\nλjs data: \n${JSON.stringify(data.toString('utf-8'), null, 2)}`)
  },
  complete: () => console.log('\nλjs complete!')
});
