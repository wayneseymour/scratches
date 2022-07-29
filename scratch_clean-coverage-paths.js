const { readFileSync, writeFileSync } = require('fs');

const file = process.argv[2];
const search = process.argv[3];
const replace = process.argv[4]
writeFileSync(
  file,
  readFileSync(file).toString().replaceAll(search, replace)
);
