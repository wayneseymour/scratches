import { sum } from "./sum";
const length = (xs) => xs.length;

export const avg = (nums) => {
  const len = length(nums);
  const total = sum(nums);

  const average = total / len;
  return average;
};

const xs = [1, 2, 3];


avg(xs) /*?*/

avg([3815, 3864, 3829])
