// Create program that reverse a number
// using while
function reverseNumber(num) {
    var rev = 0;
    var num1 = num;
    while (parseInt(num1) != 0) {
        rev = rev * 10;
        rev = parseInt(rev + num1 % 10);
        num1 = num1 / 10;
    }
    console.log(rev);
}
reverseNumber(1234);