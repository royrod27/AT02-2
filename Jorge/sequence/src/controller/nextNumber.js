/**
 * Created by Administrator on 2/10/2017.
 */
var operation = require('../model/operations');
var prime = require('../controller/Prime.js');

exports.nextNumber = function (array, position) {
    var result;
    if (position == 1)
        return prime.nextPrime();
    else {
        if ((position) % 3 == 0) {
            result = operation.subtraction(array[position - 2], array[position - 3]);
        }
        else {
            result = prime.nextPrime(position);
        }
    }
    return result;
}

function nextPrime(value) {
    value = value || 2;
    while (!isPrime(value)) {
        value++;
    }

}

function isPrime(number) {
    var divide = 0;
    for (i = 1; i < number; i++) {
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