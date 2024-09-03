/*
* Looping techniques
* for loop
* while loop
* do while loop 
* for in loop (object looping)
* for of loop (array looping)

*/

const friends = [
    'John',
    'Jane',
    'Jack',
    'Jill'
];
// using for of loop
for (const friend of friends){
    console.log(friend);
}
console.log("======");

// using normal loop 

const len = friends.length;
for(let i = 0; i < len; i++){
    console.log(friends[i]);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// using for of loop
const reversedNumbers = [];
const len1 = numbers.length;
for(let i = len1 - 1; i >= 0; i--){
    reversedNumbers.push(numbers[i]);
}
console.log(reversedNumbers);

//using  reverse method
// console.log(numbers.reverse()); // this methid change the original array
// console.log(numbers);

// using for of loop
const reversedNumbers2 = [];
for(const number of numbers){
    reversedNumbers2.unshift(number);
}
console.log(reversedNumbers2);

const person =  [
    'John Doe',
    'sakib',
    'Rahim',
    'Karim'
];
console.log(person);
const sorted = person.sort();
console.log(sorted);

const numbers2 = [10, 12, 31, 3, 5, 7, 8, 9,54, 8];
const sorted2 = [...numbers2].sort((a, b) => a - b); // this method does not change the original array and ascending order
const sorted3 = [...numbers2].sort((a, b) => b - a); // this method does not change the original array and descending order
console.log(sorted2);
console.log(sorted3);