/*
Structure of the conditional statement:
if (condition) {
    // code block
} else if (condition) {
    // code block
} else {
    // code block
}
*/

// Example 1
var a = 10;
var b = 20;
if (a < b) {
    console.log('a is smaller than b');
} else {
    console.log('a is bigger than b');
}

// Example 2
var weight = 50;

if (weight < 50) {
    console.log('Underweight');
}
else {
    console.log('Normal weight');
}

// Multiple conditions
var age = 18;
if (age < 18) {
    console.log('Minor');
} else if (age >= 18 && age < 60) {
    console.log('Adult');
} else {
    console.log('Senior');
}

const salary = 25000;
const isBCS = true;

if (salary > 30000) {
    console.log('You are eligible for a loan');
} else if (salary >= 25000 && isBCS) {
    console.log('You are eligible for a loan');
} else {
    console.log('You are not eligible for a loan');
}

if(salary > 30000 || (salary >= 25000 && isBCS)) {
    console.log('You are eligible for a loan');
} else {
    console.log('You are not eligible for a loan');
}

if(salary > 30000 && isBCS) {
    console.log('You are eligible for a loan');
} else {
    console.log('You are not eligible for a loan');
}

// Complex conditions
var hasCar = true;
if( (salary > 25000 && hasCar) || isBCS) {
    console.log('You are eligible for a loan');
} else {
    console.log('You are not eligible for a loan');
}