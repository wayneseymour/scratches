import * as O from 'fp-ts/lib/Option'
import { Option } from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/function'

const a: Option<number> = O.of(2)
const b: Option<string> = O.of('some b')
function foo(a: number, b: string): boolean {
  return a === 1 ? true : false
}
const fooC = (a: number) => (b: string) => foo(a, b)
// Option<boolean>
pipe(O.of(fooC), O.ap(a), O.ap(b))

function bar(a: boolean): object {
  return ({ a })
}

const fooOption = pipe(O.of(fooC), O.ap(a), O.ap(b))

// Option<object>
pipe(O.of(bar), O.ap(fooOption))
