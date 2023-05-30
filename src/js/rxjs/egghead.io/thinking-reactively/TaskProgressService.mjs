import { Observable, merge } from 'rxjs'
import { map, scan, startWith } from 'rxjs/operators';

const taskStarts = new Observable();
const taskCompletions = new Observable();
const showSpinner = new Observable();

const loadUp = taskStarts.pipe(map(1));
const loadDown = taskCompletions.pipe(map(-1));

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx //

const loadVariations = merge(loadUp, loadDown);

// When subscribed, the current task count will be emitted into the stream.
const currentLoadCount = loadVariations.pipe(
  startWith(0),
  scan((totalCurrentLoads, changeInLoads) => {
    return totalCurrentLoads + changeInLoads;
  })
)

export default {};
