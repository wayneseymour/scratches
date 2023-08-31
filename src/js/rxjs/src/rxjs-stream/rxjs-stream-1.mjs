import { rxToStream, streamToStringRx } from "rxjs-stream";
import { createReadStream } from "fs";
import { readdir } from "fs/promises";

async function readDirectory(path) {
  const allNames = await readdir(path);
  return allNames.filter((name) => !name.startsWith("."));
}
const archivePath = "/Users/trezworkbox/dev/main.worktrees/can-we-oboe/x-pack/test/functional/es_archives/logstash_functional";
const contents = await readDirectory(archivePath);
console.log(`\nλjs contents: \n  ${contents}`)
// let ob = streamToStringRx(createReadStream(archivePath))
// console.log(`\nλjs ob: \n  ${ob}`);
// .map((text) => text.toUpperCase());
// rxToStream(ob).pipe(process.stdout);
