/**
 * Created by Administrator on 2/10/2017.
 */
var sumDividers = require('../controller/sumDividers');

function Verification() {
    this.areFriends = function (number1, number2) {
        sumNumber1 = sumDividers.sumDividers(number1);
        sumNumber2 = sumDividers.sumDividers(number2);

        return sumNumber1 == number2 && sumNumber2 == number1? true : false;
    };
}
module.exports = new Verification();
