/**
 * Created by Administrator on 2/10/2017.
 */
exports.getDividers = function (number) {
    var result = [];
    for(var i = 0; i < number; i++) {
        if(number % i == 0) {
            result.push(i);
        }
    }
    return result;
}

