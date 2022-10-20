const {resolve, dirname} = require('path');

const directoryOf = x => dirname(x);
const directory = directoryOf('/Users/tre/main/test/functional/apps/context/classic/_filters.ts')
const next = directoryOf(directory)
