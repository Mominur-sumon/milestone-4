const numbers = [12, 22, 33, 44, 55];
// for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// for of loop
console.log("============");
for(const num of numbers){
    console.log(num);
}

const fruits = ['apple', 'orange', 'pear', 'grape', 'banana'];
console.log("============");
for(const fruit of fruits ){
    console.log(fruit);
}

// for of loop
/* for(const singleElement of arrayName){
    console.log(singleElement);
} */