/*
  Modules:
    - implicitly in strict mode.
    - es6 modules vs commonJS
    - named exports

  We know AMD or commonJS modules have replaced the module pattern (revelaing patterns)
  No JavaScript engine supports them natively yet.
  JSPM, Webpack, browserify let you do that.
*/

/* named exports */

// file a
export const value = 5;
export function square(n) {
  return n * n;
}
export class Person {

}
// file b
import {value, square, Person} from 'fileA';
//
// as an object
import * as obj from 'fileA';



/* exporting single value */
// file a
export default function hello () {}

// file b
import fn from 'filea';


