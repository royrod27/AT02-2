/*Create a test case that verifies that an item from project that
 is marked as done can be marked as undone
*/

var expect = require('chai').expect;
var request = require('superagent');
require('superagent-proxy')(request);



describe('Item marked undone',function(){
	var expectedStatus=200;
	var item;
	this.timeout(5000);
	var project;
    var  projectJson = {
              Content: 'Project Test with item',
              Icon: 4
         };

    beforeEach(function(done){
        request
		  .post('https://todo.ly/api/projects.json')
		  .proxy('http://172.31.90.146:3128')
		  .auth('angelica.rodriguez@fundacion-jala.org','At2406240688')
		  .send(projectJson)
		 .end(function(err,res){
		 	project = res.body;
		 	expect(res.status).to.equal(expectedStatus);
		 	projectItem = {
            Content: 'Item Test',
            ProjectId: project.Id,
            Checked: 'true'
            };
		 	
		    request
            .post('https://todo.ly/api/items.json')
            .proxy('http://172.31.90.146:3128')
		    .auth('angelica.rodriguez@fundacion-jala.org','At2406240688')
		    .send(projectItem)
		    .end(function(err,res){
		     item = res.body;
		 	
		 	expect(res.status).to.equal(expectedStatus);
		 	expect(item.Content).to.equal(projectItem.Content);
            

		 	done();
            
            }); 
		 }); 
  
	});

	afterEach(function(done){
            var  expectedStatus = 200;
            request
            .del('https://todo.ly/api/projects/'+project.Id+'.json')
            .proxy('http://172.31.90.146:3128')
		    .auth('angelica.rodriguez@fundacion-jala.org','At2406240688')
		    .end(function(err,res){
		    projectDeleted = res.body;
		    resStatus =res.status;
		 	expect(resStatus).to.equal(expectedStatus);
		 	expect(projectDeleted.Deleted).to.be.true;

		 	 request
                    .del('http://todo.ly/api/filters/-4/items.json')
                    .proxy('http://172.31.90.146:3128')
                    .auth('angelica.rodriguez@fundacion-jala.org', 'At2406240688')
                    .end(function (err, res) {
                        expect(res.status).to.equal(expectedStatus);
                        done();
                    });
              });
		 }); 
    

     
    it('verifies item marked undone', function(done){
    	  itemPut = {
             Checked: 'false'
          };
    	  
		  request
		  .put('https://todo.ly/api/items/'+item.Id+'.json')
		  .proxy('http://172.31.90.146:3128')
		  .auth('angelica.rodriguez@fundacion-jala.org','At2406240688')
		  .send(itemPut)
		  .end(function(err,res){
		 	var itemPut = res.body;
		 	expect(itemPut.Checked).to.be.false;
		 	done();
            }); 
		}); 
	}); 


