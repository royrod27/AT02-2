var numbers = require('../src/examAnsw2');
var expect = require('chai').expect;

describe('Two numbers positive are friends', function () {
    context('The sum of the dividers of a is equal than b, and vice verse ', function () {
        it('a=8 friend of b=7 is true && b=7 friend of a=8 is false', function () {
            var expected = [true,false];

            var actual;

            numbers.areFriends(8,7,function (res) {
                actual = res;
                expect(actual[0]).to.equal(expected[0]);
                expect(actual[1]).to.equal(expected[1]);
            });
        });
    });
});

describe('Two numbers positive are friends', function () {
    context('The sum of the dividers of a is equal than b, and vice verse ', function () {
        it('a=220 friend of b=284 is true && b=284 friend of a=220 is false', function () {
            var expected = [true,true];

            var actual;

            numbers.areFriends(220,284,function (res) {
                actual = res;
                expect(actual[0]).to.equal(expected[0]);
                expect(actual[1]).to.equal(expected[1]);
            });
        });
    });
});

describe('Two numbers positive are friends', function () {
    context('The sum of the dividers of a is equal than b ', function () {
        it('a=8 friend of b=7 is true', function () {
            var expected = true;

            var actual = numbers.aFriendOfb(8,7);

            expect(actual).to.equal(expected);
        });
    });
});

describe('Two numbers positive are friends', function () {
    context('The sum of the dividers of a is equal than b ', function () {
        it('a=-8 friend of b=7 is false', function () {
            var expected = false;

            var actual = numbers.aFriendOfb(-8,7);

            expect(actual).to.equal(expected);
        });
    });
});

describe('Two numbers positive are friends', function () {
    context('The sum of the dividers of a is equal than b ', function () {
        it('a=10 friend of b=14 is false', function () {
            var expected = false;

            var actual = numbers.aFriendOfb(10,14);

            expect(actual).to.equal(expected);
        });
    });
});

describe('Two numbers positive are friends', function () {
    context('The sum of the dividers of b is equal than a ', function () {
        it('b=7 friend of a=8 is false', function () {
            var expected = false;

            var actual = numbers.bFriendOfa(8,7);

            expect(actual).to.equal(expected);
        });
    });
});

describe('Two numbers positive are friends', function () {
    context('The sum of the dividers of b is equal than a ', function () {
        it('b=14 friend of a=10 is true', function () {
            var expected = true;

            var actual = numbers.bFriendOfa(10,14);

            expect(actual).to.equal(expected);
        });
    });
});