function StringCalculator() {
    var totalResult = 0;
    var delimiter = ",";

    this.sum = function (string, delimiterChar) {
        var arrayNumbers = this.splitter(string);
        var res = 0;

        for (var index = 0; index < arrayNumbers.length; index++) {
            res += this.parser(arrayNumbers[index]);
        }
        totalResult += res;
        return totalResult;
    };

    this.multiply = function (string) {
        var arrayNumbers = this.splitter(string);
        var res = 1;

        for (var index = 0; index < arrayNumbers.length; index++) {
            res *= this.parser(arrayNumbers[index]);
        }
        if (totalResult === 0) {
            totalResult = res;
            return res;
        }
        else {
            totalResult *= res;
            return totalResult;
        }
    };


    this.subtract = function (string) {
        var arrayNumbers = this.splitter(string);
        var res = this.parser(arrayNumbers[0]);

        for (var index = 1; index < arrayNumbers.length; index++) {
            res -= this.parser(arrayNumbers[index]);
        }
        if (totalResult === 0) {
            totalResult = res;
            return res;
        }
        totalResult -= res;
        return totalResult;
    };

    this.division = function (string) {
        var arrayNumbers = this.splitter(string);
        var res = this.parser(arrayNumbers[0]);

        for (var index = 1; index < arrayNumbers.length; index++) {
            res /= this.parser(arrayNumbers[index]);
        }

        if (totalResult === 0)
            totalResult = res;

        else
            totalResult /= res;
        return totalResult;
    };


    this.parser = function (string) {
        var result;
        try {
            if (isNaN(parseInt(string))) {
                throw (Error("Invalid data."));
            }
            result = parseInt(string);
        }
        catch (err) {
            this.display(err);
        }
        return result;
    };

    this.display = function (string) {
        console.log(string)
    }

    this.splitter = function (string) {
        if (string.trim().length === 0) {
            return ['0'];
        }
        else {
            var actualDelimiter = string.replace(/\d+/g,'');
            if(actualDelimiter != delimiter)
                console.log("Message: Your delimiter is wrong.");

            return string.split(delimiter);
        }
    }



    this.clear = function () {
        totalResult = 0;
        delimiter = ","
    }

    this.defineDelimiter = function (delimiterChar) {
        delimiter = delimiterChar;
    }
}

module.exports = new StringCalculator();