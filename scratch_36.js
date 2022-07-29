import { taskEither } from "fp-ts";

function get(url) {
  return taskEither.tryCatch(
    () => fetch(url).then((res) => res.text()),
    (reason) => new Error(String(reason))
  );
}

get('www.google.com').fork(
  (x) => {
    console.error(`\n### x: \n\t${x}`)
  },
  (x) => {
    console.log(`\n### x: \n\t${x}`);
  }
);
