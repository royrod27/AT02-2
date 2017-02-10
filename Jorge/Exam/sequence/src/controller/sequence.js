/**
 * Created by Administrator on 2/10/2017.
 */


var nextNumber = require('../controller/nextNumber');

exports.returnSequence = function (number) {
    var sequence = [];
    for (var i = 1; i <= number; i++) {
        sequence.push(nextNumber.nextNumber(sequence, i));
    }
    return sequence;
}


