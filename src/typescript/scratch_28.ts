import { Observable } from 'rxjs';

const source = new Observable<number>((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
});

// Usage
console.log('start');
source.subscribe({
    next: console.log,
    complete: () => console.log('done'),
});
console.log('stop');
