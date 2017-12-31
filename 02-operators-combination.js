/* =======================================================
  7. Combination Operators
 ======================================================= */

/*
 combineAll
 combineLatest
 concat
 concatAll
 exhaust
 forkJoin
 merge
 mergeAll
 race
 startWith
 switch
 withLatestFrom
 zip
 zipAll
*/


/* combineLatest */
let myArray = [1, 3, 5];
let myObservable = Rx.Observable
  .from(myArray);

let mySecondArray = [2, 4];
let mySecondObservable = Rx.Observable
  .from(mySecondArray);

Rx.Observable
  .combineLatest(myObservable, mySecondArray)
  .subscribe(value => console.log(value));

// [5, 2]
// [5, 4]

Rx.Observable
  .combineLatest(myObservable, mySecondObservable, (f, s)=> f * s)
  .subscribe(value => console.log(value));

// 10
// 20

/* concat */
myObservable
  .concat(mySecondObservable)
  .subscribe(value => console.log(value));
// 1
// 3
// 5
// 2
// 4

/* forkJoin
Execute observables in parallel. If we want to compare this to promises it would be similar to $q.all() from Angular 1.x
*/

let first = Rx.Observable.of({source:1,value:'a'});
let second =Rx.Observable.of({source:2,value:'b'});
Rx.Observable.forkJoin(first,second)
.subscribe(value => console.log(value));

//  {source: 1, value: "a"}
//  {source: 2, value: "b"}

/* startWith
Prepends a sequence of values to an observable sequence with an optional scheduler and an argument list of values to prepend.
*/

myObservable = Rx.Observable
  .of('beautiful day')
  .startWith('its a')
  .subscribe(value => console.log(value));

// its a
// beautiful day