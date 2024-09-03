
// task 1 : Access the golden rod color value in output
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

console.log("The color of golden rod is : ", colors['golden rod']);

// Task-2
// For this object below add a property named passenger capacity with value 5
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
console.log(car);
car['passenger capacity'] = 5;
console.log(car);

//task 3 : display the physics marks as output 
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks);

//task 4 : count the number of properties in the object

let student1 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

const keys = Object.keys(student1).length;
console.log(keys);

// task 5 : Loop though an object and print key value pairs their types 
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}

/*
Output 

key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean

*/

for (const key in myObject){
    console.log(`key: ${key} | type: ${typeof myObject[key]}`);
}

