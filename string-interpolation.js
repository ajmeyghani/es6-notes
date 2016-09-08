/*
  Template literals:
    - String interpolation using template literals.
    - multi-line strings
*/

// interpolation
function printCoord(x, y) {
  console.log(`(${x}, ${y})`);
}

// multi-line strings
var html = '<h1>hello</h1>' + 
           '<h2>world</h2>';
// instead use template literal:
var html5 = `<h1>hello</h1>
<h2>world</h2>`;
console.log(html);
console.log(html5);


