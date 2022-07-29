import { pipe } from 'fp-ts/lib/pipeable'
import { ask, chain, Reader } from 'fp-ts/lib/Reader'


interface Dependencies {
    i18n: {
        true: string
        false: string
    }
    lowerBound: number
}

const instance: Dependencies = {
    i18n: {
        true: 'vero',
        false: 'falso'
    },
    lowerBound: 2
}

const f = (b: boolean): Reader<Dependencies, string> => deps => (b ? deps.i18n.true : deps.i18n.false)

// const g = (n: number): Reader<Dependencies, string> => f(n > 2)
const g = (n: number): Reader<Dependencies, string> =>
    pipe(
        ask<Dependencies>(),
        chain(deps => f(n > deps.lowerBound))
    )

const h = (s: string): Reader<Dependencies, string> => g(s.length + 1)

console.log(h('foo')(instance)) /*?*/
