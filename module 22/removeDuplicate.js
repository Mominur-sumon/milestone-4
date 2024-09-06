// remove duplicare element from an array

function removeDuplicate(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


function removeDuplicate1(arr) {
    let newArr = [];
    for (const element of arr) {
        if (!newArr.includes(element)) {
            newArr.push(element);
        }
    }
    return newArr;
}



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
const names = ["monir", "shakil", "monir", "shakil", "shakil"];
console.log(removeDuplicate(arr)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(removeDuplicate(names)); // [ 'monir', 'shakil' ]

console.log(removeDuplicate1(arr)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(removeDuplicate1(names)); // [ 'monir', 'shakil' ]