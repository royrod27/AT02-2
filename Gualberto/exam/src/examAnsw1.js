//2 3 1 5 7 2 11 13 2 17 19 2 23 29 6 ….n
function Sequence() {
    this.seque = function (num,callback) {
        this.num = parseInt(num);

        var res = this.display(this.num);
        callback(res);
    };

    this.isPrime = function (number) {
        for ( var i = 2; i < number; i++ ) {
            if ( number % i === 0 ) {
                return false;
            }
        }
        return true;
    }

    this.display = function (n) {
        var arr = [2];
        var control = true;
        var i = 3;

        while( control ){
            if ( this.isPrime(i) ) {
                arr.push(i);
            }
            if (arr[n-1] != null) {
                control = false;
            }
            i+=2
        }
        return arr;
    }

    // this.join = function (array) {
    //     var array_new= [];
    //     var tam = array.length;
    //
    //     for (var con = 0; con < tam; con++){
    //         array_new.push(array[1]-array[0]);
    //     }
    //     return array_new;
    // }
}

module.exports = new Sequence();