function serie() {

    var acuPar = 0;
    var prim = [];
    this.acu = function (num1) {

        var acuTemp = 0;
        for (var i = 1; i < num1; i++) {
            if (num1 % i == 0) {
                acuTemp += i;
            }
        }
        return acuTemp;
    }
    this.generatePrimes = function (num1, callback) {
        var par=0;
        for (var j = 0; j < num1; j++) {
            if (callback(j) == 1) {
                par++;
                prim.push(j);
                console.log(j);
                if(par==2){
                    prim.push(prim[prim.length-1]-prim[prim.length-2]);
                    par=0;
                }
            }
        }
        return prim;
    }
}

module.exports=serie;

