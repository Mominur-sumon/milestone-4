const mobile = {
    brand : "Samsung",
    price : 25000,
    color : "Black",
    processor : "Exynos 9611",
    RAM : "6GB",
    storage : "128GB",
    display : {
        size : 6.4,
        resolution : "Full HD",
        type : "Super AMOLED"
    }
}

/// Looping through an object

// for of : Array
// for in : Object

for (const prop in mobile) {
    console.log(prop,":", mobile[prop]); // this will give us the key name of the object
}

const pen = {
    brand : "Reno",
    price : 25,
    color : "Black",
    type : "Gel",
    ink : "Blue",
    length : 5.5
}
let str = "Mississippi";
console.log(str.indexOf("i", 3));

// different way to create object
const obj1 = new Object();
const obj2 = Object.create({

}) ;

