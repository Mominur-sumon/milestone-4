const cars = ['BMW', 'Audi', 'Mercedes', 'Toyota', 'Ford'];

for(let i=0; i<cars.length; i++) {
    console.log(cars[i]);
}
console.log('===========');
// For in Loop
for(let index in cars) {
    console.log(cars[index]);
}
/*for (variable in array) {
  code
} */

// For of Loop
/*for (variable in array) {
  code
}*/
console.log("===========");
for(let car of cars) {
    console.log(car);
}

while (condition) {
    // code block to be executed
  }

  
do{
    // code block to be executed
}
while(condition) ;