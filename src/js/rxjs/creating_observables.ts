import { Observable } from "rxjs";

const observable$ = new Observable<string>(function subscribe(subscriber) {
  console.log("\n### Creating the observable");
  const id = setInterval(() => {
    subscriber.next("subscriber.next() - hi");
  }, 1000);
});

console.log("\n### Subscribe to observable");
observable$.subscribe((x) =>
  console.log(
    `\n### Recieved Next (notification) from Observable - value: \n  ${x}`
  )
);
