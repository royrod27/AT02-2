// number perfect
// using for
function perfectNumber(num) {
    sum = 0;
    for (x = 0; x < num; x++) {
        if (num % x == 0) {
            sum += x;
        }
    }
    if (sum == num) {
        console.log("the number is perfect");
    }
}
perfectNumber(6);