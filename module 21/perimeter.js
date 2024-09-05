/*
Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.

Use the following formulas:

Perimeter of a square: 4 * side.
Perimeter of a circle: 6.28 * radius.
*/
function perimeter(l, num) {
    switch (l) {
        case "s":
            let d = 4 * parseFloat(num);
            d.toPrecision(2);
            return d;

        case "c":
            let e = 6.28 * num;
            e.toPrecision(2);
            return e;
    }
}
console.log(perimeter("c", 9));
console.log(perimeter("s", 7.1)); 