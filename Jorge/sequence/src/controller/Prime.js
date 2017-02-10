/**
 * Created by Administrator on 2/10/2017.
 */
function Prime() {
    this.nextPrime = function (value) {
        value++;
        value = value || 2;
        while (!this.isPrime(value)) {
            value++;
        }
        ;
        return value;
    };

    this.isPrime = function (number) {
        var divide = 0;
        for (i = 1; i < number; i++) {
            if (number % i == 0) {
                divide++;
            }
            ;
        }
        return divide > 1 ? false : true;
    };

}
module.exports = new Prime();
