import { DateTime } from "luxon";

let now = () => DateTime.fromISO(DateTime.now().toString());

const bef: DateTime = now();
const aft = now();

aft.diff(bef).toObject();
