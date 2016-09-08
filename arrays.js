/*
 Arrays: new methods
*/

const arr = ['a', NaN];
console.log(arr.findIndex(elm => elm === 'a'));

console.log(arr.indexOf(NaN)); // -1
/*
As an aside, Number.isNaN() provides a safe way to detect NaN (because it doesn’t coerce non-numbers to numbers):
> isNaN('abc')
true
> Number.isNaN('abc')
false

*/
console.log(arr.findIndex(x => Number.isNaN(x))); // 1


/*
  `from` instead of `slice`
  In ES5, the former method was used to convert Array-like objects to Arrays. In ES6, you have Array.from():

  var arr1 = Array.prototype.slice.call(arguments); // ES5
  const arr2 = Array.from(arguments); // ES6
  If a value is iterable, you can also use the spread operator (...) to convert it to an Array:

  const arr1 = [...'abc'];
      // ['a', 'b', 'c']
  const arr2 = [...new Set(['b', 'b', 'a', 'b'])];
      // ['b', 'a']
*/

function sum() {
  const args = Array.from(arguments);
  const isArray = Array.isArray(args);
  console.log('is array?', isArray);
}
sum(1,2,3,4);


// filling an array with values
const nums = new Array(10).fill(5);
console.log(nums);
