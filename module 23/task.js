/*
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
*/

const heights2 = [167, 190, 120, 165, 137];
function minNumb(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}
console.log(minNumb(heights2));
// Output: 120
console.log(Math.min(...heights2));

/*
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/
const heights = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallest(heights){
    let small = heights[0] ;
    
    for(const height of heights){
        if(small.length > height.length)
            small = height ;
    }
    return small ;
}

console.log(smallest(heights));  // ron 

/*
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

*/

function calculateElectronicsBudget(laptops, tablets, mobiles){
   const laptop = 35000 ;
   const tablet = 15000 ;
   const mobile = 20000 ;
   const total = laptops * laptop + tablets * tablet + mobiles * mobile ;
   return total ;

}

console.log("Total budget is :",calculateElectronicsBudget(5,4,3));

/* Task: 4
You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone
*/
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones){
    let total = 0 ;
    for(const phone of phones){
        total += phone.price ;
    }
    return total / phones.length ;
}

const average = findAveragePhonePrice(phones).toFixed(2) ;
console.log("The average is :", average);

/*
Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
*/
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function currentSalary(employees){
    for(const employee of employees){
        employee.currentSalary = employee.starting + employee.experience * employee.increment ;
    }
    let currentTotal = 0 ;
    for(const employee of employees){
        currentTotal += employee.currentSalary ;
    }
    console.log(currentTotal);
    currentmpnthlySalary = currentTotal / 12 ;
    return currentmpnthlySalary.toFixed(3) ;

}
currentMonthlySalary = currentSalary(employees);
console.log("Current monthly salary of all employee is :", currentMonthlySalary);
