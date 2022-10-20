async function* generateSequence(start, end) {

  for (let i = start; i <= end; i++) {

    // Wow, can use await!
    await new Promise(resolve => setTimeout(resolve, 1000));

    yield i;
  }

}

(async () => {

  // let generator = generateSequence(1, 5);
  // for await (let value of generator) {
  for await (const value of generateSequence(1, 5)) {
    console.log(value); // 1, then 2, then 3, then 4, then 5 (with delay between)
  }

})();
