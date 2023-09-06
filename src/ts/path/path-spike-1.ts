import {resolve} from "path";


const resolveEntry = (archivePath) => (x) =>
  resolve(archivePath as string, x);

const x = resolveEntry(
  "x-pack/test/functional/es_archives/logstash_functional"
)("data.json.gz");




