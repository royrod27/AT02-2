
function Calculator() {
	this.friends = function(n1,n2,callback){
       var res= false;
       var result1;
       this.sumdividers(n1, function(total){
        result1 = total;

       });
       
       var result2; 
       this.sumdividers(n2, function(total){
       result2 = total;	
       });
       

       if((result1 == n2) &&(result2 == n1))
          res = true;
       callback(res); 
	};

   this.sumdividers = function(number, callback){
   result = 0;
   for(var i = 1; i < number; i++){
      if(number%i == 0){
         result += i;
      }
    }
    callback(result);
   };  

};


module.exports= new Calculator();
