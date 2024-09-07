

function discountedPrice(quantity,){
    if(quantity <= 100){
        return quantity * 100;
    }
    else if(quantity > 100 && quantity <= 200){
        return quantity * 90;
    }
    else{
        return quantity * 80;
    }
}

console.log(discountedPrice(150)); // Output: 13500
console.log(discountedPrice(50)); // Output: 5000
console.log(discountedPrice(250)); // Output: 20000