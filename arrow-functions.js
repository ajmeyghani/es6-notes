/*
  From function expressions to arrow functions
   - When used as the handler for a callback, they
   refer to the `this`in the lexical scope.
   - very useful for short callbacks that only return results of expressions.
*/
'use strict';
function Ui() {
  var _this = this;
  var button = document.getElementById('#button');
  button.addEventListener('click', function() {
    _this.countClick();
  });
}

Ui.prototype.count = 0;

Ui.prototype.countClick = function() {
  this.count += 1;
};

// instead, you can use an arrow function
// to have access to the lexical this.
function Uix() {
  var button = document.getElementById('#button');
  button.addEventListener('click', () => {
    this.countClick();
  });
}

Uix.prototype.count = 0;

Uix.prototype.countClick = function() {
  this.count += 1;
};


/* callback function returning the result of an expression */
// using a function
var nums = [1,2,3];
var numsPlusOne = nums.map(function(n) {
  return n + 1;
});
console.log(numsPlusOne);
// using arrow functions
let myNums = [10, 20, 30];
let myNumsPlusFive = myNums.map(n => n + 5);
console.log(myNumsPlusFive);


