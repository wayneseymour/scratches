
declare function idF<T>(x: T): T;

const id1= <T>(x: T): T => x;
const id2: <T>(x: T) => T = x => x;
const id3: typeof idF = (x) => x;

const id: <T>(x: T) => T = x => x;

id<number>(1)/*?*/
id<string>("a")/*?*/
id3<string>("a")/*?*/

const truth = (x: string): boolean => true;
truth('x')/*?*/
