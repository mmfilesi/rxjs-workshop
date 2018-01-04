/* =======================================================
  6. Utility Operators
 ======================================================= */
/*
do
delay
delayWhen
dematerialize
finally
let
materialize
observeOn
subscribeOn
timeInterval
timestamp
timeout
timeoutWith
toArray
toPromise
*/

/* delay
delay argument is a Number, this operator time shifts the source Observable by that amount of time expressed in milliseconds. The relative time intervals between the values are preserved.
*/
let myArray = [1, 2, 3, 9];
Rx.Observable
  .from(myArray)
  .delay(1000)
  .subscribe(value => console.log(value));

/* do */
Rx.Observable
  .from(myArray)
  .do(value => console.log(`do ${value}`))
  .subscribe(value => console.log(value));

/*
do 1
1
do 2
2
do 3
3
do 9
9
*/

  /* materialize
materialize returns an Observable that emits a next notification for each next, error, or complete emission of the source Observable.
*/

Rx.Observable
  .from(myArray)
  .materialize()
  .subscribe(value => console.log(value));

// {kind: "N", value: 1, error: undefined, hasValue: true}
//  {kind: "N", value: 2, error: undefined, hasValue: true}
// ..

/* timeout
mirror the source Observable, but issue an error notification if a particular period of time elapses without any emitted items
*/
Rx.Observable
  .of('foo')
  .delay(200)
  .timeout(100)
  .subscribe(
    value => console.log(value),
    error => console.log(error)
  );

// {name: "TimeoutError", stack: "TimeoutError: Timeout has occurred

/*
timestamp for each value in an observable sequence.
*/
Rx.Observable
  .from(myArray)
  .timestamp()
  .subscribe(value => console.log(value));

// {value: 1, timestamp: 1514551928846}
// {value: 2, timestamp: 1514551928846}

/* toArray */
Rx.Observable
  .of(1, 2, 3)
  .toArray()
  .subscribe(arr => console.log(arr));

// [1, 2, 3]

/* toPromise */
let myPromise = Rx.Observable
  .of('bar')
  .toPromise();

myPromise.then((value)=> console.log(value));

// bar