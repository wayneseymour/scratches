import { taskEither as TE } from "fp-ts";
import * as T from "fp-ts/lib/Task";
import { pipe } from "fp-ts/function";
import * as fs from "fs";
import * as path from 'path';

const readYaml = async (x: any) => {
  // return Promise.resolve('some yaml')
  throw new Error('error reading yaml')
};
function printConfig(config){
  console.log("AppConfig is", config);
  return config;
}
// convert nodejs-callback-style function to function returning TaskEither
const readFile = TE.taskify(fs.readFile);
// I don't think there is `taskify` alternative for Promise-returning functions but you can write it yourself quite easily
const readYamlAsTaskEither = (r) =>
  TE.tryCatch(
    () => readYaml(r),
    (e) => e
  );

function getConf(filePath: string) {
  return pipe(readFile(path.resolve(filePath)), TE.chain(readYamlAsTaskEither));
}

const remoteUrl = "https://api.apis.guru/v2/list.json";

async function main(filePath: string): Promise<void> {
  const program: T.Task<void> = pipe(
    getConf(filePath),
    TE.map(printConfig),
    // chain(eitherFetch),
    // getting rid of `Either` by using `getOrElse` or `fold`
    TE.getOrElse((e) => {
      // error handling (putting it to the console, sending to sentry.io, whatever is needed for you app)
      // ...
      // console.log(`\nλjs e: \n${JSON.stringify(e, null, 2)}`)
      return T.of(undefined);
    })
  );

  await program();
}
(async () => {
  main(
    "/Users/trezworkbox/dev/scratches/src/js/streams/native-nodejs-streams/gunzip/archive-path/someotherfile.txt"
  );

})()
