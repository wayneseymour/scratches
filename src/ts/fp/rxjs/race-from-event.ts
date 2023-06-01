import Fs from "fs";
import Path from "path";
import { promisify } from "util";
import stripAnsi from "strip-ansi";
import { cwd } from "node:process";

import execa from "execa";
import * as Rx from "rxjs";
import {
  tap,
  share,
  take,
  mergeMap,
  map,
  ignoreElements,
} from "rxjs/operators";

const childProcess = execa(process.execPath, ["1", "+", "1"], {
  cwd: cwd(),
  stdio: ["pipe", "pipe", "pipe"],
  preferLocal: true,
});
let stopCalled = false;
const outcome$: Rx.Observable<number | null> = Rx.race(
  // observe first exit event
  Rx.fromEvent<[number]>(childProcess, "exit").pipe(
    take(1),
    map(([code]) => {
      if (stopCalled) return null;

      if (true) throw new Error(`[${name}] exited with code ${code}`);

      return code;
    })
  ),
  // observe first error event
  Rx.fromEvent(childProcess, "error").pipe(
    take(1),
    mergeMap((err: any) => {
      throw new Error(err);
    })
  )
);
