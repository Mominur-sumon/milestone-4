/*
Write an arrow function where it will do the following:




* It will take an array where the array elements will be the name of people.

* Check if the length of each element is even.

* Push elements with even length to a new array and return the result.
*/

const friends = ['john', 'james', 'jane', 'Ratul'];
const checkEvenLength = (arrOfFriends) => {
    let evenLength = [];
    for (let i = 0; i < arrOfFriends.length; i++) {
        if (arrOfFriends[i].length % 2 === 0) {
            evenLength.push(arrOfFriends[i]);
        }
    }
    return evenLength;
}
console.log(checkEvenLength(friends)); // [ 'jane', 'Ratul' ]