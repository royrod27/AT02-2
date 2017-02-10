/**
 * Created by Administrator on 2/10/2017.
 */
var dividers = require('../controller/dividers');
var operation = require('../model/operations');

exports.sumDividers = function (number) {
    var divider = dividers.getDividers(number);
    var result = 0;
    divider.forEach(function (num) {
        result = operation.sum(result, num);
    })
    return result;
}