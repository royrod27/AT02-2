/**
 * Created by Roy Rodriguez M. on 2/10/2017.
 */
var expect = require('chai').expect;
var sequence = require('../src/Sequence');

describe('Sequence', function () {

    context('Sequence n=1', function () {
        it('getSequence(1)=[2]', function () {
            var expected = [2];
            var actual = sequence.getSequence(1);
            expect(actual).deep.equal(expected);
        })
    })

    context('Sequence n=2', function () {
        it('getSequence(2)=[2,3]', function () {
            var expected = [2,3];
            var actual = sequence.getSequence(2);
            expect(actual).deep.equal(expected);
        })
    })

    context('Sequence n=3', function () {
        it('getSequence(3)=[2,3,1]', function () {
            var expected = [2,3,1];
            var actual = sequence.getSequence(3);
            expect(actual).deep.equal(expected);
        })
    })

    context('Sequence n=4', function () {
        it('getSequence(4)=[2,3,1,5]', function () {
            var expected = [2,3,1,5];
            var actual = sequence.getSequence(4);
            expect(actual).deep.equal(expected);
        })
    })

})