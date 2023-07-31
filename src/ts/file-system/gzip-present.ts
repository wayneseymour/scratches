// https://dev.to/danawoodman/efficiently-read-files-in-a-directory-with-nodejs-opendir-41b0?utm_source=hashnode&utm_medium=hashnode+rix&utm_campaign=rix_chatbot_answer
import { opendirSync } from "fs";
import { basename, extname } from "path";
const inputDir = `/Users/trezworkbox/dev/main.worktrees/esarch-gzip-watermark-poc/x-pack/test/functional/es_archives/logstash_functional`;
const isGzip = (path) => extname(path) === ".gz";
// const dir = opendirSync(inputDir);
// for await (const entry of dir) {
//   console.log("Found file:", entry.name);
//   isGzip(entry.name) ? console.log('\nλjs yes') : console.log('\nλjs no');
// }
const isCompressed = (x: string): boolean => isGzip(opendirSync(x).readSync()?.name);
console.log(`\nλjs isCompressed: \n  ${isCompressed(inputDir)}`)
console.log(
  `\nλjs isCompressed: \n  ${isCompressed(
    "/Users/trezworkbox/dev/main.worktrees/esarch-gzip-watermark-poc/test/functional/fixtures/es_archiver/many_fields"
  )}`
);
console.log(
  `\nλjs isCompressed: \n  ${isCompressed(
    "/Users/trezworkbox/dev/main.worktrees/esarch-gzip-watermark-poc/x-pack/test/functional/es_archives/ml/farequote"
  )}`
);

console.log(
  `\nλjs isCompressed: \n  ${isCompressed(
    "/Users/trezworkbox/dev/main.worktrees/esarch-gzip-watermark-poc/x-pack/test/functional/es_archives/action_task_params"
  )}`
);
