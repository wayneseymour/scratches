const add = (a) => (b) => a + b;
export const sum = (xs) =>
  xs.reduce((acc, curr) => {
    acc = add(acc)(curr);
    return acc;
  }, 0);

sum([1, 2, 3]);
