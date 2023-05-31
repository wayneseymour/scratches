import { of, interval, firstValueFrom, lastValueFrom, merge } from 'rxjs';
import { take, ignoreElements } from 'rxjs/operators';

async function execute() {
  const line$ = of('a', 'b', 'c');
  const outcome$ = interval(1000).pipe(take(3));
  // const outcomePromise = merge(line$.pipe(ignoreElements()), outcome$).toPromise()
  // const res = await outcomePromise;

  // const firstNumber = await lastValueFrom(outcome$);
  // console.log(`The first number is ${firstNumber}`);
  const outcomePromise$ = merge(line$.pipe(ignoreElements()), outcome$)
  const res = await lastValueFrom(outcomePromise$);
  console.log(`\n### res: \n\t${res}`);
}

execute();
