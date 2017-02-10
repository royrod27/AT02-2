function reverse(number) {
	var result = 0;
	console.log("Number is:" + number);
	while (number != 0) {
		result *= 10;
		result += number % 10;
		number -= number % 10;
		number /= 10;
	}
 console.log("Reverse of number is: " + result);
};

reverse(1234);