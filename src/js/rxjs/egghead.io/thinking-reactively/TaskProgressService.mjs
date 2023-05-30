import { Observable, merge } from 'rxjs'
import { map, scan, startWith } from 'rxjs/operators';

const taskStarts = new Observable();
const taskCompletions = new Observable();
const showSpinner = new Observable();

// increment
const loadUp = taskStarts.pipe(map(1));
// decrement
const loadDown = taskCompletions.pipe(map(-1));

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx //

const loadVariations = merge(loadUp, loadDown);

// When subscribed, the current task count will be emitted into the stream.
const currentLoadCount = loadVariations.pipe(
  startWith(0),
  scan((totalCurrentLoads, changeInLoads) => {
    // Video author added this in case task completions
    // became much higher in count than task starts
    const newLoadCount = totalCurrentLoads + changeInLoads;
    return newLoadCount < 0 ? 0 : newLoad
  })
)

export default {};
