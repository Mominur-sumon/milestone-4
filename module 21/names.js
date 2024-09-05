/*
Write an arrow function where it will take an array of objects as a function parameter. Each object will have the properties name and age. You will have to only return the name property of each object in an array as shown below:
*/
const people = [
    { name: 'John', age: 22 },
    { name: 'Jane', age: 25 },
    { name: 'James', age: 30 },
    { name: 'Ratul', age: 27 }
];
function getNames(arrOfPeople) {
    let names = [];
    for (let i = 0; i < arrOfPeople.length; i++) {
        names.push(arrOfPeople[i].name);
    }
    return names;
}
console.log(getNames(people)); // [ 'John', 'Jane', 'James', 'Ratul' ]