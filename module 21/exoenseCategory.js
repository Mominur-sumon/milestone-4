/*
Write a JavaScript function that takes an array of objects representing expenses, where each object has a category and amount property.

The function should use the reduce() method to calculate the total expenses for each category and return an object where keys are unique categories and values are the total expenses for each category
*/

const expenses = [
    { category: 'Food', amount: 50 },
    { category: 'Transportation', amount: 30 },
    { category: 'Food', amount: 20 },
    { category: 'Utilities', amount: 100 },
    { category: 'Transportation', amount: 50 }
];

function calculateTotalExpenses(array){
    return array.reduce((acc, obj) => {
        if(!acc[obj.category]){
            acc[obj.category] = 0;
        }
        acc[obj.category] += obj.amount;
        return acc;
    }, {});

}
console.log(calculateTotalExpenses(expenses)); // { Food: 70, Transportation: 80, Utilities: 100 }