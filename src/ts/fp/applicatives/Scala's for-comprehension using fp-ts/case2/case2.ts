import * as I from "fp-ts/IO";
import { pipe } from "fp-ts/function";

declare function foo(): I.IO<string>;
declare function bar(): I.IO<void>;
declare function baz(a: string): I.IO<number>;
declare function qux(b: number): I.IO<void>;

pipe(
  I.Do,
  I.bind("a", () => foo()),
  I.chainFirst(() => bar()), // To discard the result, e.g. _ <- foo(), use chainFirst
  I.bind("b", ({ a }) => baz(a)),
  I.chainFirst(({ b }) => qux(b)), // To discard the result, e.g. _ <- foo(), use chainFirst
  I.map(({ b }) => b + 1), // map() here is like scala's for notation: yield
  (x) => x
);
