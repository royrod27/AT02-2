function perfect_number(number) {
	var aux = 0;
	for(i = 1; i <= number/2; i++) {
		if(number%i === 0) {
			aux += i;
		}
	}
	
	if(aux === number && number != 0){
		console.log("The number: " + number + " is perfect");
	} else {
		console.log("The number: " + number + " is NOT perfect");
	}
};

perfect_number(6);