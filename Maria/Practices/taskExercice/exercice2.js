var numberReverse=0;
var aux=0;
function reverse(number){
	
	while(number/10 > 0) {
       aux = number%10
       if (numberReverse==0)
       	numberReverse=aux;
       else
        numberReverse=(numberReverse*10)+aux;
       
       number= Number.parseInt(number/10)
   }

};

reverse(456);
console.log(numberReverse);	

