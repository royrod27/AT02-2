
// Write the following program with the corresponding tests
// Two numbers positive integers a and b are friends, only if
// the sum of the dividers of a is equal than b and vice versa.

function friends() {
    var acuTemp = 0;
    this.acu = function (num1) {

        for (var i = 1; i < num1; i++) {
            if (num1 % i == 0) {
                acuTemp += i;
            }
        }
        return acuTemp;
    }
    this.compareWith = function (num1, num2, callback) {
        if (callback(num1) == num2 && callback(num2 == num1)) {
            return "friends";
        }
        else {
            return "not friends";
        }

    }
}
module.exports= friends;
