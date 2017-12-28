/* =======================================================
  1. Creación de observables
 ======================================================= */

/* Creando un observable con create() */
let myObservable = Rx.Observable.create( (observer)=> {
  observer.next('foo');
});

let myObserver = myObservable.subscribe(
  (msg)=> {
    console.log(`Observable resuelto ${msg}`);
  }
);

// Observable resuelto foo

/* Creando un observable mediante operadores */
let otherObservable = Rx.Observable
.of('bar')
.timeout(200);

let otherObserver = otherObservable.subscribe(
  (msg)=> {
    console.log(`Observable resuelto ${msg}`);
  }
);

// Observable resuelto foo

/* =======================================================
  2. next, error, complete
 ======================================================= */

 function foo() {
   return 'foo';
   /* Nunca se llega a este segundo return; la función muere en el primero */
   return 'bar';
 }

 function* demoGenerator() {
   yield 1;
   yield 2;
 }

 let myDemoGenerator = demoGenerator();

 console.log(myDemoGenerator.next().value); // 1
 console.log(myDemoGenerator.next().value); // 2

 let observableLifecycle = Rx.Observable.create(
   (observer)=> {
     try {
        observer.next(1);
        observer.next(2);
        /* provocamos un error */
        zaaas
      } catch(error) {
        observer.error(error);
      }
      observer.complete();
    }
);

/* Tres funciones: una para el next; otra para los errores; y una tercera para el complete */
let myObserverLifecycle = observableLifecycle.subscribe(
  (msg)=> {
    console.log(`Observable recibido: ${msg}`);
  },
  (error)=> {
    console.log(`Algo ha salido mal: ${error}`);
  },
  (msg)=> {
    console.log(`Observable terminado`);
  }
);

// Observable recibido: 1
// first.js:66 Observable recibido: 2
// first.js:72 Observable terminado