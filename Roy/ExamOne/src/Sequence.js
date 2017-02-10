/**
 * Created by Roy Rodriguez M. on 2/10/2017.
 */


function Sequence() {
    this.getSequence = function (n) {
        var result = [];
        var rest = false;
        var firstPrime = false;
        var secondPrime = true;
        if ((n == 1))
            result = [2];
        else if (n == 2)
            result = [2, 3];
        else {
            result = [2, 3];
            var index = 2;
            while (index < n) {
                if (secondPrime) {
                    result.push(result[result.length - 1] - result[result.length - 2])
                    rest = true;
                    firstPrime = false;
                    secondPrime = false;
                }
                else if (rest) {
                    result.push(this.theNextPrime(result[result.length - 2]))
                    firstPrime = true;
                    rest = false;
                    secondPrime = false;
                }
                else if (firstPrime) {
                    result.push(this.theNextPrime(result[result.length - 1]))
                    firstPrime = false;
                    rest = false;
                    secondPrime = true;
                }
                index++;
            }

        }
        return result
    }

    this.theNextPrime = function (value) {
        var res = value + 1;
        while (!isPrime(res)) {
            res++;
        }
        return res
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