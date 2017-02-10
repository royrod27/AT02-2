/**
 * Created by Administrator on 2/8/2017.
 */
var calculator = require('../model/calculator');
var delimitation = require('../controller/delimitation');
var Accumulative = require('../controller/addAccumulative');
var validator = require('../controller/validator');

exports.operation = function (value, delimiter, operation, before) {
    var result = 0;
    try {
        var data = delimitation.delimitation(value, delimiter);
        if (validator.isValid(data)) {
            data = Accumulative.addAccumulative(data, before);
            result = calculate(data, operation)
        }
    }
    catch (exception) {
        result = exception;
        console.log(exception);
    }
    return result;
}

function calculate(data, operation) {
    //var result = 0;
    var result = parseInt(data.shift());
    data.forEach(function (element) {
        var number = parseInt(element);
        result = selectOperation(operation, number, result);
    });
    return result;
}

function selectOperation(operation, number, result) {
    switch (operation) {
        case 'sum' :
            result = calculator.sum(result, number);
            break;
        case 'subtraction' :
            result = calculator.subtraction(result, number);
            break;
        case 'multiply' :
            result = calculator.multiply(result, number);
            break;
        case 'division' :
            result = calculator.division(result, number);
            break;
    }
    return result;
}


