# RXJS

## Observables

Observables are lazy Push collections of multiple values. 

Observables are created using the `new Observable` or a creation operator, are subscribed to with an Observer, executed to send next / error / complete notifications to the Observer, and their execution may be disposed.

Core observable concerns:
  - Creating observables
  - Subscribing to observables
  - Execuring the observable
  - Disposing observables

## Observers

Consumer of values delivered by an Observable.
Can also see them as simply a set of callbacks, one for each type of 
notifcation delivered by the Observable.

Object with methods `next()`, `error()`, and `complete()`.

```javascript
const observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};
```

## Subjects

A special type of observable that allows values to be mulitcasted to many Observers.
Like EventEmmiters, they maintain a registry of many listeners.

All subjects are Observables, all subjects are Observers

## Subscriptions

## Operators

We've creation operators, error handling operators

## Scheduler

It's a data structure, execution context, and contains a virtual clock.
