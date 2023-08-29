import { pipe } from "fp-ts/function";
import { resolve } from "path";
import { readFileSync } from "fs";

const REPO_ROOT = "./";
const errFilePath = () =>
  resolve(REPO_ROOT, "esarch_failed_load_action_archives.txt");

const read = (x) => readFileSync(x);

pipe(errFilePath(), read, console.log.bind(console));
