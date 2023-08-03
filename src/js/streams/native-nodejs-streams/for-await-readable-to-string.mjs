import { Readable } from "stream";
import { strict as assert } from "node:assert";

async function readableToString2(readable) {
  let result = "";
  for await (const chunk of readable) {
    result += chunk;
  }
  return result;
}

const readable = Readable.from("Good morning!", { encoding: "utf8" });
assert.equal(await readableToString2(readable), "Good morning!");
