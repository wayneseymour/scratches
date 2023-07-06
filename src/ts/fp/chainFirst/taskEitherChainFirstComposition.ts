import { pipe } from "fp-ts/function";
import { PathLike } from "fs";
import { toError } from "fp-ts/Either";
import { range } from "fp-ts/Array";
import * as TE from "fp-ts/TaskEither";
import { chainFirst } from "fp-ts/lib/IO";
import { log, error } from "fp-ts/lib/Console";

const immediateP = () => Promise.resolve("some immediate result");
async function runDataDrivenTestBlock() {
  await pipe(
    TE.tryCatch(immediateP, toError),
    TE.chainFirst((x: any) => console.log(x))
    // TE.map(console.log.bind(console))
    // chainFirst(log)
  )();
}

(async () => {
  await runDataDrivenTestBlock()
})()
