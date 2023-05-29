import * as A from 'fp-ts/lib/Array'

const names = [
  'indexTableIndexNameLink',
  'indexTableIndexNameLink',
  'indexTableCell-health',
];

const prefix = x => `somePrefix-${x}`
const postfix = x => `${x}-somePostFix`
const infix = x => `before-${x}-after`

// A.zipWith([prefix, postfix], names, (f, x) => f(x));
A.zipWith([prefix, postfix, infix], names, (f, x) => f(x));
