function Sequence(number, callback){
   this.calculate = function(n,callback){
       
       var result=0;
       var contador=0;
       var numberSeq=2
       var res = false;
       
       while(contador<n) {
        res = this.isPrime(numberSeq);
           if(res == true){
	          if(result==0) 
	             result=numberSeq;
	          else
	            result = result * 10 + numberSeq;
      
               contador++;
	   
	        }
          numberSeq++;
        }
      
        callback(result); 
        
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
