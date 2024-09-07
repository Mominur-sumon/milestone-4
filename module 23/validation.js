function multiply(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please provide two numbers';
    }
    const result = num1 * num2;
    return result;

}
console.log(multiply(2, 3)); // Output: 6
console.log(multiply(2, 'test')); // Output: Please provide two numbers

function fullName(firstName, lastName) {
    if(typeof firstName !== 'string' || typeof lastName !== 'string') {
        return 'Please provide two strings';
    }
    const result = firstName + ' ' + lastName;
    return result;
}
console.log(fullName('John', 'Doe')); // Output: John Doe
console.log(fullName('John', 2)); // Output: Please provide two strings


function getPrice(product){
    if(typeof product !== 'object' || Array.isArray(product)) {
        return 'Please provide an object';
    }
    const price = product.price;
    if(price < 0){
        return 'Price is not valid';
    }
    return price;
}
const product = {
    name: 'shampoo',
    price: 200
};
console.log(getPrice(product)); // Output: 200
console.log(getPrice([10,20,30])); // Output: Please provide an object
console.log(typeof null); // Output: object