/**
 * Created by Administrator on 2/10/2017.
 */
var expect = require('chai').expect;
var friends = require('../src/FriendNumbers');

describe('NumberFriends', function () {
    //Dividers
    context('Sum of dividers', function () {
        it('dividers(8)=7', function () {
            var expected = 7;
            var actual = friends.dividers(8);
            expect(actual).to.equal(expected);
        })
    })

    context('Sum of dividers of a prime number', function () {
        it('dividers(5)=1', function () {
            var expected = 1;
            var actual = friends.dividers(5);
            expect(actual).to.equal(expected);
        })
    })

    context('Sum of dividers of number one', function () {
        it('dividers(1)=1', function () {
            var expected = 0;
            var actual = friends.dividers(1);
            expect(actual).to.equal(expected);
        })
    })

    //validate

    context('Validate numbers, with number one', function () {
        it('validate(1,5)=false', function () {
            var expected = false;
            var actual = friends.validate(1,5);
            expect(actual).to.equal(expected);
        })
    })

    context('Validate numbers, with strings', function () {
        it('validate("5",5)=false', function () {
            var expected = false;
            var actual = friends.validate("5",5);
            expect(actual).to.equal(expected);
        })
    })
    context('Validate numbers, two equal numbers', function () {
        it('validate(5,5)=false', function () {
            var expected = false;
            var actual = friends.validate(5,5);
            expect(actual).to.equal(expected);
        })
    })

    context('Validate numbers, decimal numbers', function () {
        it('validate(5.5,5)=false', function () {
            var expected = false;
            var actual = friends.validate(5.5,5);
            expect(actual).to.equal(expected);
        })
    })


    context('Validate numbers, negative numbers', function () {
        it('validate(-5,5)=false', function () {
            var expected = false;
            var actual = friends.validate(-5,5);
            expect(actual).to.equal(expected);
        })
    })


    //AreFriends
    context('No friends numbers.', function () {
        it('validate(6,5)=false', function () {
            var expected = false;
            var actual = friends.areFriends(6,5);
            expect(actual).to.equal(expected);
        })
    })

    context('Two friends numbers.', function () {
        it('validate(220,284)=true', function () {
            var expected = true;
            var actual = friends.areFriends(220,284);
            expect(actual).to.equal(expected);
        })
    })

    context('Another friends numbers.', function () {
        it('validate(1184,1210)=true', function () {
            var expected = true;
            var actual = friends.areFriends(1184,1210);
            expect(actual).to.equal(expected);
        })
    })

});
