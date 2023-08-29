// The following is an Observable that
// pushes the values 1, 2, 3
// immediately (synchronously) when subscribed,
// and the value 4 after one second has
// passed since the subscribe call,
// then completes:
import { Observable } from 'rxjs';

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});
