const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
console.log(fruits.length); // 5

let arrString = fruits.toString();
console.log(arrString); // apple,banana,grapes,mango,orange

console.log(fruits.at(2)); // grapes
console.log(fruits.at(10)); // undefined
console.log(fruits[3]); // mango

console.log(fruits.concat(['watermelon', 'pineapple'])); // [ 'apple', 'banana', 'grapes', 'mango', 'orange', 'watermelon', 'pineapple' ]
fruits.push('watermelon', 'pineapple');
fruits.join(" and "); // apple and banana and grapes and mango and orange and watermelon and pineapple
console.log(fruits.join(" and ")); // apple and banana and grapes and mango and orange and watermelon and pineapple
fruits.pop();
console.log(fruits); // [ 'apple', 'banana', 'grapes', 'mango', 'orange', 'watermelon' ]
fruits.shift(); // remove the first element
console.log(fruits); // [ 'banana', 'grapes', 'mango', 'orange', 'watermelon' ]
fruits.unshift('apple'); // add the element to the beginning of the array
console.log(fruits); // [ 'apple', 'banana', 'grapes', 'mango', 'orange', 'watermelon' ]

/*Warning !
Using delete() leaves undefined holes in the array.

Use pop() or shift() instead.*/

const fruits2 = ['apple', 'banana', 'grapes', 'mango', 'orange'];
fruits2.copyWithin(2,0); // copy the first element to the 3rd position

fruits.splice(2, 0, 'lemon', 'kiwi'); // add lemon and kiwi to the 3rd position
console.log(fruits); // [ 'apple', 'banana', 'lemon', 'kiwi', 'grapes', 'mango', 'orange', 'watermelon' ]
 
// Array Flat
const arr = [0, 1, 2, [3, 4]];
const arr2 = arr.flat();
console.log(arr2); // [ 0, 1, 2, 3, 4 ]
const newArr = arr2.flatMap(x => [x+2, x * 2]);
console.log(newArr); // [ 0, 0, 1, 2, 2, 4, 3, 6, 4, 8 ]");


// The splice() method adds new items to an array.
// The slice() method slices out a piece of an array.
fruits3 = ['apple', 'banana', 'grapes', 'mango', 'orange'];
let citrus = fruits3.slice(1, 3); // slice from index 1 to 3 
console.log(citrus, typeof citrus); // [ 'banana', 'grapes' ] object

let removed = fruits3.splice(2, 2, 'lemon', 'kiwi'); // remove 2 elements from index 2 and add lemon and kiwi
console.log(removed); // [ 'grapes', 'mango' ]
console.log(fruits3); // [ 'apple', 'banana', 'lemon', 'kiwi', 'orange' ]

