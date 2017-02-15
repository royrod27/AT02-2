var expect = require('chai').expect;
var request = require('superagent');
require('superagent-proxy')(request);


var resStatus;
var projectId;
var projectDeleted;
var projectCreated;
var projectJson;
        


describe('Acceptance Test for Projects',function(){
	var expectedStatus=200;
	projectJson = {
              Content: 'Project Test',
              Icon: 4
            };

	this.timeout(5000);
	beforeEach(function(done){
      console.log('This is before');
	    request
		  .post('https://todo.ly/api/projects.json')
		  .proxy('http://172.31.90.146:3128')
		  .auth('angelica.rodriguez@fundacion-jala.org','At2406240688')
		  .send(projectJson) 
		  .end(function(err,res){
		  	resStatus=res.status;
		    projectCreated = res.body;
		    projectId = projectCreated.Id;
		   	expect(projectCreated.Content).to.equal(projectJson.Content);
		 	expect(projectCreated.Icon).to.equal(projectJson.Icon);
		 	done();
         });
  
	});

	afterEach(function(done){
     console.log('This is after');
            var  expectedStatus = 200;
            request
            .delete('https://todo.ly/api/projects/'+projectId+'.json')
            .proxy('http://172.31.90.146:3128')
		    .auth('angelica.rodriguez@fundacion-jala.org','At2406240688')
		    .end(function(err,res){
		    projectDeleted = res.body;
		    resStatus =res.status;
		 	expect(resStatus).to.equal(expectedStatus);
		 	expect(projectDeleted.Deleted).to.be.true;
            done();
		 }); 
    });


	it('POST /projects.json creates a project', function(done){
         	
		 	expect(resStatus).to.equal(expectedStatus);
		    done();
	});



    it('GET /projects.json get a project', function(done){
		
		    request
            .get('https://todo.ly/api/projects/' + projectId + '.json')
            .proxy('http://172.31.90.146:3128')
		    .auth('angelica.rodriguez@fundacion-jala.org','At2406240688')
		    .end(function(err,res){
		     var projectGet = res.body;
		 	 expect(res.status).to.equal(expectedStatus);
		 	 expect(projectGet.Content).to.equal(projectJson.Content);
		 	 expect(projectGet.Icon).to.equal(projectJson.Icon);
             done();
            }); 
		 }); 
   
	it('PUT /projects.json put a project', function(done){
		    var  projectPutJson = {
              Content: 'Project PUT Test',
              Icon: 4
            };
			    request
	            .put('https://todo.ly/api/projects/'+projectId+'.json')
	            .proxy('http://172.31.90.146:3128')
			    .auth('angelica.rodriguez@fundacion-jala.org','At2406240688')
			    .send(projectPutJson)
			    .end(function(err,res){
			        var projectPut = res.body;
			 	expect(res.status).to.equal(expectedStatus);
			 	expect(projectPut.Content).to.equal(projectPutJson.Content);
  		 	    expect(projectPut.Icon).to.equal(projectPutJson.Icon);
	            done();
			 }); 
	       }); 

	it ('DELETE /projects.json delete a project', function(done){
           expect(resStatus).to.equal(expectedStatus);
		   expect(projectDeleted.Deleted).to.be.true;
           done();
	 }); 
	
});