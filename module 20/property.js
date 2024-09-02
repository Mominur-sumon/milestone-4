const person = {
    name : "Mominur",
    age : 20,
    profession : "Student",
    salary : 5000,
    married : false,
    'favorite place' : ['Dhaka', 'Chittagong', 'Sylhet']
}

console.log(person);
//way to acces object property
console.log(person.name); //dot notation
console.log(person["name"]); //array notation
console.log(person['favorite place']); //array notation

person.salary = 30000 ;
console.log(person['salary']);
person['favorite place'] = person['favorite place'].concat('Coxs Bazar');
console.log(person['favorite place']);