/**
 * Created by Administrator on 2/8/2017.
 */
function Validator() {
    this.isValid = function (data) {
        var state = true;
        if (data.length > 1) {
            data.forEach(function (element) {
                if (isInteger(element) == false) {
                    state = false;
                }
            });
        }
        else {
            return 0;
        }
        if (state == true) {
            return data;
        }
        else {
            return false;
        }
    }
}

function isInteger(value) {
    if (isNaN(value)) {
        throw 'not a number';
    } else {
        return true;
    }
};

module.exports = new Validator();