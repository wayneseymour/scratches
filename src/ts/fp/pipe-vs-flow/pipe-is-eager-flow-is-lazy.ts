import { pipe, flow } from 'fp-ts/function'

function add1(num: number): number {
  return num + 1
}

function multiply2(num: number): number {
  return num * 2
}

pipe(1, add1, multiply2) // 4

const lazyCalculation = flow(add1, multiply2);
lazyCalculation(1)
