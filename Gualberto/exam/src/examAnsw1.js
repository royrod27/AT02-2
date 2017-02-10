//2 3 1 5 7 2 11 13 2 17 19 2 23 29 6 ….n
function Sequence() {
    this.seque = function (num,callback) {
        this.num = parseInt(num);

        var res = this.arrayWithPattern(this.num);
        callback(res);
    };

    this.isPrime = function (num) {
        for ( var i = 2; i < num; i++ ) {
            if ( num % i === 0 ) {
                return false;
            }
        }
        return true;
    };

    this.arrayOfPrimes = function (num) {
        var arr = [2];
        var control = true;
        var i = 3;

        while( control ){
            if ( this.isPrime(i) ) {
                arr.push(i);
            }
            if (arr[num-1] != null) {
                control = false;
            }
            i+=2
        }
        return arr;
    };

    this.arrayWithPattern = function (num) {
        var array = [];
        var posA = 0;
        var posB = 1;
        var splic = 2;

        var arrayPrimes = this.arrayOfPrimes(num);

        for (var cont = 0; cont < parseInt(arrayPrimes.length/2); cont++){
            array.push(arrayPrimes[posB]-arrayPrimes[posA]);
            posA += 2;
            posB += 2;
        }

        for (var cont = 0; cont < array.length; cont++) {
            arrayPrimes.splice(splic, 0, array[cont]);
            splic += 3;
        }

        return arrayPrimes.slice(0, num);
    };
}

module.exports = new Sequence();