const {resolve, dirname} = require('path');
const {readdir, stat} = require('fs').promises;

const isDir = async x => (await stat(x)).isDirectory();
const isConfig = x => /.*config\.(ts|js)/.test(x)
const directoryOf = x => dirname(x);

let count = 0;
const testFile = '/Users/tre/main/test/functional/apps/context/classic/_filters.ts';
const config = await findConfigFile(testFile)


async function findConfigFile(filePath) {
  if (count === 4) return;
  count++
  const directory = directoryOf(filePath)
  const xs = await readdir(directory);

  for (const x of xs)
    if (isConfig(x))
      return resolve(directory, x)

  return await findConfigFile(directory)
}

// for await (const x of findConfigFile(directory))
//   console.log(`\n### x: \n\t${x}`);
//
// async function* findConfigFile(directory) {
//   const xs = await readdir(directory);
//
//   for (const x of xs) {
//     const resolved = resolve(directory, x);
//     if (isConfig(resolved)) yield resolved
//     if (await isDir(resolved)) yield* findConfigFile(resolved)
//   }
// }
