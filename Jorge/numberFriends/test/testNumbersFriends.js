/**
 2. Write the following program with the corresponding tests
 Two numbers positive integers a and b are friends, only if the sum of the dividers of a is equal than b and vice versa.
 */

var expect = require('chai').expect;
var dividers = require('../src/controller/dividers');
var sumDividers = require('../src/controller/sumDividers');
var verification = require('../src/controller/verification');

describe('Dividers', function () {
    context('get dividers', function () {
        it('dividers of 4 = [1, 2]', function () {
            var expected = [1, 2];
            var result = dividers.getDividers(4);
            expect(expected).to.deep.equal(result);
        })
        it('dividers of 6 = [1, 2, 3]', function () {
            var expected = [1, 2, 3];
            var result = dividers.getDividers(6);
            expect(expected).to.deep.equal(result);
        })
        it('dividers of 8 = [1, 2, 4]', function () {
            var expected = [1, 2, 4];
            var result = dividers.getDividers(8);
            expect(expected).to.deep.equal(result);
        })
    })
    context('Sum dividers', function () {
        it('sum of dividers of 4 = 3', function () {
            var expected = 3;
            var result = sumDividers.sumDividers(4);
            expect(expected).to.equal(result);
        })

    })
})
describe('Are Friends', function () {
    context('verify are 2 numbers are friends', function () {
        it('6 and 8 are friends? false', function () {
            var expected = false;
            var result = verification.areFriends(6, 8);
            expect(expected).to.equal(result);
        })
        it('220 and 284 are friends? true', function () {
            var expected = true;
            var result = verification.areFriends(220, 284);
            expect(expected).to.equal(result);
        })

    })
})
