const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
let position = fruits.indexOf('mango')  +1 ;
console.log(position); // index 3 but position 4

lastPosition = fruits.lastIndexOf('banana') + 1;
console.log(lastPosition); // index 1 but position 2

console.log(fruits.includes('banana')); // true
console.log(fruits.includes('lemon')); // false

const numbers = [4, 9, 16, 25, 29,500, 36,20, 49, 64, 81, 100, 38,31];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first); // 25

first = numbers.findIndex(myFunction);
console.log(first); // 3

let last = numbers.findLast(x => x>40);
console.log(last);