// task 1: Write a function that takes four numbers as arguments and returns the multiplication of those numbers.
function multiplication(a,b,c,d){
    return a*b*c*d;
}
console.log(multiplication(2,3,4,5)); // 120


// Task 2 : Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function oddEven(num){
    if(num % 2 === 0){
        return num / 2;
    }else{
        return num * 2;
    }
}

console.log(oddEven(5)); // 10
console.log(oddEven(6)); // 3

// Task 3 : Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(arr,size){
    let sum = 0;
    for(let i = 0 ; i < size ; i++){
        sum += arr[i];
    }
    return sum / size;
}
console.log(make_avg([1,2,3,4,5],5)); // 3
console.log(make_avg([10,20,30,40,50],5)); // 30

// Task 4 : Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.


function count_zero(binary_num){
    let count = 0;
    for(const bit of binary_num){
        if(bit == 0){
            count++;
        }
    }
    return count;
}
const Binary_num = '11000110001';
console.log(count_zero(Binary_num)); // 6

// Task 5 : Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(num){
    if(num % 2 === 0){
        return 'Even';
    }else{
        return 'Odd';
    }
}
console.log(oddEven(5)); // Odd
console.log(oddEven(6)); // Even