import * as Rx from 'rxjs';
import { tap, share, take, mergeMap, map, ignoreElements } from 'rxjs/operators';

async function withTimeout(
  fnP: () => Promise<void>,
  ms: number,
  onTimeout: () => Promise<void>
) {
  await Rx.lastValueFrom(
    Rx.race(
      Rx.defer(fnP),
      Rx.timer(ms).pipe(Rx.mergeMap(onTimeout))
    )
  );
}

const SECOND = 1000;
const beforeTimeout = 1 * 1000;
const STOP_TIMEOUT = 2 * SECOND;
const afterTimeout = 3 * 1000;

(async () => {
  await withTimeout(
    async () => {
      // await new Promise<void>((resolve) => setTimeout(resolve, beforeTimeout));
      await new Promise<void>((resolve) => setTimeout(resolve, afterTimeout));
    },
    STOP_TIMEOUT,
    async function timeoutHandler() {
      console.log('\n### Waited too long')
    }
  )

})()
