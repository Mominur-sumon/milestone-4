
function goodNameBadName(name) {
    if(typeof name !== 'string' || name === '' || Array.isArray(name) || name.length === 0) {
        return 'Invalid Input';
    }
    name =name.toLowerCase();
    switch (name[name.length - 1]) {
        case 'a':
        case 'y':
        case 'i':
        case 'e':    
        case 'o':
        case 'u':
        case 'w':
            return 'Good Name';
        default:
            return 'Bad Name';    
    }


}
console.log(goodNameBadName('Rahim')); // Output: Good Name
console.log(goodNameBadName('salman')); // Output: Bad Name
console.log(goodNameBadName('RAFFE')); // Output: Good Name
console.log(goodNameBadName('SALMAN')); // Output: Bad Name
console.log(goodNameBadName('Jhankar')); // Output: Bad Name
console.log(goodNameBadName(199)); // Output:invalid Input
console.log(goodNameBadName('')); // Output: invalid Input
console.log(goodNameBadName(["rashed"])); // Output: invalid Input