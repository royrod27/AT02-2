/**
 * Created by Roy Rodriguez M. on 2/10/2017.
 */

function NumberFriends() {

    this.areFriends = function (a, b) {
        var res = false;
        var validateNumbers = this.validate(a, b);

        var sumOfDividersOfA = this.dividers(a);
        var sumOfDividersOfB = this.dividers(b);

        this.displayMessage(a, b, sumOfDividersOfA, sumOfDividersOfB);


        return (sumOfDividersOfA == b) && (sumOfDividersOfB == a) && validateNumbers;
    }

    this.dividers = function (number) {
        var sumOfDividers = 0;
        var index = 1;

        while (index <= number / 2) {
            if ((number % index) == 0)
                sumOfDividers += index;
            index++;
        }
        return sumOfDividers;
    }

    this.validate = function (a, b) {
        var message = '';
        var result = true;

        if ((a || b) == 1) {
            message = '1 is not a friend.';
            result = false;
        }
        else if ((typeof (a) || typeof (b)) != 'number') {
            message = 'Do not use strings, only use numbers';
            result = false
        }

        else if (a == b) {
            message = a + ' is not friend of himself.';
            result = false
        }

        else if ((a || b) < 1) {
            message = 'Only use positive numbers';
            result = false
        }

        else if (((a / 10) < 1) || ((b / 10) < 1)) {
            message = 'Only use integer numbers';
            result = false
        }
        console.log(message);
        return result;
    }

    this.displayMessage = function (a, b, sumA, sumB) {
        var message = '';

        if (a == sumB && b == sumA)
            message = a + ' and ' + b + ' are friends';
        else if (a == sumB && b != sumA)
            message = a + ' is friend of ' + b + ', but ' + b + ' is not friend of ' + a;
        else if (a != sumB && b == sumA)
            message = b + ' is friend of ' + a + ', but ' + a + ' is not friend of ' + b;

        console.log(message)
    }
}

module.exports = new NumberFriends();
