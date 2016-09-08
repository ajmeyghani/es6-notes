/*
 * String methods
*/

const str = 'Some random string';

console.log(str.startsWith('S'));
console.log(str.endsWith('g'));
console.log(str.includes('rand'));

// repeat
var rep = new Array(3+1).join('q') // ES5
const sharps = '#'.repeat(3) // ES6

console.log(rep, sharps);
