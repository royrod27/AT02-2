function Reverse(num){
	var result = '';
	while(num > 0){
		result = result + (num % 10);
		num = parseInt(num / 10);
	}

	console.log(result);
}

Reverse(1234);