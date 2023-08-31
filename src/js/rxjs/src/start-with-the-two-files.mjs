import { createReadStream } from "fs";
import { readdir } from "fs/promises";
import { of, from } from "rxjs";
import { reduce, takeUntil, mapTo } from "rxjs/operators";
async function readDirectory(path) {
  const allNames = await readdir(path);
  return allNames.filter((name) => !name.startsWith("."));
}
const archivePath =
"/Users/trezworkbox/dev/main.worktrees/can-we-oboe/x-pack/test/functional/es_archives/logstash_functional";
// const contents = await readDirectory(archivePath);

// of(await readDirectory(archivePath))
from(await readDirectory(archivePath))
  // .pipe(reduce((acc, one) => acc + one, seed))
  // .pipe(reduce((acc, one) => acc + one))
  .subscribe({
    next: (value) => console.log("$ next:", value),
    error: (err) => console.log("error:", err),
    complete: () => console.log("the end"),
  });

// Outputs
// next: [1, 2, 3]
// the end
