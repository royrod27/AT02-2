/**
 * Created by David & Fernando on 2/8/2017.
 */

function Calculator() {

    this.memory = 0;
    this.deli = ',';
    this.sum = function (input) {
        var current = 0;
        if (this.empty(input)) {
            return 0;
        } else {
            var numers = input.split(this.deli);

            for (var index = 0; index < numers.length; index++) {
                current += parseInt(numers[index]);
            }
            current += this.memory;
            this.memory = current;
            return current;
        }
    };


    this.substract = function (input) {
        var current = 0;
        if (this.empty(input)) {
            return 0;
        } else {
            var numers = input.split(this.deli);
            var current = parseInt(numers[0]);

            for (var index = 1; index < numers.length; index++) {
                current -= parseInt(numers[index]);
            }

            if (this.memory === 0){
                this.memory = current;
                return  current;
            }
            this.memory -= current;
            return this.memory;
        }
    };

    this.multiply = function (input) {
        var current = 0;
        if (this.empty(input)) {
            return 0;
        } else {
            var numers = input.split(this.deli);
            var current = parseInt(numers[0]);

            for (var index = 1; index < numers.length; index++) {
                current *= parseInt(numers[index]);
            }
            if (this.memory === 0){
                this.memory = current;
                return current;
            }
            current *= this.memory;
            this.memory = current;
            return current;
        }
    };

    this.division = function (input) {
        var current = 0;
        if (this.empty(input)) {
            return 0;
        } else {
            var numers = input.split(this.deli);
            var current = parseInt(numers[0]);

            for (var index = 1; index < numers.length; index++) {
                current /= parseInt(numers[index]);
            }
            if (this.memory === 0){
                this.memory = current;
                return current;
            }
            this.memory /= current;
            return this.memory;
        }
    };

    this.clear = function () {
        this.memory = 0;
    }

    this.empty = function (index) {
        return typeof index == 'string' && !index.trim() || typeof index == 'undefined' || index === null;
    }

    this.delimiter = function (delimiter) {
        this.deli = delimiter;
    }
};

module.exports = new Calculator();