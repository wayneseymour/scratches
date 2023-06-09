type Parameter<T> = T extends (arg: infer T) => any ? T : never;

function call<F extends (arg: any) => any>(
  f: F,
  arg: Parameter<F>
): ReturnType<F> {
  return f(arg);
}

const double = (input: number): number => input * 2;

const result = call(double, 2); // Valid
const result2 = call(double, "2"); // Argument of type '"2"' is not assignable to parameter of type 'number'.(2345)
const result3 = call(double, false); // Argument of type 'false' is not assignable to parameter of type 'number'.(2345)

const baddouble = (input: number, options: {}): number => input * 2;

const result4 = call(baddouble, 2); // Argument of type '(input: number, options: {}) => number' is not assignable to parameter of type '(arg: any) => any'.(2345)
