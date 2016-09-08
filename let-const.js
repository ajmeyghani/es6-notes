/*
  - `let`: defines block scoped variables
    - let is reserved words in strict mode, but not in the other mode. For example in non-strict mode you can do `var let = 5;`.
    - `var let = 5`: in ES6 strict mode throws exception but not in ES6 non-strict mode
  - let never creates properties of the global object, not even when used in global scope.
  - from var to let/const:
    - not allowed in non-strict mode
    - var is function scoped:
    - const similar to let, but its value cannot change
    - both are scoped to the inner most block
    - throw more error: eg accessing value before defined, etc
    - similar to mainstream languages
    - you cannot simply replace var with let when refactoring existing code
    - rule of thumb:
      - use const for everything unless their values need to change.
      - avoid var.
    - no need for IIFE, you can simply use blocks
*/
'use strict';
// `var` is function scoped:
var x = 3;
function func(randomize) {
  if (randomize) {
    var x = Math.random(); // (A) scope: whole function
    return x;
  }
  return x; // accesses the x from line A
}
var r1 = func(false); // undefined
console.log(r1);


// rewrite
var xy = 3;
function func2(randomize) {
  var xy;
  if (randomize) {
    xy = Math.random();
    return xy;
  }
  return xy;
}
var r2 = func2(); // undefined
console.log(r2);

// if you replace var with let, you get a different behavior
let w = 3;
function func3(randomize) {
  if (randomize) {
    let w = Math.random();
    return w;
  }
  return w;
}
let r3 = func3(false);
console.log(r3);

// avoid IIFE
(function() {
  var p = 2;
}());
console.log(p); // ReferenceError: p is not defined

// use a code block with let/const
{
  let p = 2;
  const q = 3;
}
console.log(p,q); // ReferenceError














