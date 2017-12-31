/* =======================================================
  1. Creación de observables (Creation Operators)
 ======================================================= */
/*
ajax
bindCallback
bindNodeCallback
create
defer
empty
from
fromEvent
fromEventPattern
fromPromise
generate
interval
never
of
repeat
repeatWhen
range
throw
timer
*/

let myObservable;

/* Ajax */

// simple
myObservable = Rx.Observable.ajax('https://restcountries.eu/rest/v2/all');

myObservable.subscribe(
  (value)=> {
    console.log(value);
  }
);

// {originalEvent: Event, xhr: XMLHttpRequest, request: ...

// compleja
myObservable = Rx.Observable.ajax({
  url: 'https://httpbin.org/post',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-rxjs-is': 'Awesome!'
  },
  body: {
    hello: 'World!',
  }
});

/* Create */
myObservable = Rx.Observable.create((observer)=> {
  observer.next('foo');
});

myObservable.subscribe(
  (value)=> {
    console.log(value);
  }
);

// foo

/* from
Creates an Observable from an Array, an array-like object, a Promise, an iterable object, or an Observable-like object.
*/
let myArray = [1, 2, 3];

myObservable = Rx.Observable.from(myArray);

myObservable.subscribe(
  (value)=> {
    console.log(value);
  }
);

// 1
// 2
// 3

/* fromEvent
Creates an Observable that emits events of a specific type coming from the given event target. */
let myButton = document.getElementById('myButton');

myObservable = Rx.Observable.fromEvent(myButton, 'click');

myObservable.subscribe(
  (value)=> {
    console.log(value);
  }
);

// MouseEvent {isTrusted: true,...

/* fromPromise
Converts an ES2015 Promise or a Promises/A+ spec compliant Promise to an Observable. If the Promise resolves with a value, the output Observable emits that resolved value as a next, and then completes. If the Promise is rejected, then the output Observable emits the corresponding Error. */

myObservable = Rx.Observable.fromPromise(fetch('https://restcountries.eu/rest/v2/all'));

myObservable.subscribe(
  (value)=> {
    console.log(value);
  }
);

// Response {type: "cors", url: "https://restcountries.eu/rest/v2/all", ...

/* of
Creates an Observable that emits some values you specify as arguments, immediately one after the other, and then emits a complete notification.
*/

myObservable = Rx.Observable.of(1, 'foo', ['a', 'b']);

myObservable.subscribe(
  (value)=> {
    console.log(value);
  }
);

// 1
// foo
// ['a', 'b']