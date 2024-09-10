function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || isNaN(income) || isNaN(expenses) || income < expenses) {
        return  "Invalid Input";
    }
    return (income - expenses) *0.2;
}

let tax = calculateTax('6000', 11500);
console.log(tax);
