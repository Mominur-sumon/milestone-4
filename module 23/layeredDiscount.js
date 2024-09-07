

function layeredDiscount(quantity) {
    const fastHoundred = 100;
    const mediumHoundred = 90;
    const slowHoundred = 80;
    if(quantity <= 100){
        return quantity * fastHoundred;
    }
    else if(quantity > 100 && quantity <= 200){
        return 100 * fastHoundred + (quantity - 100) * mediumHoundred;
    }
    else{
        return 100 * fastHoundred + 100 * mediumHoundred + (quantity - 200)* slowHoundred;
    }
}
console.log(layeredDiscount(50)); // 

console.log(layeredDiscount(150)); //

console.log(layeredDiscount(200));
console.log(layeredDiscount(250));