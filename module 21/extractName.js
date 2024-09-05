/*
You are given an array of objects, where each object represents a person with properties such as name and age.

Your task is to write a JavaScript function that extracts the names of all the individuals from the array and returns them as an array of strings.

Write a function named extractNames that takes an array of objects as input and returns an array containing the names of all the individuals from the array.
    
*/
const people = [{
    name:"abul",
    age:20,
},{
    name:"kabul",
    age:25,
},{
    name:"babul",
    age:23,
},{
    name:"bulbul",
    age:21,
}];

function extractNames(array){
   let names = [];
    for(let i = 0; i < array.length; i++){
         names.push(array[i].name);
    
    }
    return names;
}
console.log(extractNames(people)); 