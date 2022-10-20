import * as A from 'fp-ts/lib/Array'

const names = [
  'indexTableIndexNameLink',
  'indexTableIndexNameLink',
  'indexTableCell-health',
  'indexTableCell-status',
  'indexTableCell-primary',
  'indexTableCell-replica',
  'indexTableCell-documents',
  'indexTableCell-size',
];

const prefix = x => `somePrefix-${x}`
const postfix = x => `${x}-somePostFix`

const fns = [prefix, postfix]
 
const zipped = A.zipWith(fns, names, (f, x) => f(x));
console.log(zipped);

Array.from(Array(3).keys())//?
