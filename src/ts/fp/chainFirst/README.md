# FP-TS chainFirst

## Alias of `tap()` 

`export declare const chainFirst: <A, B>(f: (a: A) => IO<B>) => (first: IO<A>) => IO<A>`

```ts
import { pipe } from 'fp-ts/lib/pipeae'
import { right, fold } from 'fp-ts/lib/Either'
import { chainFirst } from 'fp-ts/lib/IO'
import { log, error } from 'fp-ts/lib/Console'

pipe(
    ( ) => right(42),
    chainFirst(fold(error, log)),
) ( );
```
