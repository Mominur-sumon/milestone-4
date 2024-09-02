firstName = "John";
lastName = "Doe";
const fullName = firstName + " " + lastName;
console.log(fullName); // John Doe
const fullName2 = `${firstName} ${lastName}`;
console.log(fullName2); // John Doe
const fullName3 = firstName.concat(" ", lastName);
console.log(fullName3); // John Doe

console.log(lastName.includes("D")); // true