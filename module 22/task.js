// Task-1: Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
console.log(celsiusToFahrenheit(100)); // 212
console.log(celsiusToFahrenheit(0)); // 32

// Task-2 : You are given an array of numbers. Count how many times the a number is repeated in the array.

numbers = [5, 6, 11, 12, 98, 5];

function findNumber(numbers, number) {
    let count = 0;
    for (const num of numbers) {
        if (num === number) {
            count++;
        }
    }
    return count;
}

console.log(findNumber(numbers, 5)); // 2

// using arrow function with filter method
function findNumber(numbers, number) {
    return numbers.filter(num => num === number).length;
}

console.log(findNumber(numbers, 5)); // 2

// using includes method
function findNumber(numbers, number) {
    return numbers.includes(number) ? numbers.filter(num => num === number).length : 0;
}

console.log(findNumber(numbers, 5)); // 2

// using indexOf method
function findNumber(numbers, number) {
    return numbers.indexOf(number) !== -1 ? numbers.filter(num => num === number).length : 0;
}
console.log(findNumber(numbers, 5)); // 2


// Task-3: Write a function to count the number of vowels in a string

const str = 'JavaScript is a programming language. It is used for web development.';
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels(str)); // 22

// using filter method
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}
console.log(countVowels(str)); // 22

// using match method
function countVowels(str) {
    return str.match(/[aeiou]/gi).length;
}
console.log(countVowels(str)); // 22

// using reduce method

function countVowels(str) {
    return str.split('').reduce((count, char) => 'aeiouAEIOU'.includes(char) ? count + 1 : count, 0);
}
console.log(countVowels(str)); // 22

// Simple way
function countVowels(str){
    let count = 0;
    for(const char of str){
        if('aeiouAEIOU'.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(countVowels(str)); // 22

// Task-4 : Write a function to find the longest word in a given string

const str1 = 'JavaScript is a programming language. It is used for web development.';
function longestWord(str){
    const words = str.split(' ');
    let longest = '';
    for(const word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}
console.log(longestWord(str1)); // 'development.'

const str2 = 'I am learning Programming to become a programmer';
console.log(longestWord(str2)); // 'Programming'

// Task-5 : Generate a random number between 10 to 20
function randomNumber(){
    return Math.floor(Math.random() * 11) + 10;
}
console.log(randomNumber()); // 10 to 20