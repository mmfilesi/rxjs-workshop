/* =======================================================
  3. Booleans
 ======================================================= */
/*
defaultIfEmpty
every
find
findIndex
isEmpty
*/

/* defaultIfEmpty */
let myArray = [];
Rx.Observable
  .from(myArray)
  .defaultIfEmpty('no data oO')
  .subscribe(value => console.log(value));

// no data oO

/* isEmpty */
Rx.Observable
  .from(myArray)
  .isEmpty()
  .subscribe(check => console.log(check));
// true

/* every */
myArray = [1, 2, 3];
Rx.Observable
  .from(myArray)
  .every(x => x > 5)
  .subscribe(condition => console.log(condition));

// false

/* find */
myObject = [{key: 1, name: 'foo'}, {key: 2, name: 'bar'}];
Rx.Observable
  .from(myObject)
  .find(item => item.key === 2)
  .subscribe(value => console.log(value.name));

// foo

/* findIndex.
An Observable of the index of the first item that matches the condition.
*/
myObject = [{key: 1, name: 'foo'}, {key: 2, name: 'foo'}];
Rx.Observable
  .from(myObject)
  .findIndex(item => item.key === 2)
  .subscribe(index => console.log(index));

  // 1


