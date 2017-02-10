/**
 * Created by Roy Rodriguez M. on 2/10/2017.
 */


function Sequence() {
    this.getSequence = function (n) {
        var result = [];
        if ((n == 1))
            result = [2];
        else if (n == 2)
            result = [2, 3];
        else {
            result = [2, 3];

            while (n - 2 > 0) {

                if (result.length % 3 == 0) {
                    var nextPrime = this.theNextPrime(result[result.length - 2]);
                    console.log(result[result.length - 2])
                    result.push(nextPrime);
                }


                else if (result.length % 2 == 0 && result.length % 3 != 0) {
                    result.push(result[result.length - 1] - result[result.length - 2])
                }
                n--;
            }


        }

        return result
    }

    this.theNextPrime = function (value) {
        if (value == 2)
            return 3;
        value ++;
        while (!isPrime(value)) {
            value++;
        }
        return value;
    }

    function isPrime(number) {
        var divide = 0;
        for (var i = 1; i < number; i++) {
            if (number % i == 0) {
                divide++;
            }
        }
        if (divide > 1) {
            return false;
        }
        else {
            return true;
        }
    }

}


module.exports = new Sequence();