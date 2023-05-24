import {log} from 'fp-ts/lib/Console'
import {getMonoid, IO, io} from 'fp-ts/lib/IO'
import {fold, Monoid, monoidSum} from 'fp-ts/lib/Monoid'
import {randomInt} from 'fp-ts/lib/Random'

type Die = IO<number>

const monoidDie: Monoid<Die> = getMonoid(monoidSum)

/** returns the sum of the roll of the dice */
const roll: (dice: Array<Die>) => IO<number> = fold(monoidDie)

const D4: Die = randomInt(1, 4)
const D10: Die = randomInt(1, 10)
const D20: Die = randomInt(1, 20)

const dice = [D4, D10, D20]

/** Log any value to the console for debugging purposes */
const withLogging = <A>(action: IO<A>): IO<A> =>
    io.chain(action, a => io.map(log(`Value is: ${a}`), () => a))

io.chain(
    roll(dice.map(withLogging)), result => log(`Result is: ${result}`)
)()

function map<Input, Output>(func: (arg: Input) => Output, xs: Input[]): Output[] {
    return xs.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
let parsed;
parsed = map((n) => parseInt(n), ["1", "2", "3"]); /*?*/
parsed = map<string, number>((n) => parseInt(n), ["1", "2", "3"]); /*?*/
parsed = map((n) => parseInt(n), ["1", "2", "3"]); /*?*/

// type map2 = (f: (x: in) => out) =>
const map2 = f => xs =>
    xs.map(f)

declare function idF<T>(x: T): T;

const id1= <T>(x: T): T => x;
const id2: <T>(x: T) => T = x => x;
const id3: typeof idF = (x) => x;

const id: <T>(x: T) => T = x => x;

id<number>(1)/*?*/
id<string>("a")/*?*/
id3<string>("a")/*?*/

type Person = {
    name: string;
    age: number;
};

const people: Person[] = [
    {
        name: "Sean",
        age: 28,
    },
    {
        name: "Steve",
        age: 42
    }
];

const reverse = <T>(data: T[]): T[] => {
    const temp = [];

    for (let i = data.length - 1; i >= 0; i -= 1) {
        temp.push(data[i]);
    }

    return temp;
};

// Pass type Person as the generic type
const reversedPeople = reverse<Person>(people);
