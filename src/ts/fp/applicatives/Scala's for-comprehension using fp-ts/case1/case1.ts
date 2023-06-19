import * as O from "fp-ts/Option";
import { pipe, flow } from 'fp-ts/function'

declare function foo(): O.Option<string>;
declare function bar(a: string): O.Option<number>;
declare function baz(b: number): O.Option<number>;

// Step 1
// Using Do and bind:
pipe(
  O.Do,
  O.bind("a", () => foo()),
  (x) => x //Option<{ a: string }>
);

// Calling foo, then using bindTo:
pipe(
  foo(),
  O.bindTo("a"),
  (x) => x //Option<{ a: string }>
);

// Step 2
// Using Do and bind:
pipe(
  O.Do,
  O.bind("a", () => foo()),
  O.bind("b", ({ a }) => bar(a)),
  O.filter(({ b }) => b >= 42),
  O.bind('c', ({ b }) => baz(b)),
  (x) => x
);

// Step 3
pipe(
  O.Do,
  O.bind("a", () => foo()),
  O.bind("b", ({ a }) => bar(a)),
  flow(O.filter(({ b }) => b >= 42), O.bind('c', ({ b }) => baz(b))),
  (x) => x
);

// Final
pipe(
  O.Do,
  O.bind("a", () => foo()),
  O.bind("b", ({ a }) => bar(a)),
  O.filter(({ b }) => b >= 42),
  O.bind("c", ({ b }) => baz(b)),
  O.map(({ b, c }) => b + c), // map() here is like scala's for notation: yield
  (x) => x
);
