
//Task 1: write a javascript code to reverse the array colors without using the reverse method metho

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reversed = [];
const len = colors.length;

for (const color of colors) {
    reversed.unshift(color);
}
console.log(reversed);

// Task 2 : Write a JavaScript code to get the even numbers from an array using any looping technique.
const numbers = [12, 98, 5, 41, 23, 78, 46];

const evenNumbers = [];
for (const number of numbers) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
}

console.log(evenNumbers);

// Task 3 : Use a for...of loop to concatenate all the elements of an array into a single string.
var numbers2 = ['Tom', 'Tim', 'Tin', 'Tik'];
let output = "";
for (const name of numbers2) {
    output += name;
}
console.log(output);

// Task 4 : Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
const statement = 'I am a hard working person';
const words = statement.split(' ');
const result = [];
for (const word of words) {
    result.unshift(word);
}
str = "";
for(const word of result){
    str = str + " "+ word ;
}
console.log(str.trim(' '));



