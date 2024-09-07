const products = [
    {name: 'shamoo', price : 200, quantity: 2},
    {name: 'soap', price : 100, quantity: 3},
    {name: 'perfume', price : 300, quantity: 1},
    {name: 'pen', price : 10, quantity: 5},
    {name: 'book', price : 50, quantity: 2},
    {name: 'bag', price : 500, quantity: 1},

];

function totalCost(products){
    let total = 0;
    for(const product of products){
        total = total + product.price * product.quantity;
    }
    return total;
}

console.log(totalCost(products)); // Output: 1300