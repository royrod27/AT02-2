/*
 Create a simple String Calculator with their corresponding unit tests
 Requirements:
 Create a method add  that receives a string add(String)
 e.g “1,2” return 3
 Create a method multiply that receives a string multiply(String)
 e.g “1,2,3” return 6
 Create a method subtraction  that receives a string sub(String)
 e.g “1,2” return -1
 Create a method division that receives a string division(String)
 e.g “1,2” return 0.5

 When the String is empty it should return 0 
 e.g “” return 0
 When the String contains a character to be sum or any other operation an exception should be returned
 e.g “1,S” return exception

 It is possible to add previous results with current input (accumulative results)
 It is possible clean the accumulative results.
 It is possible to define the delimiters for example: delimiters is "+++" then the string
 should be specified this way "1+++3", in case the delimiter is not valid an error
 should be launched.
 */

var operation = require('../src/controller/operation');
var expect = require('chai').expect;

describe('calculator sum', function () {
    context('Sum operation', function () {
        it('sum(1,2,3) = 6', function () {
            var expected = 6;
            var result = operation.operation('1;2;3', ';', 'sum');
            expect(expected).to.equal(result);
        })
    })
})


describe('calculator subtraction', function () {
    context('Subtraction operation', function () {
        it('subtraction(2,1,1) = 0', function () {
            var expected = 0;
            var result = operation.operation('2;1;1', ';', 'subtraction');
            expect(expected).to.equal(result);
        })
    })
})


describe('calculator multiply', function () {
    context('multiply operation', function () {
        it('multiply(3,5) = 15', function () {
            var expected = 15;
            var result = operation.operation('3;5', ';', 'multiply');
            expect(expected).to.equal(result);
        })
    })
})


describe('calculator division', function () {
    context('division operation', function () {
        it('division(6,3) = 2', function () {
            var expected = 2;
            var result = operation.operation('6;3', ';', 'division');
            expect(expected).to.equal(result);
        })
    })
})


describe('String empty', function () {
    context('String empty', function () {
        it('String empty', function () {
            var expected = 0;
            var result = operation.operation('', ';', 'sum');
            expect(expected).to.equal(result);
        })
    })
})


describe('String contains a character', function () {
    context('String contains a character', function () {
        it('String contains a character', function () {
            var expected = 'not a number';
            var result = operation.operation('1;s', ';', 'sum');
            expect(expected).to.equal(result);
        })
    })
})

describe('accumulative', function () {
    context('accumulative', function () {
        it('6 + sum(1,2,3) = 12', function () {
            var expected = 12;
            var result = operation.operation('1;2;3', ';', 'sum');
            result = operation.operation(';1;2;3', ';', 'sum', result);
            expect(expected).to.equal(result);
        })
    })
})