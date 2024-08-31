// Create a map

const fruits = new Map([
    ['apple', 500],
    ['banana', 300],
    ['mango', 400],
    ['orange', 200]
]);

console.log(fruits, typeof fruits); // Map { 'apple' => 500, 'banana' => 300, 'mango' => 400, 'orange' => 200 } 'object'

// Add a new key-value pair to the map
fruits.set('grapes', 600);
console.log(fruits); // Map { 'apple' => 500, 'banana' => 300, 'mango' => 400, 'orange' => 200, 'grapes' => 600 }

console.log(fruits.get('apple')); // 500

console.log(fruits instanceof Map); // true

console.log(fruits.size); // 5
fruits.delete('apple');
; // false
console.log(fruits.has('apple')); // false
console.log(fruits);

// In JavaScript, null is a primitive value. However, typeof returns "object".

// This is a well-known bug in JavaScript and has historical reasons.

let x = ~5;
console.log(x); // -6 (Bitwise NOT inverts the bits of its operand.)
x =  ~15 ;
console.log(x); // 16 always increase by 1 and sign is negative
x = ~-0;
console.log(x); // -1

// converting decimal to binary
let num = 15;
let binary = num.toString(2);
console.log(binary); // 1111

// converting binary to decimal
let binaryNum = '1111';
let decimal = parseInt(binaryNum, 2);
console.log(decimal); // 15