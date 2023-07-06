import { pipe } from "fp-ts/function";
import { right, fold, left } from "fp-ts/lib/Either";
import { chainFirst } from "fp-ts/lib/IO";
import { log, error } from "fp-ts/lib/Console";

pipe(() => right(42), chainFirst(fold(error, log)))();/*?*/
pipe(() => left(42), chainFirst(fold(error, log)))();/*?*/
