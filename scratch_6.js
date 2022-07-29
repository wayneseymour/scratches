const xs = [
    'Visualization 1 (tag-1)',
    'Visualization 2 (tag-2)',
    'Visualization 3 (tag-1 + tag-3)',
    'Visualization 4 (tag-2)',
    'My awesome vis (tag-4)',
    'dashboard 1 (tag-2)',
    'dashboard 2 (tag-3)',
    'dashboard 3 (tag-1 and tag-3)',
    'dashboard 4 (tag-special-chars)',
]

const sorted = xs.sort((a, b) => a - b)
console.log(`\n### sorted: \n${JSON.stringify(sorted, null, 2)}`);
console.log(`\n### xs: \n${JSON.stringify(xs, null, 2)}`);

const xa = []
const compare = ((a, b) => {
    const aHead = a.at(0);
    const bHead = b.at(0);

})
