function isNumberPerfec(number) {
	var result = 0;
	for(var i = 0; i < number; i++) {
		if(number % i == 0) {
			result = result + i;
		} 
	}	
	if(number == result)
		return 'is perfect';
	else 
		return 'is not';
}

console.log(isNumberPerfec(6));

