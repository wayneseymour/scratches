// Using as const to  specify immutable values, but what about immutable types?
const xs = ['a', 'b', 'c'] as const;

xs.push('d');

xs

const xs2: ReadonlyArray<number> = [1, 2, 3]
xs2.push(4)
