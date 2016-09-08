/*
  Destructuring:

*/
'use strict';

// simple destructuring (arrays)
const [first, second] = [1,2];
console.log(first, second);

// example 1
var dateStr = '2016-05-25';

var match = dateStr.match(/^(\d\d\d\d)-(\d\d)-(\d\d)$/);
var yearValue = match[1];
var monthValue = match[2];
var dayValue = match[3];
console.log(yearValue, monthValue, dayValue);

// read using destructuring (multiple return values with arrays)
const [input, year, month, day] = dateStr.match(/^(\d\d\d\d)-(\d\d)-(\d\d)$/);
// const [, year, month, day] = dateStr.match(/^(\d\d\d\d)-(\d\d)-(\d\d)$/);
console.log(input, year, month, day);


// destructuring with objects
const user = {
  name: 'AJ',
  id: 1
};
const {name, id} = user;
console.log(name, id);
