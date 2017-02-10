var serie = require('../src/test02');
var expect = require('chai').expect;

describe('serie', function () {
    context('generate serie', function () {
        it('generatePrimes(30,callback) = [2, 3, 1, 5, 7, 2, 11, 13, 2, 17, 19, 2, 23, 29, 6]', function () {
            var expected = [2, 3, 1, 5, 7, 2, 11, 13, 2, 17, 19, 2, 23, 29, 6];
            var fr = new serie();
            var actual = fr.generatePrimes(30,fr.acu);
            for(var i=0;i<expected.length;i++){
                expect(expected[i]).to.equal(actual[i]);
            }
        });
    });
});