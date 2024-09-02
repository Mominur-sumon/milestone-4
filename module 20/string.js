const country = ' Bangladesh';
const division = ' Rangpur';
const district = ' Lalmonirhat';
const upazila = ' Hatibandha';
const union = ' Goddimari';
const village = ' Moddho Goddimari';
const str = new String('Hello');
// console.log(str);
const address = country + division + district + upazila + union + village;
// console.log(address);

// String  is a immutable object
// we can not change the value of a string

const address2 = 'Lalmonirhat';
const part = address2.slice(0, 5); //start from 0 and end at the beganing of 5
console.log(part);

const sentence = 'I love my country';
console.log(sentence.split(' '));

const friends = 'Rahim, Karim, Rahima, Karima, Habib, Monir';
const friendsString = friends.split(', ');
console.log(friendsString); 
console.log(friendsString.join(' '));
console.log(friendsString.join(' || '));

 