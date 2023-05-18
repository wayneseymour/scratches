const { resolve } = require('path');
const { readdir } = require('fs').promises;
const { path } = require('fs')

async function* getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

const dirName = '/Users/tre/main/x-pack/test/functional/apps/advanced_settings/feature_controls'

;(async () => {
  // for await (const f of getFiles('x-pack/test/functional/apps/advanced_settings')) {
  //   console.log(f);
  // }
  const xs = await readdir(
    dirName
  );
  console.log(xs)
})()

// path.dirname(fn)/*?*/
// path.basename(path.dirname(fn))/*?*/
