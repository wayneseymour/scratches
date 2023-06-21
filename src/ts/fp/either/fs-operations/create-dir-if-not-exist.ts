import { Either } from "fp-ts/Either";
import fs from "fs/promises";
import { toError } from "fp-ts/Either";
import { flow } from "fp-ts/function";
import { resolve } from "path";
import * as TE from "fp-ts/TaskEither";
const swallowAlreadyExistsAndPathStructureDoesNotExist = (reason: unknown) =>
  toError(reason);
const logsDirectory = (): string =>
  resolve(
    "/Users/trezworkbox/dev/main.worktrees/es-archiver-slow",
    "test/functional/apps/is_es_archiver_slow/wei"
  );
console.log(`\n### logsDirectory(): \n  ${logsDirectory()}`);

const mkDirAndIgnoreAllErrors: () => Promise<Either<Error, void>> = flow(
  TE.tryCatch(
    // async () => await fs.mkdir(fullLogDirAndFilePath()),
    async () => await fs.mkdir(logsDirectory()),
    swallowAlreadyExistsAndPathStructureDoesNotExist
  )
);

(async () => {
  const resX = await mkDirAndIgnoreAllErrors();

  console.log(`\n### res: \n\t${JSON.stringify(resX, null, 2)}`);
  // console.log(`\n### res: \n\t${JSON.stringify(resX, null, 2)}`);
})();
