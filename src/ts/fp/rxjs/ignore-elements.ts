import { of, ignoreElements } from 'rxjs'
/**
 * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
 *
 * The `ignoreElements` operator suppresses all items emitted by the source Observable,
 * but allows its termination notification (either `error` or `complete`) to pass through unchanged.
 *
 * If you do not care about the items being emitted by an Observable, but you do want to be notified
 * when it completes or when it terminates with an error, you can apply the `ignoreElements` operator
 * to the Observable, which will ensure that it will never call its observers’ `next` handlers.
 *
 */

of('you', 'talking', 'to', 'me')
  .pipe(ignoreElements())
  .subscribe({
    next: word => console.log(word),
    error: err => console.log('error:', err),
    complete: () => console.log('the end'),
  });

// result:
// 'the end'
