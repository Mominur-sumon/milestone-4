/*
You are given an object with various properties. Your task is to write a JavaScript function that counts the number of properties in the object and returns the count.

Write a function named countProperties that takes an object as an argument and returns the number of properties it contains.

*/
const object = { name: "John", age: 30, city: "New York" }


function countProperties(object) {
    return Object.keys(object).length;

}
console.log(countProperties(object)); // 3