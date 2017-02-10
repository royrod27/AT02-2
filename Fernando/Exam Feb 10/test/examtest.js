/**
 * Created by Fernando on 2/10/2017.
 */

var calc = require('../src/examapi.js');
var expect = require('chai').expect;

describe('Feature EXAM api102 - Numbers that are Friends ', function () {
    context('Sum of dividers', function () {
        it('The sum of dividers until the half', function () {
            var expected = 7;
            var actual = calc.calcSum(8);
            
            expect(actual).to.equal(expected);
        })
    })
})

describe('Feature EXAM api102 - Numbers that are Friends ', function () {
    context('two numbers are friendly', function () {
        it('A is friend of B', function () {
            var expected = true;
            var actual;

            calc.friendly(220, 284, function (result) {
                actual = result;
                expect(actual).to.equal(expected);
            })
        })
    })
})
