/*
  MAP
*/

// es5
// - the prototype of the object to be null
// - no key is __proto__

// es6: built-in map data structure
// keys can be anything, including objects, weakmaps, etc
const myMap = new Map();
myMap.set('name', 'tom');
myMap.set('id', 5);
myMap.set('user', {
  id: 1, name: 'Jay'
});
myMap.set({x: 5}, 'Random');
console.log(myMap);

// counter function
const map = new Map();
function countWords(word) {
  const count = map.get(word) || 0;
  map.set(word, count + 1);
}
countWords('hello');
countWords('hello');

console.log(map);


