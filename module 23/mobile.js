
const mobile = [
    {name: 'Samsung', price: 20000, camera : '12mp' , ram: '4gb'},
    {name: 'Symphony', price: 10000, camera : '12mp' , ram: '4gb'},
    {name: 'oppo', price: 30000, camera : '12mp' , ram: '4gb'},
    {name: 'Iphone', price: 200000, camera : '12mp' , ram: '4gb'},
    {name: 'Walton', price: 150000, camera : '12mp' , ram: '4gb'},
    {name: 'HTC', price: 50000, camera : '12mp' , ram: '4gb'},
];

function getCheapestPhone(mobile){
    let cheapest = mobile[0];
    for(const phone of mobile){
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest.name;
}
console.log(getCheapestPhone(mobile));

