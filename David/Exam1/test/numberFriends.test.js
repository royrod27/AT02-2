/**
 * Created by David on 2/10/2017.
 */

var friend = require('../src/NumberFriends');
var expect = require('chai').expect;

describe('Friend numbers', function () {
    context('Two numbers are friends', function () {
        it('verifyFriend(220, 284) = true', function () {
            var expected = true;
            var actual = friend.verifyFriend(220, 284);

            expect(expected).to.equal(actual);
        });
    });

    context('Two numbers are not friends', function () {
        it('verifyFriend(234, 123) = false', function () {
            var expected = false;
            var actual = friend.verifyFriend(234, 123);

            expect(expected).to.equal(actual);
        });
    });

    context('One and Seven are not friends', function () {
        it('verifyFriend(1, 7) = false', function () {
            var expected = false;
            var actual = friend.verifyFriend(1, 7);

            expect(expected).to.equal(actual);
        });
    });

    context('Two same numbers are not friends', function () {
        it('verifyFriend(20, 20) = false', function () {
            var expected = false;
            var actual = friend.verifyFriend(20, 20);

            expect(expected).to.equal(actual);
        });
    });

    context('A number and a letter are not friends', function () {
        it('verifyFriend(20, b) = false', function () {
            var expected = false;
            var actual = friend.verifyFriend(20, 'b');

            expect(expected).to.equal(actual);
        });
    });

    context('A letter and a number are not friends', function () {
        it('verifyFriend(b, 20) = false', function () {
            var expected = false;
            var actual = friend.verifyFriend('b', 20);

            expect(expected).to.equal(actual);
        });
    });

    context('Negative numbers are not valid', function () {
        it('verifyFriend(-220, -284) = false', function () {
            var expected = false;
            var actual = friend.verifyFriend(-220, -284);

            expect(expected).to.equal(actual);
        });
    });

    context('A negative number is not valid', function () {
        it('verifyFriend(220, -284) = false', function () {
            var expected = false;
            var actual = friend.verifyFriend(220, -284);

            expect(expected).to.equal(actual);
        });
    });

    context('Empty values are not friends', function () {
        it('verifyFriend(\'\', \'\') = false', function () {
            var expected = false;
            var actual = friend.verifyFriend('', '');

            expect(expected).to.equal(actual);
        });
    });
});
