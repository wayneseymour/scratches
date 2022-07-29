/**
 * A simple object with a `next` and `complete` callback on it.
 */
interface Observer<T> {
    next: (value: T) => void;
    complete: () => void;
}

/**
 * A function that takes a simple object with callbacks
 * and does something them.
 */
const source$ = (subscriber: Observer<number>) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
};

// Usage
console.log('start');
source$({
    next: console.log,
    complete: () => console.log('done'),
});
console.log('stop');
