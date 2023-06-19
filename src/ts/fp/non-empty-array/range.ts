import { strict as assert } from "node:assert";
import { range } from "fp-ts/NonEmptyArray";

assert.deepStrictEqual(range(1, 5), [1, 2, 3, 4, 5]);
range(1, 3)
range(1, 5).forEach((x: any) => console.log(`\n### x: \n  ${x + "A"}`));

range(1, 5).forEach(async (x: any) => {
  await Promise.resolve(x + "B");
});
