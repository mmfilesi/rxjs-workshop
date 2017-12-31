/* =======================================================
  4. Mathematical and Aggregate Operators
 ======================================================= */
/*
count
max
min
reduce
*/

/* count
count transforms an Observable that emits values into an Observable that emits a single value that represents the number of values emitted by the source Observable
*/
let myArray = [1, 2, 3, 9];
Rx.Observable
  .from(myArray)
  .count(item => item > 5)
  .subscribe(count => console.log(count));

// 1

/* max */
myArray = [1, 2, 3, 9];
Rx.Observable
  .from(myArray)
  .max()
  .subscribe(maxValue => console.log(maxValue));

// 9

/* min */
myObject = [{value: 1, name: 'foo'}, {value: 2, name: 'bar'}];
Rx.Observable
  .from(myObject)
  .min((a, b) => a.value < b.value ? -1 : 1)
  .subscribe(minValue => console.log(minValue.name));

// foo

/* reduce */
myArray = [1, 2, 3, 9];
Rx.Observable
  .from(myArray)
  .reduce((prev, next)=> prev + next)
  .subscribe(total => console.log(total));

// 15