import { createGunzip, gunzip, gunzipSync } from "zlib";
import * as fs from 'fs';

const dir =
  "/Users/trezworkbox/dev/main.worktrees/can-we-oboe/x-pack/test/functional/es_archives/logstash_functional/data.json.gz";

fs.createReadStream(dir).pipe(zlib.createGunzip()).pipe(process.stdout);
