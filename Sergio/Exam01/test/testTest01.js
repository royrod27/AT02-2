var friends = require('../src/test01');
var expect = require('chai').expect;

describe('Friendly number', function () {
    context('divisor', function () {
        it('acu(8) = 7', function () {
            var expected = 7;
            var fr=new friends();
            var actual=fr.acu(8);
            expect(expected).to.equal(actual);
        });
    });
    context('divisor', function () {
        it('acu(11) = 1', function () {
            var expected = 1;
            var fr=new friends();
            var actual=fr.acu(11);
            expect(expected).to.equal(actual);
        });
    });
    context('compare', function () {
        it('compareWith(8,7,callback) = friends', function () {
            var expected = "friends";
            var fr=new friends();
            var actual=fr.compareWith(8,7,fr.acu);
            expect(expected).to.equal(actual);
        });
    });
    context('compare', function () {
        it('compareWith(8,9,callback) = not friends', function () {
            var expected = "not friends";
            var fr=new friends();
            var actual=fr.compareWith(8,9,fr.acu);
            expect(expected).to.equal(actual);
        });
    });
});
