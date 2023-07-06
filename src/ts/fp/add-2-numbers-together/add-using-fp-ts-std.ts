import { add } from "fp-ts-std/Number";
import { strict as assert } from "node:assert";

const res = assert.strictEqual(add(2)(3), 5);
console.log(`\n### add(1, 2): \n  ${add(1)(2)}`);
