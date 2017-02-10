
var calculator = require('../src/functionExam.js');
var sequence = require('../src/Sequence.js');
var expect = require('chai').expect;

describe('Calculator',function(){
	context('number friends',function(){

		it('friends(17296, 18416)= true',function(){
			var expected = true;
			var actual; 
			calculator.friends(17296, 18416,function(res){
			actual=res;
			expect(actual).to.equal(expected,'Are not friends');	
			});
			
		});


		it('friends(220,284)= true',function(){
			var expected = true;
			var actual; 
			calculator.friends(220,284,function(res){
			actual=res;
			expect(actual).to.equal(expected,'Are not friends');	
			});
			
		});


		it('friends(6,2)=true',function(){
			var expected =true;
			var actual; 
			calculator.friends(6,2,function(res){
			actual=res;
			expect(actual).to.equal(expected,'Are not friends');	
			});
			
		});
		
	});


	context('Sum dividers',function(){

		it('sumdividers(6)=6',function(){
			var expected =6;
			var actual; 
			calculator.sumdividers(6,function(res){
			actual=res;
			expect(actual).to.equal(expected);	
			});
			
		});
		
	});


});



describe('Sequence',function(){
	context('number sequence',function(){

		it('[2, 3 ]',function(){
			var expected =[2, 3 ];
			var actual; 
			sequence.calculate(2,function(res){
			actual=res;
			console.log('actual ', actual);
			expect(actual).to.deep.equal(expected);
			});
			
		});

		it('[2, 3, 1 ]',function(){
			var expected =[2, 3, 1 ];
			var actual; 
			sequence.calculate(3,function(res){
			actual=res;
				expect(actual).to.deep.equal(expected);
			});
			
		});

		it('[2, 3, 1, 5 ]',function(){
			var expected =[2, 3, 1, 5 ];
			var actual; 
			sequence.calculate(4,function(res){
			actual=res;
				expect(actual).to.deep.equal(expected);
			});
			
		});

		it('[2, 3, 1, 5, 7 ]',function(){
			var expected =[2, 3, 1, 5, 7 ];
			var actual; 
			sequence.calculate(5,function(res){
			actual=res;
				expect(actual).to.deep.equal(expected);
			});
			
		});

		it('[ 2, 3, 1, 5, 7, 2, 11, 13, 2, 17, 19, 2, 23, 29, 6 ]',function(){
			var expected = [ 2, 3, 1, 5, 7, 2, 11, 13, 2, 17, 19, 2, 23, 29, 6 ];
			var actual; 
			sequence.calculate(15,function(res){
			actual=res;
				expect(actual).to.deep.equal(expected);
			});
			
		});
		
	});

});