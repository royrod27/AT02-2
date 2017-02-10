// exercise 1 program that verifies if student is younger or older
console.log("****Program that verifies if student is younger or older if he/she is older than 17*****");
console.log("");

var studentname = 'fher';
var studentage = 10;  //modify this value to verify if student is "younger" or "older"

if(studentage < 17){
    result = "younger than 17";
}else if (studentage >= 17){
	result = "older than 17";
}console.log(studentname + ' is ' + result + ' because studentage value is hardcoded to ' + studentage);
console.log("");
console.log("***********************");

//exercise 2 program to reverse a number
console.log("****Program that inverts number 1234");
console.log("");

var number = 1234;
var revertedNumber = '';
console.log('number to revert is 1234');
while(number >0){
 revertedNumber = revertedNumber + (number % 10);
 number = parseInt(number / 10);
}
console.log("reverted number is >>> " + revertedNumber);







