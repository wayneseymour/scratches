const { resolve, dirname } = require('path');
const { readdir } = require('fs').promises;

async function* readDir(directory) {
  for (const x of await readdir(directory)) yield x;
}

const isConfig = (x) => /.*config\.(ts|js)/.test(x);
const directoryOf = (x) => dirname(x);

// TODO-TRE: Use a back stop the test directory.
// TODO-TRE: Once it reaches the backstop, stop iterating.
let count = 0;
export const findConfigFile = async (filePath) => {
  if (count === 4) return;
  count++;
  const directory = directoryOf(filePath);
  for await (const x of readDir(directory)) if (isConfig(x)) return resolve(directory, x);

  return await findConfigFile(directory);
};