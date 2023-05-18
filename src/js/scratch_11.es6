import {fromEvent} from "rxjs";
import {takeUntil} from "rxjs/operators";

const blockEndRe = /^}$/;
const encoding = 'utf8';
const appendUtf8 = { flag: 'a', encoding };

export const convert = log => src => dest => {
    log.info(`\n### Processing: \n\t${src}`);
    const writeToDest = writeFileSync.bind(null, dest);
    writeToDest('', appendUtf8)


    process.exit(11)
    const rl = readline.createInterface({input: createReadStream(src)});
    fromEvent(rl, 'line').pipe(takeUntil(fromEvent(rl, 'close')))
        .subscribe(
            x => {
                // writeFileSync(dest, x.replaceAll(/\s/g, ''), append);
                writeToDest(x.replaceAll(/\s/g, ''), appendUtf8)
                if (blockEndRe.test(x)) {
                    // writeFileSync(dest, `${x.replaceAll(/\s/g, '')}\n`, append)
                    writeToDest(`${x.replaceAll(/\s/g, '')}\n`, appendUtf8)
                }
            },
            e => {
                console.log(`\n### e: \n\t${e}`);
            },
            () => {
                console.log('\n### Complete');
            },
        )
}
