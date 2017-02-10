function Perfect(number)
{
  var result = 0;
    for(var i = 1; i <= number/2; i++) {
      if(number % i === 0) {

        result += i;
        console.log(i);
      }
    }
     
    if(result === number && result !== 0) {
      console.log("The number is perfect");
        console.log(result);
    } 
    else
    {
      console.log("The number is not perfect");
    }   
} 

Perfect(6);