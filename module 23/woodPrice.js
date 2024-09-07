

function woodCalculator(chair, table, bed){
    const chairPrice = 100;
    const tablePrice = 500;
    const bedPrice = 1000;

    const chairCost = chair * chairPrice;
    const tableCost = table * tablePrice;
    const bedCost = bed * bedPrice;

    const totalCost = chairCost + tableCost + bedCost;

    return totalCost;
}

console.log(woodCalculator(2, 3, 5)); // Output: 6700

