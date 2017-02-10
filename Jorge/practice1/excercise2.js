function reverse(number) {

	var string = number.toString();
	var count = 0;
	var caracter = [];
	for (i = string.length; i > 0; i--) { 
    	caracter[count] = string.charAt(i);
         count++;
	}
	console.log(caracter);
};


reverseNumber(164);

function reverseNumber(number) {
	var value = number
	var caracter = [];
	var count = 0;
	while(value > 10) {
		caracter[count] = value % 10;
		value = Number.parseInt(value / 10);
		count++;
	};
	caracter[count] = value;
	var result = caracter[0];
	for(i = 1; i < caracter.length; i++) {
		result = result*10 + caracter[i];
	}
	console.log(result);
};