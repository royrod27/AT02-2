/**
 * Created by David on 2/10/2017.
 */

function Sequence() {

    this.sequence = function (cant) {
        var sequence = [];
        var cont = 1;
        for (index = 0; index < cant; index++) {
            if (cont != 2) {
                if (this.primeNumber(index)) {
                    sequence.push(index);
                    cont++;
                }
            }else {
                sequence.push(sequence[index-1] - sequence[index]);
                cont = 0;
            };
        };
        for (x = 0; x < sequence.length; x++) {
            console.log(sequence[x]);
        }
        // return sequence;
    };

    this.primeNumber = function (num) {
        for (i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    };

    this.primes = function (cantidad) {
        var prime = [];
        var seque = [];
        var cap = 4;
        cont = 0;

        for (var i = 2; i < cap ; i++) {
            var num = this.primeNumber(i);
            if (num) {
                prime.push(i);
            }
            if (prime.length < cantidad-2) {
                cap++;
            }
        }
        for (x = 0; x < prime.length; x++) {
            console.log(prime[x]);
        }
    };
};

module.exports = new Sequence();