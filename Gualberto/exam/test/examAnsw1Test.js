var sequence = require('../src/examAnsw1');
var expect = require('chai').expect;

describe('Sequence', function () {
    context('Print the sequence for n number', function () {
        it('The sequence for n= 6 is [2, 3, 1, 5, 7, 2]', function () {
            var expected = [2, 3, 1, 5, 7, 2];
            var actual;

            sequence.seque(6,function (res) {
                actual = res;
                expect(actual).deep.equal(expected);
            });
        });
    });
});

describe('Sequence', function () {
    context('Print the sequence for n number', function () {
        it('The sequence for n= 15 is [2, 3, 1, 5, 7, 2, 11, 13, 2, 17, 19, 2, 23, 29, 6]', function () {
            var expected = [2, 3, 1, 5, 7, 2, 11, 13, 2, 17, 19, 2, 23, 29, 6];
            var actual;

            sequence.seque(15,function (res) {
                actual = res;
                expect(actual).deep.equal(expected);
            });
        });
    });
});

describe('Sequence', function () {
    context('Number is not prime', function () {
        it('6 is prime = false', function () {
            var expected = false;
            var actual;

            actual = sequence.isPrime(6);
            expect(actual).deep.equal(expected);
        });
    });
});

describe('Sequence', function () {
    context('Number prime', function () {
        it('7 is prime = true', function () {
            var expected = true;
            var actual;

            actual = sequence.isPrime(7);
            expect(actual).to.equal(expected);
        });
    });
});

describe('Sequence', function () {
    context('Array with primes', function () {
        it('The array with primes for n= 7 is [2, 3, 5, 7, 11, 13, 17]', function () {
            var expected = [2, 3, 5, 7, 11, 13, 17];
            var actual;

            actual = sequence.arrayOfPrimes(7);
            expect(actual).deep.equal(expected);
        });
    });
});

describe('Sequence', function () {
    context('Array with pattern', function () {
        it('The array with the pattern for n= 7 is [2, 3, 1, 5, 7, 2, 11]', function () {
            var expected = [2, 3, 1, 5, 7, 2, 11];
            var actual;

            actual = sequence.arrayWithPattern(7);
            expect(actual).deep.equal(expected);
        });
    });
});