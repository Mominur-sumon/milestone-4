function countZeros(binary_num) {
    let count = 0;
    for (const bit of Binary_num) {
        if (bit == 0) {
            count++;
        }
    }
    return count
}
const Binary_num = '11000110001';
console.log(countZeros(Binary_num)); // 6