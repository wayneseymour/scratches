import * as T from 'fp-ts/lib/Task'
import { Do } from 'fp-ts-contrib/lib/Do'
import { log } from 'fp-ts/lib/Console'
import { pipe } from 'fp-ts/function'

// filler values for brevity
type A = 'A'
type B = 'B'
type C = 'C'

declare const fa: () => T.Task<A>
declare const fb: (a: A) => T.Task<B>
declare const fc: (ab: { a: A; b: B }) => T.Task<C>

Do(T.task)
  .bind('a', fa()) // task
  .bindL('b', ({ a } /* context */) => fb(a)) // lazyf task
  .bindL('c', fc) // lazy task
  .return(({ c }) => c) // Task<"C">

  Do(T.task)
    .bind('a', fa())
    .bindL('b', ({ a }) => fb(a))
    .doL(({ b }) => pipe(log(b), T.fromIO)) // 👈 side effect
    .bindL('c', fc)
    .return(({ c }) => c)//?
