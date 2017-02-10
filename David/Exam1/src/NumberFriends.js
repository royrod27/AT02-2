/**
 * Created by David on 2/10/2017.
 */

function Friends() {

    this.verifyFriend = function (num1, num2) {
        var res1 = 0;
        var res2 = 0;
        var flag = false;

        if (this.isNumber(num1) || this.isNumber(num2)) {
            if (!(num1 < 0 || num2 < 0)) {
                res1 = this.sumDividers(num1);
                res2 = this.sumDividers(num2);

                if (res1 === num2 && res2 === num1) {
                    flag = true;
                }
            }
        }
        return flag;
    };

    this.isNumber = function (num) {
        if (!(isNaN(parseFloat(num)) && isFinite(num))) {
            return true;
        } else {
            return false;
        }
    };

    this.sumDividers = function (num) {
        var res = 0;
        for (index = 1; index <= num / 2; index++) {
            if (num % index === 0) {
                res += index;
            }
        }
        return res;
    };
};

module.exports = new Friends();