//given a zonn manager sell daily n tickets and the cost of management is 500 tk for the gateman and per person 50tk for the lunch of 8 staffs.
//one ticket price is 120tk. calculate the total ncome or lose of the day. 
// if  he input a negatve number of ticket then return "please provide a valid number of tickets"

function calculateIncome(n){
    if(n < 0){
        return "please provide a valid number of tickets";
    }
    const totalIncome = n * 120;
    const totalCost = 500 + 8 * 50;
    const totalProfit = totalIncome - totalCost;
    return totalProfit;
}

console.log(calculateIncome(100)); // Output: 11100
console.log(calculateIncome(-100)); // Output: please provide a valid number of tickets
console.log(calculateIncome(0)); // Output: -900
console.log(calculateIncome(10)); // 
console.log(calculateIncome(1055));
console.log(calculateIncome(93));
console.log(calculateIncome(-130));