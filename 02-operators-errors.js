/* =======================================================
  6. Error Handling Operators
 ======================================================= */

 /*
catch
retry
retryWhen
 */


/* catch
handle errors in an observable sequences.
*/
Rx.Observable
  .throw('Houston, Houston...')
  .catch(val => Rx.Observable.of(`${val} we have a problem`))
  .subscribe(value => console.log(value));

// Houston, Houston... we have a problem
