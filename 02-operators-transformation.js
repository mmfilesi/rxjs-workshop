/* =======================================================
  5.  Transformation Operators
 ======================================================= */

 /*
 buffer
 bufferCount
 bufferTime
 bufferToggle
 bufferWhen
 concatMap
 concatMapTo
 exhaustMap
 expand
 groupBy
 map
 mapTo
 mergeMap
 mergeMapTo
 mergeScan
 pairwise
 partition
 pluck
 scan
 switchMap
 switchMapTo
 window
 windowCount
 windowTime
 windowToggle
 windowWhen
 */


/* map
Like Array.prototype.map(), it passes each source value through a transformation function to get corresponding output values.
*/
let myArray = [1, 2, 3];
Rx.Observable
  .from(myArray)
  .map(value => 2 * value)
  .subscribe(value => console.log(value));

// 2
// 4
// 6

/* pluck
Like map, but meant only for picking one of the nested properties of every emitted object.
*/
let myObject = [{foo: 'a', bar: 'b'}, {foo: 'c', bar: 'd'}];
Rx.Observable
  .from(myObject)
  .pluck('foo')
  .subscribe(value => console.log(value));

// a
// c

/* scan
scan(accumulator: function, seed: any): Observable
Applies an accumulator function over the source Observable, and returns each intermediate result, with an optional seed value.
*/
Rx.Observable
  .from(myArray)
  .scan((acc, current) => acc + current, 10)
  .subscribe(value => console.log(value));

// 11
// 13
// 16

/* groupBy
A sequence of observable groups, each of which corresponds to a unique key value, containing all elements that share that same key value.
*/
myObject = [
  {foo: 'a', bar: 1},
  {foo: 'a', bar: 2},
  {foo: 'b', bar: 3},
  {foo: 'b', bar: 4},
  {foo: 'c', bar: 5}

];

Rx.Observable
  .from(myObject)
  .groupBy((item)=> item.foo)
  .subscribe(value => console.log(value));

// {_isScalar: false, key: "a" ...
// {_isScalar: false, key: "b" ...
// {_isScalar: false, key: "c" ...

/* switchMap
“Converts a higher-order Observable into a first-order Observable by subscribing to only the most recently emitted of those inner Observables. SwitchMap operator has outer observable and inner observable.
*/
const getCountry = Rx.Observable.ajax('https://restcountries.eu/rest/v2/name/eesti');

const finalHttp = getCountry.switchMap(sourceValue => {
  // estonia
  console.log(sourceValue);
  return Rx.Observable.ajax('https://restcountries.eu/rest/v2/name/spain');
});

finalHttp.subscribe(
  (value)=> {
    // spain
    console.log(value);
  },
  (error) => console.error(error),
  ()=> console.log('Complete')
);

/* buffer
The buffer method periodically gathers items emitted by a source Observable into buffers, and emits these buffers as its own emissions. Collects values from the past as an array, and emits that array only when another Observable emits.
*/

let clicks = Rx.Observable.fromEvent(document, 'click');
let interval = Rx.Observable.interval(1000);
let buffered = interval.buffer(clicks);
buffered.subscribe(x => console.log(x));