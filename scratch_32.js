const id = x => x;

const asyncForEach = async (xs, i) => {
  const res = await Promise.resolve(xs[i])
  console.log(`\n### const res: \n\t${res}`);
  i++
  i === xs.length ? id() : asyncForEach(xs, i)
}


const run = async () => asyncForEach(['a', 'b', 'c'], 0);

run()
