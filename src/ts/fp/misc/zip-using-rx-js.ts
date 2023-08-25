import * as A from 'fp-ts/lib/Array'
import { pipe } from 'fp-ts/lib/function'

const names = [
  'link',
  'name',
  'health',
  // 'status',
  // 'primary',
  // 'replicas',
  // 'documents',
  // 'size',
];
const filler = ['!', '!!', '!!!']

const zipped = pipe(names, A.zip(filler))
zipped
