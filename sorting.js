const fruits = ['banana', 'orange', 'apple', 'mango', 'grapes'];
fruits.sort();
console.log(fruits); // [ 'apple', 'banana', 'grapes', 'mango', 'orange' ]
fruits.reverse();
console.log(fruits); // [ 'orange', 'mango', 'grapes', 'banana', 'apple' ]

//The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.// [ 'orange', 'mango', 'grapes', 'banana', 'apple' ]

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // [ 'Dec', 'Feb', 'Jan', 'March' ]

const monthsSorted = months.toSorted();
console.log(monthsSorted); // [ 'Dec', 'Feb', 'Jan', 'March' ]

//sorting numbers
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b); //or points.sort(function(a, b){return a - b});
console.log(points); // [ 1, 5, 10, 25, 40, 100 ]

//reverse sorting numbers
points.sort((a, b) => b - a); //or points.sort(function(a, b){return b - a});
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]