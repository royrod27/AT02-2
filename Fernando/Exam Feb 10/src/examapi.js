/**
 * Created by Fernando on 2/10/2017.
 */

function FriendNumbers() {

    this.friendly = function (n1, n2, callback) {
        var sumDividersN1 = this.calcSum(n1);
        var sumDividersN2 = this.calcSum(n2);

        var result = (sumDividersN1==n2)&&(sumDividersN2==n1);
        console.log(result);
        callback(result);
    }

    this.calcSum = function (n1) {
        var aux;
        var divider = n1 / 2;
        var sumdividers = 0;
        if (n1 > 1) {
            for (var index = 0; index <= divider; index++) {
                if (n1 % index == 0) {
                    sumdividers = sumdividers + index;
                }
            }
        }
        return sumdividers;
    }
}
module.exports = new FriendNumbers();



