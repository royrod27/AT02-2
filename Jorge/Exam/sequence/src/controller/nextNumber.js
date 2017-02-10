/**
 * Created by Administrator on 2/10/2017.
 */
var operation = require('../model/operations');
var prime = require('../controller/Prime.js');

exports.nextNumber = function (array, position) {
    var result;
    if (position == 1)
        return prime.nextPrime();
    if (position == 2)
        return prime.nextPrime(array[position - 2]);
    if (position > 2) {
        if (position % 3 == 0) {
            result = operation.subtraction(array[position - 2], array[position - 3]);
        }
        else {
            if (position % 3 == 1) {
                result = prime.nextPrime(array[position - 3]);
            }
            if (position % 3 == 2)
                result = prime.nextPrime(array[position - 2]);

        }
    }
    return result;
}
