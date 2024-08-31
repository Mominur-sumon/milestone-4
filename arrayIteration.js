const numbers = [45, 4, 9, 16, 25];

let text = "";
numbers.forEach(myFunction);
function myFunction(value) {
  text += value + " ";
}
console.log(text , typeof text); // 45 4 9 16 25 string

/*The map() method creates a new array by performing a function on each array element.

The map() method does not execute the function for array elements without values.

The map() method does not change the original array. *.*/

const numbers2 = [45, 4, 9, 16, 25];
const numbers3 = numbers2.map(myFunction2);
function myFunction2(value) {
  return value * 2;
}
console.log(numbers3); // [ 90, 8, 18, 32, 50 ]

const numbers4 = numbers2.flatMap(x => x * 4);
console.log(numbers4); // [ 180, 16, 36, 64, 100 ]

filter = numbers2.filter(x => x > 10);
console.log(filter); // [ 45, 16, 25 ]

let sum = numbers.reduce(myFunction3, 100);
function myFunction3(total, value) {
  return total + value;
}
console.log(sum); //199 

let sum2 = numbers.reduceRight(myFunction3, 100);
console.log(sum2); //199

let every = numbers.every(myFunction4);
function myFunction4(value) {
  return value > 10;
}
console.log(every); // false

let some = numbers.some(myFunction4);
console.log(some); // true

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
const keys = fruits.keys();
for (x of keys) {
  console.log(x); // 0 1 2 3 4
}

const values = fruits.values();
for (x of values) {
  console.log(x); // apple banana grapes mango orange
}

//The entries() method returns an Array Iterator object with key/value pairs.
const entries = fruits.entries();
for (x of entries) {
  console.log(x); // [ 0, 'apple' ] [ 1, 'banana' ] [ 2, 'grapes' ] [ 3, 'mango' ] [ 4, 'orange' ]
}

const q1 = ["jan", "feb", "mar"];
const q2 = ["apr", "may", "jun"];
const q3 = ["jul", "aug", "sep"];
const q4 = ["oct", "nov", "dec"];

let year = [q1, q2, q3, q4];
console.log(year.flat()); // [ 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec' ]
year = [...q1, ...q2, ...q3, ...q4];
console.log(year); // [ 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec' ]