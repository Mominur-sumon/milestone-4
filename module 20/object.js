const age = 20;
const name = 'John';
const isStudent = true;
const person = { name, age, isStudent};
console.log(person); // { name: 'John', age: 20, isStudent: false }


// Object is a non Primitive data type 
const bottle = {
    brand: 'Mum',
    price: 25,
    color: 'Red',
    isAvailable: true,
}


const subject = {
    name: 'Mathematics',
    code: 101,
    credit: 3,
    isCompulsory: true,
    teacher: {
        name: 'John Doe', 
        age: 30,
        isStudent: false,
        subject: ['Mathematics', 'English', 'Science']
    }
}
console.log(subject); 
console.log("======");
console.log(subject.teacher);

const person2 = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

let text = Object.entries(person2);
console.log(text);

const fruits = {
    bananas : 40 ,
    oranges : 50 ,
    apples : 50
} ;

text = '';

for(let [fruit, value] of Object.entries(fruits)){
    text += fruit + ': ' + value+ '\n' ;
}
console.log(text);

const myMap = new Map(Object.entries(fruits));
console.log(myMap);

const fruits2 = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
];

const myObj1 = Object.fromEntries(fruits2) ; // create an oject from a list 
console.log(myObj1);

console.log(Object.values(fruits)); // return the valus of the object 
console.log(Object.keys(fruits)); // return the keys of the object

// group by method 

const fruits3 = [
    {name : "apples", quantity : 300},
    {name : "bananas", quantity: 500},
    {name : 'oranges', quantity: 200},
    {name :'kiwi', quantity: 150}
];

//callback function to group elements 
function myCallBack ({quantity}){
    return quantity > 200 ? "ok": "low" ;
}

//group by quantity
const result = Object.groupBy (fruits3, myCallBack) ;
console.log(result);