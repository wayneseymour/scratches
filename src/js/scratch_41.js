const source$ = subscriber => {
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
