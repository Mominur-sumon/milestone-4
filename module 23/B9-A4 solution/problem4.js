function password(object) {
    if (object.birthYear.toString().length !== 4 || typeof object.name !== 'string' || typeof object.siteName !== 'string') {
        return 'Invalid Input';
    }

    let password = object.siteName[0].toUpperCase() + object.siteName.slice(1) + "#" + object.name + "@" + object.birthYear;
    return password;
}

const object1 = {
    name: 'kolimuddin',
    birthYear: 2004,
    siteName: 'facebook'
}
const object2 = {
    name: 'rahim',
    birthYear: 2000,
    siteName: 'google'
}

console.log(password(object1)); // Output: Kolimuddin#facebook@2004
console.log(password(object2)); // Output: Rahim#google@2000