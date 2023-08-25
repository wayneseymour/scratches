
const a = (x) => `a: ${x}`
const b = (x) => `b: ${x}`
const c = (x) => `c: ${x}`

const pipeLazy = (x) => {
  return pipe(a, b, c);
}

const pipeLazy123 = pipeLazy(123)
pipeLazy123()





function pipe(...fns: any[]) {
  return fns.reduce(
    (f, g) =>
      (...args: any[]) =>
        g(f(...args))
  );
}
