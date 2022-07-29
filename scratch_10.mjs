import {createReadStream, statSync, readFileSync} from "fs";
import readline from "readline";
import {fromEvent} from "rxjs";
import {takeUntil} from "rxjs/operators";

let collected = [];
const blocks = [];
const blockEndRe = /^}$/;
const thePath = '/Users/tre/main/test/functional/fixtures/es_archiver/date_nanos/data.json';
const rl = readline.createInterface({input: createReadStream(thePath)});
fromEvent(rl, 'line').pipe(takeUntil(fromEvent(rl, 'close')))
    .subscribe(
        x => {
            collected.push(x)
            if (blockEndRe.test(x)) {
                blocks.push(collected.join('').replaceAll(/\s/g, ''))
                collected = []
            }
            blocks
        },
        e => {
            console.log(`\n### e: \n\t${e}`);
        },
        () => {
            console.log(blocks)
            console.log('\n### Complete');
        },
    )
