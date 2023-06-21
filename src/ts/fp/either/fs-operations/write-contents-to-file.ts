import { promisify } from "util";
import fs from "fs";
import { tryCatch as TaskEitherTryCatch } from "fp-ts/lib/TaskEither";
import { toError } from "fp-ts/lib/Either";
import { pipe } from "fp-ts/function";

const readFromFile = promisify(fs.readFile);
const writeToFile = promisify(fs.writeFile);

export const getFileContents = (path: string) =>
  TaskEitherTryCatch(() => readFromFile(path, "utf-8"), toError);

export const writeContentsToFile = (path: string) => (contents: string) =>
  TaskEitherTryCatch(() => writeToFile(path, contents), toError);
// const f = writeContentsToFile("~/dev/scratches/XXX.txt")("blah blah blah");
// f().then((x: any) => console.log(`\n### x: \n  ${x}`))



