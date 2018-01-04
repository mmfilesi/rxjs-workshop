/* =======================================================
  Subjects
 ======================================================= */

/*
Subject is both an Observable and Observer
An RxJS Subject is a special type of Observable that allows values to be multicasted to many Observers. While plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subjects are multicast.
https://netbasal.com/rxjs-subjects-for-human-beings-7807818d4e4d
*/

/*
let myObservable = Rx.Observable.create( (observer)=> {
  let count = 0;
  let timestamp = Date.now();

  observer.next(count++ + ' ::timestamp:: ' + timestamp);
  observer.next(count++ + ' ::timestamp:: ' + timestamp);
});

myObservable.subscribe( msg=> console.log(`Primer observer ${msg}`) );

myObservable.subscribe( msg=> console.log(`Segundo observer ${msg}`) );
  */


/* Cada vez que llamamos al observable se reinicia la cuenta
Primer observer 0 ::timestamp:: 1514739846101
Primer observer 1 ::timestamp:: 1514739846101
Segundo observer 0 ::timestamp:: 1514739846102
Segundo observer 1 ::timestamp:: 1514739846102
*/

/*
let myObservable = Rx.Observable.create( (observer)=> {
  let count = 1;
  observer.next(count++);
  observer.next(count++);
});
*/

// let myObservable = Rx.Observable.from([1, 2, 3]);
/* */
let myObservable = Rx.Observable.create( (observer)=> {
  let count = 0;
  let timestamp = Date.now();

  observer.next(count++ + ' ::timestamp:: ' + timestamp);
  observer.next(count++ + ' ::timestamp:: ' + timestamp);
});

let mySubject = new Rx.Subject();

mySubject.subscribe( msg=> console.log(`Primer observer ${msg}`) );
mySubject.subscribe( msg=> console.log(`Segundo observer ${msg}`) );

myObservable.subscribe(mySubject);


/* Ahora se comparte el observable
Primer observer 0 ::timestamp:: 1514739943344
Segundo observer 0 ::timestamp:: 1514739943344
Primer observer 1 ::timestamp:: 1514739943344
Segundo observer 1 ::timestamp:: 1514739943344
*/

/* Multicasting Operators

cache
multicast
publish
publishBehavior
publishLast
publishReplay
share
*/