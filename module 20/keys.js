const computer = {
    brand : "Dell",
    price : 68500,
    color : "Silver",
    processor : "Intel Core i5",
    SSD : "256GB",
    HDD : "1TB",
    display : {
        size : 15.6,
        resolution : "Full HD",
        type : "LED"
    }
}

// Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop.
const keys = Object.keys(computer);
console.log(keys);

// Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
const values = Object.values(computer);
console.log(values);

const college = {
    name : "Govt Alimuddin College",
    class : ['11', '12'],
    subject : ['Physics', 'Chemistry', 'Mathematics'],
    unique : {
        teacher : "John Doe",
        student : "Mominur"
    }
}
console.log(college.unique.student); // Mominur
console.log(college['unique']['teacher']); // John Doe

// to delete a property from an object
delete college.unique; // this will delete the unique property from the college object
console.log(college); 