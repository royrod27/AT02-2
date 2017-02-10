function Calculator() {
    var totalResult = 0;

    this.add = function (string,delimiter) {
        delimiter = delimiter || ",";
        var array = string.split(delimiter);
        var result = 0;

        for (cont = 0; cont < array.length; cont++){
            result = result + this.parseInt(array[cont]);
        }
        totalResult += result;
        return totalResult;
    };

    this.acumulative = function (array) {
        if (array.length === 1){
            return parseInt(this.previousResult);
        }
    }

    this.multiply = function (string,delimiter) {
        delimiter = delimiter || ",";
        var array = string.split(delimiter);
        result = parseInt(array[0]);

        for (cont = 1; cont < array.length; cont++){
            result = result * this.parseInt(array[cont]);
        }
        this.previousResult = result.toString();
        return result;
    };

    this.subtraction = function (string,delimiter) {
        delimiter = delimiter || ",";
        var array = string.split(delimiter);
        var result = parseInt(array[0]);

        for (cont = 1; cont < array.length; cont++){
            result = result - this.parseInt(array[cont]);
        }
        this.previousResult = result.toString();
        return result;
    };

    this.division = function (string,delimiter) {
        delimiter = delimiter || ",";
        var array = string.split(delimiter);
        var result = parseInt(array[0]);

        for (cont = 1; cont < array.length; cont++){
            result = result / this.parseInt(array[cont]);
        }
        this.previousResult = result.toString();
        return result;
    };
    
    this.parseInt = function (value) {
        var result = 0;
        value = value.trim();
        if (!value) {
            return 0;
        }
        result = parseInt(value);
        return result;
    }

    this.clear = function () {
        totalResult = 0;
    }
};

module.exports = new Calculator();