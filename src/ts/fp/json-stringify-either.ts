import { flow, pipe } from "fp-ts/lib/function";
import * as A from "fp-ts/lib/Array";
import * as O from "fp-ts/lib/Option";
import * as TE from "fp-ts/lib/TaskEither";
import * as E from "fp-ts/lib/Either";
import * as J from "fp-ts/lib/Json";

type JsonStringifyError = Readonly<{
  type: "JsonStringifyError";
  error: Error;
}>;
type Response = {
  data: any;
};
const jsonStringify = (x: any) =>
  flow(
    J.stringify,
    E.mapLeft((e) => ({
      type: "JsonStringifyError",
      error: E.toError(e),
    }))
  );

const someF = (payload: unknown): E.Either<JsonStringifyError, Response> =>
  pipe(
    payload,
    jsonStringify,
    E.map((s) => ({
      body: s,
      contentLength: s.length,
    }))
  );

