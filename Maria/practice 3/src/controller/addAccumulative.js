/**
 * Created by Administrator on 2/8/2017.
 */
function Accumulative() {
    this.addAccumulative = function (data, before) {
        if (before == undefined) {
            return data;
        }
        else {
            data.unshift(before);
            var pos = data.indexOf('');
            data.splice(pos, 1);
        }
        return data;
    }

}
module.exports = new Accumulative();

