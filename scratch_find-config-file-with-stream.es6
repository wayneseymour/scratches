import {fromEventPattern, fromEvent, from, tap, filter, of, find} from 'rxjs';
import {map, mergeMap, takeUntil, bufferCount, pluck} from 'rxjs/operators';
const {resolve, dirname} = require('path');
const {readdir, stat} = require('fs').promises;

const isDir = async x => (await stat(x)).isDirectory();
const isConfig = x => /.*config\.(ts|js)/.test(x)
const directoryOf = x => dirname(x);

let count = 0;
const testFile = '/Users/tre/main/test/functional/apps/context/classic/_filters.ts';
const config = await findConfigFile(testFile)


async function findConfigFile(filePath) {
  // if (count === 4) return;
  // count++
  const directory = directoryOf(filePath)

  from(await readdir(directory))
    // .pipe(
    //   find(isConfig)
    // )
    .subscribe({
      next: x => console.log(`\n### x2: \n\t${x}`),
      // next: noop,
      error: x => console.error(`\n### x: \n\t${x}`),
      complete: console.log('\n### Complete'),
    })

  // for (const x of xs)
  //   if (isConfig(x))
  //     return resolve(directory, x)
  //
  // return await findConfigFile(directory)
}
