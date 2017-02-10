function Sequence(number, callback){
   this.calculate = function(n,callback){
       
       
   	  var resultAcum = new Array();
       var contador=1;
       var numberSeq=2
       var res = false;
       var substract=0;
       var number1=0;
       var number2 =0;
       var bandera = false;
       while(contador<=n) {
       	
       	res = this.isPrime(numberSeq);
        if(res){ 
        	   if(number1==0){
                number1  = numberSeq;
                resultAcum.push(number1);
                }
                else {
		               if ((number1!=0)&&(number2==0)){
		                number2 = numberSeq;
		                resultAcum.push(number2);
		                bandera=true;
		                if(contador<n){
                                 if (bandera) {
                                  substract = Math.abs(number1-number2);	
                                  resultAcum.push(substract);
                                  number1=0;
				                  number2=0;
				                  substract=0;
				                  bandera=false;
     				              contador++;
                            }
                                  
		                }
	               }
               }
        	   
          contador++;
	    }
          numberSeq = numberSeq + 1;

        }
       
        callback(resultAcum); 
        
	  };

   this.isPrime = function(number){
    var valor=parseInt(number);
    var result=true;
 		for(i=1;i<number;i++)
		{
			if(valor/i == Math.round(valor/i) && i!=1 && i!=valor)
			{
				result=false;
				break;
			};
		};
      return result;
   };

   
};


module.exports= new Sequence();
