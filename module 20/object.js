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