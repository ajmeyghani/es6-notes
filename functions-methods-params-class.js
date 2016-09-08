/*
  Function Parameters
   - default params
   - names parameters
   - ...args (rest params and variadic functions)
   - no more arguments (but you can do Array.from(arguments))
   - apply to spread
*/

/* eg1: default params */
function fn(a, b) {
  a = a || 0;
  b = b || 2;
  return {
    a: a,
    b: b
  };
}

console.log(fn());

// using default params
function g(a = 5, b = 10) {
  return {
    a, b
  };
}
console.log(g());

/* eg2: named args */

function h(opt) {
  var a = opt.a || 88;
  var b = opt.b || 99;
  return {
    a: a,
    b: b
  };
}
console.log(h({a: 91, b: 99}));

// using destructuring in the args
function hx({a, b} = {}) {
  return {
    a, b
  };
}
console.log(hx({a: 55, b: 67}));

// destructuring and default values
function hy({a = 44, b = 90} = {}) {
  return {a, b};
}
console.log(hy());

/* rest params */
// arguments object -> ...args
function sum(...nums) {
  console.log(nums); // this is an actual array.
  return nums.reduce((res, n) => res + n);
}
console.log(sum(1,2,3));

// last param is variadic
function sum2(start = 0, ...nums) {
  return nums.reduce((res, n) => (res + n), start);
}
console.log(sum2(10, 1,2));

/* eg 3: from apply to spread */
// you can turn arrays into arguments:
var max = Math.max.apply(null, [1,6,10]);
console.log('max value is: ', max);

// instead spread them:
const max2 = Math.max(...[5,100, 0]);
console.log('max2 is: ', max2);

// pushing:
var arr1 = [1,2,3];
var arr2 = [4,5,6];
arr1.push.apply(arr1, arr2);
console.log(arr1);
// spread push
const arrX = [10, 11, 12];
const arrY = [13, 14, 15];
arrX.push(...arrY);
console.log(arrX);

// concat
var arrH = ['a', 'b'];
var arrI = ['c', 'd'];
var letters = arrH.concat(arrI);
console.log(letters);

// concat with spread:
const l1 = ['x', 'y'];
const l2 = ['z', 'a'];
const lastLetters = [...l1, ...l2];
console.log(lastLetters);

/*
 Functions in objets (methods)
  - you can just use the () to denote a function
    in the object (method of the object.)
*/

var user = {
  login: function login() {
    console.log('loging in .... ');
  }
};
user.login();

const admin = {
  login() {
    console.log('admin loging in');
  }
};
admin.login();

/*
 Class, sugar for constructor functions
*/

// es5
function Person(name) {
  this.name = name;
}
Person.prototype.speak = function() {
  console.log('speaking');
};
var p1 = new Person();
p1.speak();

function Employee(name) {
  Person.call(this, name);
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

//es6
class Vehicle {
  constructor(model) {
    this.model = model;
  }
  move() {
    console.log('vehicle is moving');
  }
}
const v1 = new Vehicle();
v1.move();


class Car extends Vehicle {
  constructor(model) {
    super(model);
  }
  move() {
    super.move(); // you can use the super keyword.
    console.log('car moving');
  }
}

const c1 = new Car();
c1.move();




















