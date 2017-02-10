function Operations() {
    var acu = 0;
    var separator = ",";

    this.add = function (num,sep) {
        separator=sep;

        try{
            if(isNaN(parseInt(this.transformOnNumbers(num)
                .reduce((a, b) => parseInt(a) + parseInt(b)))))throw 'is not a number!';
            else {
                acu +=parseInt(this.transformOnNumbers(num)
                    .reduce((a, b) => parseInt(a) + parseInt(b)));
                return acu;
            }
        }
        catch(err) {
            console.log("1,s");
        }
    }

    this.subs = function (num,sep) {
        separator=sep;
        try {
            if (isNaN(parseInt(this.transformOnNumbers(num)
                    .reduce((a, b) => parseInt(a) + parseInt(b)))))throw 'is not a number';
            else {
                acu -= parseInt(this.transformOnNumbers(num)
                    .reduce((a, b) => parseInt(a) + parseInt(b)));
                return acu;
            }
        }
        catch (err){
            console.log("1,s");
        }

    }

    this.mult = function (num,sep) {
        separator=sep;
        try {
            if (isNaN(parseInt(this.transformOnNumbers(num)
                    .reduce((a, b) => parseInt(a) * parseInt(b)))))throw 'is not a number';
            else {
                if(acu==0){
                    acu=1;
                    acu *= parseInt(this.transformOnNumbers(num)
                        .reduce((a, b) => parseInt(a) * parseInt(b)));
                    return acu;
                }else if(acu!=0){
                    acu *= parseInt(this.transformOnNumbers(num)
                        .reduce((a, b) => parseInt(a) * parseInt(b)));
                    return acu;
                }

            }
        }
        catch (err){
            console.log("1,s");
        }

    }

    this.div=function (num,sep) {
        separator=sep;
        if(isNaN(parseInt(this.transformOnNumbers(num)
                .reduce((a, b) => parseInt(a) / parseInt(b)))))throw 'is not a number';
        else {
            if(acu!=0){
                acu /=parseInt(this.transformOnNumbers(num)
                    .reduce((a, b) => parseInt(a) / parseInt(b)));
                return acu;
            }
            else {
                return 0;
            }
        }
    }

    this.transformOnNumbers = function (num) {
        if (num==""){
            return "0".split(separator);}
        else {

            var splitNumber = num.split(separator);
            return splitNumber;
        }
    }
    this.showAcu=function () {
        console.log(acu);
    }

    this.clearAcu=function () {
        acu=0;
    }
}
module.exports=new Operations();
