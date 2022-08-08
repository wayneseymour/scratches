async function* take(n, xs) {
  var i = 0;
  for await (var x of xs) {
    if (n === i++) {
      return;
    }
    yield x;
  }
}
(async () => {
  for await (var x of take(3, numberGenerator(10))) {
    console.log(`\n### x: \n\t${x}`);
  }
})();

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