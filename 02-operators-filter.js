/* =======================================================
  2. Filters
 ======================================================= */
/*
debounce
debounceTime
distinct
distinctKey
distinctUntilChanged
distinctUntilKeyChanged
elementAt
filter
first
ignoreElements
audit
auditTime
last
sample
sampleTime
single
skip
skipUntil
skipWhile
take
takeLast
takeUntil
takeWhile
throttle
throttleTime
*/

let myArray = [1, 3, 5, 6, 8, 8, 10, 1, 5];

/* distinct
Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.
*/

Rx.Observable
  .from(myArray)
  .distinct()
  .subscribe(
    (value)=> {
      console.log(value);
    }
  );

// 1
// 3
// 5
// 6
// 8
// 10

/* filter */
Rx.Observable
  .from(myArray).filter(item => {
    return item < 5;
  }).subscribe(
  (value)=> {
    console.log(value);
  }
);

// 1
// 3
// 1

/* first */
Rx.Observable
  .from(myArray)
  .first()
  .subscribe(
    (value)=> {
      console.log(value);
    }
  );

// 1

/* skip */
console.log('skip')
Rx.Observable
  .from(myArray)
  .skip(5)
  .subscribe(
    (value)=> {
      console.log(value);
    }
  );

// 8
// 10
// 1
// 5

/* throttle */
let myButton = document.getElementById('myButton');

myObservable = Rx.Observable.fromEvent(myButton, 'click')
  .throttle(ev => Rx.Observable.interval(1000))
  .subscribe(ev => console.log(ev));
