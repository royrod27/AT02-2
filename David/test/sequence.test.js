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
        })
    })
});
