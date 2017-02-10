var calculator = require('../src/calculator');
var expect = require('chai').expect;

describe('calculator', function () {
    context('Add operation', function () {
        it('add(1,2,3) = 6', function () {
            var expected = 6;
            var result = calculator.add('1;2;3',';');
            expect(expected).to.equal(result);
            calculator.clearAcu();
        });
    });
});
//this.setTimeOut
describe('calculator', function () {
    context('substract operation', function () {
        it('subs(1,4) = 3', function () {
            var expected = 3;
            calculator.add("8",';');
            var result = calculator.subs('4,1',',');
            expect(expected).to.equal(result);
            calculator.clearAcu();
        });
    });
});

describe('calculator', function () {
    context('multiplay operation', function () {
        it('mult(2,3,2) = 12', function () {
            var expected = 12;
            var result = calculator.mult('2,3,2',',');
            expect(expected).to.equal(result);
            calculator.clearAcu();
        });
    });
});

describe('calculator', function () {
    context('divide operation', function () {
        it('div(4,2) = 2', function () {
            calculator.add("12")
            var expected = 6;
            var result = calculator.div('4,2',',');
            expect(expected).to.equal(result);
            calculator.clearAcu();
        });
    });
});

describe('calculator', function () {
    context('string empty', function () {
        it('sum() = 0', function () {
            var expected = 0;
            var result = calculator.div('',',');
            expect(expected).to.equal(result);
            calculator.clearAcu();
        });
    });
});

describe('calculator', function () {
    context('string empty', function () {
        it('sum() = 0', function () {
            var expected = 0;
            var result = calculator.div('',',');
            expect(expected).to.equal(result);
            calculator.clearAcu();
        });
    });
});
//bdts escenarios para automatizar
//manana examen de excepciones