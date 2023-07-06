import { DateTime, Duration } from "luxon";

Duration.fromObject({ milliseconds: 30000 }).toFormat("hh:mm:ss");

const ms = 517495;
const obj = { milliseconds: ms };
Duration.fromObject(obj).toFormat("s");
Duration.fromObject(obj).rescale().toObject();
Duration.fromObject(obj).rescale().toObject().seconds;
// DateTime.fromObject(obj).toFormat('')
// const dt: DateTime = { milliseconds: ms }
// dt.toSeconds();
