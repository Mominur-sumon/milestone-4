/*Task 1
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array
*/
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
console.log(fruits[3]);
fruits[2] ="jambura";
console.log("final String is :" ,fruits.toString());

/*Task 2
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
*/
const tourist = ['Paris', 'London', 'New York'];
tourist.push('Istanbul');
tourist.push('Tokyo', 'Dubai');
tourist.pop();
console.log("The final array is :",tourist.toString());

/*Task 3
Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
*/

const books = ['Harry Potter', 'The Alchemist', 'The Da Vinci Code', 'The Hobbit', 'The Lord of the Rings', 'the complete javascript'];
if(books.includes('the complete javascript')){
    console.log("The book is present in the array");
}
else{
    console.log("The book is not present in the array");
}

/*Task 4
Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
*/
const arr = [1,2,3,4,5];
const str = "Hello";
const num = 100;
const bool = true;
console.log(Array.isArray(arr));
console.log(Array.isArray(str));
console.log(Array.isArray(num));
console.log(Array.isArray(bool));

/*Task 5
Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().
*/
const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);