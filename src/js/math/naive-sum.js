const sum = (xs) =>
  xs.reduce((a, b) => {
    a = a + b;
    return a;
  }, 0);
sum([1, 2, 3]);
