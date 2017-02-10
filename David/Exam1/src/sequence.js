/**
 * Created by David on 2/10/2017.
 */

function Sequence() {

    this.primeNumber = function (num) {
        for (i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    };

    this.getSequence = function (cantidad) {
        var prime = [];
        var seque = [];
        var cap = 3;
        var par = 0;

        for (var i = 2; i < cap ; i++) {
            var num = this.primeNumber(i);
            if (num) {
                prime.push(i);
                par++;
                if (par == 2) {
                    prime.push(prime[prime.length - 1] - prime[prime.length - 2]);
                    par = 0;
                }
            }
            if (prime.length < cantidad) {
                cap++;
            }
        };

        for (x = 0; x < cantidad; x++) {
            seque.push(prime[x]);
        };

        return seque;
    };
};

module.exports = new Sequence();
