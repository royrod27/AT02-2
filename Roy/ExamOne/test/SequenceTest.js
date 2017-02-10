/**
 * Created by Roy Rodriguez M. on 2/10/2017.
 */
var expect = require('chai').expect;
var sequence = require('../src/Sequence');

describe('Sequence', function () {

    context('getSequence(n)', function () {
        it('getSequence(1)=[2]', function () {
            var expected = [2];
            var actual = sequence.getSequence(1);
            expect(actual).deep.equal(expected);
        })


        it('getSequence(2)=[2,3]', function () {
            var expected = [2, 3];
            var actual = sequence.getSequence(2);
            expect(actual).deep.equal(expected);
        })


        it('getSequence(3)=[2,3,1]', function () {
            var expected = [2, 3, 1];
            var actual = sequence.getSequence(3);
            expect(actual).deep.equal(expected);
        })


        it('getSequence(4)=[2,3,1,5]', function () {
            var expected = [2, 3, 1, 5];
            var actual = sequence.getSequence(4);
            expect(actual).deep.equal(expected);
        })


        it('getSequence(5)=[2,3,1,5,7]', function () {
            var expected = [2, 3, 1, 5, 7];
            var actual = sequence.getSequence(5);
            expect(actual).deep.equal(expected);

        })

        it('getSequence(6)=[2,3,1,5,7,2]', function () {
            var expected = [2, 3, 1, 5, 7, 2];
            var actual = sequence.getSequence(6);
            expect(actual).deep.equal(expected);

        })


        it('getSequence(7)=[2,3,1,5,7,2,11]', function () {
            var expected = [2, 3, 1, 5, 7, 2, 11];
            var actual = sequence.getSequence(7);
            expect(actual).deep.equal(expected);

        })

        it('getSequence(15)=[2,3,1,5,7,2,11,13,2,17,19,2,23,29,6]', function () {
            var expected = [2,3,1,5,7,2,11,13,2,17,19,2,23,29,6];
            var actual = sequence.getSequence(15);
            expect(actual).deep.equal(expected);

        })

    })
})