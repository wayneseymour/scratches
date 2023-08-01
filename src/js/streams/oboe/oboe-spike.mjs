import oboe from "oboe";
import { createReadStream } from "fs";

const f = (x) => oboe(createReadStream(x));

f(
  "/Users/trezworkbox/dev/main.worktrees/esarch-gzip-watermark-poc/x-pack/test/functional/es_archives/action_task_params"
);
