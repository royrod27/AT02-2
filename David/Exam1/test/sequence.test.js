/**
 * Created by David on 2/10/2017.
 */

var squec = require('../src/sequence');
var expect = require('chai').expect;


describe('Sequence numbers', function () {
    context('A number is prime', function () {
        it('primeNumber(7) = true', function () {
            var expected = true;
            var actual = squec.primeNumber(7);

            expect(expected).to.equal(actual);
        });

        it('primeNumber(6) = false', function () {
            var expected = false;
            var actual = squec.primeNumber(6);

            expect(expected).to.equal(actual);
        });

        it('primeNumber(29) = true', function () {
            var expected = true;
            var actual = squec.primeNumber(29);

            expect(expected).to.equal(actual);
        });

        it('primeNumber(30) = false', function () {
            var expected = false;
            var actual = squec.primeNumber(30);

            expect(expected).to.equal(actual);
        });
    })
});

describe('Sequence numbers', function () {
    context('Get correct cant of sequence', function () {
        it('getSequence(1) = [2]', function () {
            var expected = [2];
            var actual = squec.getSequence(1);

            expect(expected).deep.equal(actual);
        });

        it('getSequence(2) = [2,3]', function () {
            var expected = [2,3];
            var actual = squec.getSequence(2);

            expect(expected).deep.equal(actual);
        });

        it('getSequence(3) = [2,3,1]', function () {
            var expected = [2,3,1];
            var actual = squec.getSequence(3);

            expect(expected).deep.equal(actual);
        });

        it('getSequence(4) = [2,3,1,5]', function () {
            var expected = [2,3,1,5];
            var actual = squec.getSequence(4);

            expect(expected).deep.equal(actual);
        });

        it('getSequence(5) = [2,3,1,5,7]', function () {
            var expected = [2,3,1,5,7];
            var actual = squec.getSequence(5);

            expect(expected).deep.equal(actual);
        });

        it('getSequence(6) = [2,3,1,5,7,2]', function () {
            var expected = [2,3,1,5,7,2];
            var actual = squec.getSequence(6);

            expect(expected).deep.equal(actual);
        });

        it('getSequence(0) = []', function () {
            var expected = [];
            var actual = squec.getSequence(0);

            expect(expected).deep.equal(actual);
        });

        it('getSequence(15) = [2,3,1,5,7,2,11,13,2,17,19,2,23,29,6]', function () {
            var expected = [2,3,1,5,7,2,11,13,2,17,19,2,23,29,6];
            var actual = squec.getSequence(15);

            expect(expected).deep.equal(actual);
        });
    });
});

