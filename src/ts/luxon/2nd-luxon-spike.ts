import { DateTime } from "luxon";
import { pipe, flow } from 'fp-ts/function';


export const luxonNow = (): DateTime =>
  DateTime.fromISO(DateTime.now().toString());
export const formatLuxon = (d: DateTime): string =>
  d.toLocaleString(DateTime.DATETIME_MED);
export const lazyNow = flow(luxonNow, formatLuxon);
lazyNow()
