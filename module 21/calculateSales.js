/*You are given an array of objects representing sales transactions. Each object contains three properties:

product (the name of the product),

perProduct (the price per unit of the product),

and quantity (the quantity sold for that product).



Your task is to write a JavaScript function that calculates the total sales amount for all products.



Write a function named calculateTotalSales that takes an array of sales transactions as input and returns the total sales amount.
*/

const sales = [
    { product: "Product1", perProduct: 100, quantity: 5 },
    { product: "Product2", perProduct: 150, quantity: 10 },
    { product: "Product3", perProduct: 250, quantity: 10 },
];


function calculateTotalSales(array){
    let totalSales = 0;
    for(let i = 0; i < array.length; i++){
        totalSales += array[i].perProduct * array[i].quantity;
    }
    return totalSales;
}
console.log(calculateTotalSales(sales)); // 4500