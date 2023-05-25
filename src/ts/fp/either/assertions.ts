import * as E from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/function";
import { strict as assert } from "node:assert";

assert.deepStrictEqual(
  pipe(
    E.left("a"),
    E.alt(() => E.left("b"))
  ),
  E.left("b")
);

assert.deepStrictEqual(
  pipe(
    E.left("a"),
    E.alt(() => E.right(2))
  ),
  E.right(2)
);

const id = (x) => x;
pipe(
  E.left("a"),
  E.alt(() => E.right(2)),
  E.fold(id, id)
);

pipe(
  E.left("a"),
  E.mapLeft((e) => ({
    type: 'SomeOtherError',
    error: E.toError(e),
  })),
  E.alt(() => E.right(2)),
  E.fold(id, id)
)
pipe(
  // E.left("a"),
  E.chain(value => E.left(new Error(`Nothing can be ${value} in 2020`))),
  E.mapLeft((e) => ({
    type: 'SomeOtherError',
    error: E.toError(e),
  })),
  E.alt(() => E.right(2)),
  E.fold(id, id)
)
