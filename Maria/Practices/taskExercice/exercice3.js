var sumDigit=0;
function numberPerfect(number){
	for (var i = 1 ; i <= number ; i++)
            if (number % i == 0)
            	if(i!=number)
                sumDigit =sumDigit+i;

    if (sumDigit==number)
    	console.log("Is number Perfect")
   	else
   		console.log("Not is number Perfect")

};

numberPerfect(28);


