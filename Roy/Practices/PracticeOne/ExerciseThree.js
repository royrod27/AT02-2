//Created by Roy Rodriguez M.
//02/02/2017

function is_perfect(number) {

    var divisors = 0;
    var numb = number;
    var index = 1;

    while(divisors<numb){
         if(numb%index == 0) {
             divisors+=index;
         }
        index++;
    }

    if(number==divisors){
        return true
    }
    else{
        return false
    }
}
console.log(is_perfect(29))