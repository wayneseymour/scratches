import { generate } from "rxjs";

const result = generate(
  0,
  (x) => x < 3,
  (x) => x + 1,
  (x) => x
);

result.subscribe((x) => console.log(x));

// Logs:
// 0
// 1
// 2
