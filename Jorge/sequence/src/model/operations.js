/**
 * Created by Administrator on 2/10/2017.
 */
function Operations() {
    this.sum = function (n1, n2) {
        return n1 + n2;
    };
    this.subtraction = function (n1, n2) {
        return n1 - n2;
    };
};

module.exports = new Operations();