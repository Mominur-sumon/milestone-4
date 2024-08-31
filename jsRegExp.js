let text = "Hello, welcome to the world of JavaScript.";
let n = text.search(/welcome/);
console.log(n); // 7

n = text.search(/javascript/i);
console.log(n); // 31
// i flag is used to perform case-insensitive matching.
//g flag is used to perform a global match (find all matches rather than stopping after the first match).
//m flag is used to perform multiline matching.


let result = text.replace(/javascript/i, "Python");
console.log(result); // Hello, welcome to the world of Python.