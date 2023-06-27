import { interval, pipe, take } from 'rxjs';

const observable = interval(1000);
const subscription = observable
  .pipe(take(1))
  .subscribe(x => console.log(x));
// Later:
// This cancels the ongoing Observable execution which
// was started by calling subscribe with an Observer.
subscription.unsubscribe();