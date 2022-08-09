const take3 = take(3);
const generate10 = numberGenerator(10);

(async () => {
  for await (const x of take3(generate10)) {
    console.log(`\n### x: \n\t${x}`);
  }
})();

function take(n) {
  var i = 0;
  return async function* takeCollection (xs) {
    for await (const x of xs) {
      if (n === i++) {
        return;
      }
      yield x;
    }
  }
}
async function* numberGenerator(limit) {
  let i = 0;
  while (true) {
    await timer(Math.random() * 1000);
    yield i++;
    if (i > limit) return;
  }
};
function timer(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};