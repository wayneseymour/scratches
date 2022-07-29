import { pipe } from 'fp-ts/lib/pipeable'
import { ask, chain, Reader } from 'fp-ts/lib/Reader'
import { ToolingLog, REPO_ROOT } from '@kbn/dev-utils';

interface Dependencies {
    i18n: {
        true: string
        false: string
    }
    lowerBound: number
    logger: ToolingLog
}

const instance: Dependencies = {
    i18n: {
        true: 'vero',
        false: 'falso'
    },
    lowerBound: 2,
    logger: new ToolingLog()
}

const f = (b: boolean): Reader<Dependencies, string> => deps => (b ? deps.i18n.true : deps.i18n.false)

// const g = (n: number): Reader<Dependencies, string> => f(n > 2)
const g = (n: number): Reader<Dependencies, string> =>
    pipe(
        ask<Dependencies>(),
        chain((deps: Dependencies) => f(n > deps.lowerBound))
    )

const h = (s: string): Reader<Dependencies, string> => g(s.length + 1)

// console.log(h('foo')(instance)) /*?*/
// pipe(ask<Dependencies>(), chain(deps => deps.logger.info('hi')))
const log = new ToolingLog({
    level: 'info',
    writeTo: process.stdout,
});
log.info('hi') /*?*/
// new ToolingLog().info('hi')
