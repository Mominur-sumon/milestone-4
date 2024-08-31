/*You can create a JavaScript Set by:

Passing an array to new Set()
Create an empty set and use add() to add values 
*/
const letters = new Set(['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd']);
console.log(letters); // Set { 'a', 'b', 'c', 'd' }

const numbers = new Set();
numbers.add(5);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(1);
numbers.add(2);
numbers.add(3);
console.log(numbers); // Set { 5, 2, 3, 4, 1 }

