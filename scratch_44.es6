import {fromEventPattern, fromEvent, from, tap, filter} from 'rxjs';
import {map, mergeMap, takeUntil, bufferCount, pluck} from 'rxjs/operators';


const config = x => {
  const res = x


  return x;
}

const filePath = 'x-pack/test/functional/apps/advanced_settings/feature_controls/advanced_settings_security.ts';
const res = config(filePath)
console.log(res)

