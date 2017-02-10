
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
		it('231',function(){
			var expected =231;
			var actual; 
			sequence.calculate(3,function(res){
			actual=res;
			expect(actual).to.equal(expected);	
			});
			
		});
		
	});


});