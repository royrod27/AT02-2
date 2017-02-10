var calc = require('../src/callBacks.js');
var expect = require('chai').expect;

describe('Calculator callBack jueves',function(){
  context('Sum operation', function(){
    it('sum(1,2) = 3',function(){
      var expected = 3;
      var actual;
        calc.sum(1,2,function(res){
      	//actual = res;
      	expect(res).to.equal(expected); 
      });
    });
  });
});