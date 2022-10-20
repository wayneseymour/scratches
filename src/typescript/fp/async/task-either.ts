import { TaskEither, tryCatch } from 'fp-ts/TaskEither'
import { pipe } from "fp-ts/lib/Function";

function get(url: string): TaskEither<Error, string> {
  return tryCatch(
    () => fetch(url).then((res) => res.text()),
    (reason) => new Error(String(reason))
  )
}

pipe(
  get('www.google.com'),
  TaskEither.foldW()
)
