var sequence = require('../src/examAnsw1');
var expect = require('chai').expect;

describe('Sequence', function () {
    context('Print the sequence for number', function () {
        it('The sequence for n=6', function () {
           // var expected = [2, 3, 1, 5, 7, 2];
            var expected = [2, 3, 5, 7, 11, 13];
            var actual;

            sequence.seque(6,function (res) {
                actual = res;
                expect(actual).deep.equal(expected);
            });
        });
    });
});