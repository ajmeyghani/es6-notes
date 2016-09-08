/*
  for of:
    - concise and you can break from the loop.
  */
  console.log('basic for loop:');
  const letters = ['a','b','c'];
  for(let i = 0; i < letters.length; i++) {
    console.log(letters[i]);
  }
  console.log('for each');
  letters.forEach(n => console.log(n));

  console.log('for of');
  for (elm of letters) {
    console.log(elm);
  }

  console.log('both index and elm');
  for (const [index, elem] of letters.entries()) {
    console.log(index, elm);
  }
