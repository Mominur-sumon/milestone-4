// Use back-ticks ` ` for template strings rather tan single quotes ' ' or double quotes " ".
let text = `Hello World`;
console.log(text); // Hello World

//template string allows us to use single and double quotes without escaping them.
let text1 = `he's often called "Johnny"`;
console.log(text1); // he's often called "Johnny"

// multiline strings
let text2 = `The quick brown fox
jumps over the lazy dog`;
console.log(text2); // The quick brown fox 
                    // jumps over the lazy dog

//string interpolation.
let firstName = 'John';
let lastName = 'Doe';
let age = 30;
let message = `Hello, my name is ${firstName} ${lastName}. I am ${age} years old.`;
console.log(message); // Hello, my name is John Doe. I am 30 years old.   

//expression interpolation
let a = 10;
let b = 20;
let sum = `The sum of ${a} and ${b} is ${a + b}`;
console.log(sum); // The sum of 10 and 20 is 30