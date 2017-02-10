function Calculator() {
    this.sum = function (n1, n2) {
        return n1 + n2;
    };
    this.subtraction = function (n1, n2) {
        return n1 - n2;
    };
    this.multiply = function (n1, n2) {
        return n1 * n2;
    };
    this.division = function (n1, n2) {
        return n1 / n2;
    };
};

module.exports = new Calculator();