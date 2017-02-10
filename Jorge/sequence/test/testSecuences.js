/*
 1.	Resolve the sequence

 2 3 1 5 7 2 11 13 2 17 19 2 23 29 6 ….n

 */

var sequence = require('../src/controller/sequence');
var nextNumber = require('../src/controller/nextNumber');
var prime = require('../src/controller/Prime');
var expect = require('chai').expect;

describe('Prime', function () {
    context('a number is prime', function () {
        it('5 is prime? = true', function () {
            var expected = true;
            var result = prime.isPrime(5);
            expect(expected).to.equal(result);
        })
        it('4 is prime? = false', function () {
            var expected = false;
            var result = prime.isPrime(4);
            expect(expected).to.equal(result);
        })
    })
    context('get the next prime number', function () {
        it('nextPrime(5) = 7', function () {
            var expected = 7;
            var result = prime.nextPrime(5);
            expect(expected).to.equal(result);
        })
        it('nextPrime(2) = 3', function () {
            var expected = 3;
            var result = prime.nextPrime(2);
            expect(expected).to.equal(result);
        })
        it('nextPrime(3) = 5', function () {
            var expected = 5;
            var result = prime.nextPrime(3);
            expect(expected).to.equal(result);
        })
    })

})

describe('Sequence', function () {
    context('get nex Number of sequence', function () {
        it('nextNumber([],1) = 2', function () {
            var expected = 2;
            var result = nextNumber.nextNumber([], 1);
            expect(expected).to.equal(result);
        })
        it('nextNumber([2], 2) = 3', function () {
            var expected = 3;
            var result = nextNumber.nextNumber([2], 2);
            expect(expected).to.equal(result);
        })
        it('nextNumber([2, 3], 3) = 1', function () {
            var expected = 1;
            var result = nextNumber.nextNumber([2, 3], 3);
            expect(expected).to.equal(result);
        })
        it('nextNumber([2, 3, 1], 4) = 5', function () {
            var expected = 5;
            var result = nextNumber.nextNumber([2, 3, 1], 4);
            expect(expected).to.equal(result);
        })
    })
    context('get the sequence', function () {
        it('given 3  = [2, 3, 1]', function () {
            var expected = [2, 3, 1];
            var result = sequence.returnSequence(3);
            expect(expected).to.deep.equal(result);
        })
        it('given 4  = [2, 3, 1, 5]', function () {
            var expected = [2, 3, 1, 5];
            var result = sequence.returnSequence(4);

            expect(expected).to.deep.equal(result);
        })
        it('given 5  = [2, 3, 1, 5, 7]', function () {
            var expected = [2, 3, 1, 5, 7];
            var result = sequence.returnSequence(5);

            expect(expected).to.deep.equal(result);
        })
        it('given 6  = [2, 3, 1, 5, 7, 2]', function () {
            var expected = [2, 3, 1, 5, 7, 2];
            var result = sequence.returnSequence(6);
            expect(expected).to.deep.equal(result);
        })
        it('given 7  = [2, 3, 1, 5, 7, 2, 11]', function () {
            var expected = [2, 3, 1, 5, 7, 2, 11];
            var result = sequence.returnSequence(7);
            expect(expected).to.deep.equal(result);
        })
    })

})

//sequence.returnSequence(5);
//console.log(prime.isPrime(4));
//console.log(prime.nextPrime(7));
console.log(nextNumber.nextNumber([1], 2));
//console.log(sequence.returnSequence(3));
