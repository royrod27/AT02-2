//Created by Roy Rodriguez M.
//02/02/2017
function reverse_number(number) {
    var numb= number;
    var result=0;

    while (numb>0) {
        result = (numb % 10) + result * 10;
        numb=Number.parseInt(numb/10);
    }
    return result;
}

console.log(Number.parseInt(reverse_number(1234)));