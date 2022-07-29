import { statSync } from 'fs';
import * as E from 'fp-ts/lib/Either';

const pathExistsE = (x): Either<unknown, unknown> =>
E.tryCatch<unknown, unknown>(() => statSync(x)).fold(left, right);

pathExistsE('/tre')
