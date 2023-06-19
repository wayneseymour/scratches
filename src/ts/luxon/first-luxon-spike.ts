import { DateTime } from "luxon";

let now = () => DateTime.fromISO(DateTime.now().toString());

const bef = now();
const aft = now();

aft.diff(bef).toObject();
