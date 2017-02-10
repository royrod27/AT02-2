function NumberFriends() {
    this.areFriends = function (num1,num2,callback) {
        this.num1 = parseInt(num1);
        this.num2 = parseInt(num2);

        var res = [this.aFriendOfb(this.num1,this.num2),this.bFriendOfa(this.num1,this.num2)];
        callback(res);
    };

    this.aFriendOfb = function (number,number2) {
        var result = 0;
        this.number = parseInt(number);
        this.number2 = parseInt(number2);

        for(var i = 1; i <= this.number/2; i++) {
            if(this.number % i === 0) result += i;
        }

        if(result === this.number2 && result !== 0) {
           return true;
        } else {
           return false;
        }
    };

    this.bFriendOfa = function (number,number2) {
        var result = 0;
        this.number = parseInt(number);
        this.number2 = parseInt(number2);

        for(var i = 1; i <= this.number2/2; i++) {
            if(this.number2 % i === 0) result += i;
        }

        if(result === this.number && result !== 0) {
            return true;
        } else {
            return false;
        }
    };
};

module.exports = new NumberFriends();