var expect = require('chai').expect;
var request = require('superagent');
var moment = require('moment');
require('superagent-proxy')(request);

describe('Acceptance Test for Projects',function(){
	var resStatus;
	var projectId;
	var projectDeleted;
	var projectCreated;
	var projectJson;
    var dateCreated;
	var dateCreatedFormat;
	var dateMoment;
	var dateMomentFormat;


	var expectedStatus=200;

	projectJson = {
              Content: 'Project Test',
              Icon: 4
            };

	this.timeout(5000);

	beforeEach(function(done){
      
	    request
		  .post('https://todo.ly/api/projects.json')
		  .proxy('http://172.31.90.146:3128')
		  .auth('angelica.rodriguez@fundacion-jala.org','At2406240688')
		  .send(projectJson) 
		  .end(function(err,res){
		  	resStatus = res.status;
		    projectCreated = res.body;
		    projectId = projectCreated.Id;
		   	
		   	/**moment*/
		 	dateCreated = moment(projectCreated.LastSyncedDateTime);
		 	dateCreatedFormat = dateCreated.format('D/M/YYYY');
		 	dateMoment = moment();
		 	dateMomentFormat = dateMoment.format('D/M/YYYY');

		 	expect(projectCreated.Content).to.equal(projectJson.Content);
		 	expect(projectCreated.Icon).to.equal(projectJson.Icon);

		 	expect(dateMomentFormat).to.equal(dateCreatedFormat);
		 	done();
         });
  
	});

	afterEach(function(done){
    
            request
            .del('https://todo.ly/api/projects/' + projectId + '.json')
            .proxy('http://172.31.90.146:3128')
		    .auth('angelica.rodriguez@fundacion-jala.org','At2406240688')
		    .end(function(err,res){
		    projectDeleted = res.body;
		    resStatus = res.status;
            
            /**moment*/
		    dateCreated = moment(projectDeleted.LastSyncedDateTime);
		 	dateCreatedFormat = dateCreated.format('D/M/YYYY');
		 	dateMoment = moment();
		 	dateMomentFormat = dateMoment.format('D/M/YYYY');

		 	expect(resStatus).to.equal(expectedStatus);
		 	expect(projectDeleted.Deleted).to.be.true;

		 	expect(dateMomentFormat).to.equal(dateCreatedFormat);

            done();
		 }); 
    });


	it('POST /projects.json creates a project', function(done){
         	
		expect(resStatus).to.equal(expectedStatus);
		expect(projectCreated.Id).to.not.be.null;
        expect(projectCreated.ParentId).to.be.null;
        expect(projectCreated.ItemsCount).to.be.equal(0);
        expect(projectCreated.Children).to.be.empty;
        expect(projectCreated.Deleted).to.be.false;
        expect(projectCreated.Collapsed).to.be.false;
	    done();
	});



    it('GET /projects.json get a project', function(done){
		
		    request
            .get('https://todo.ly/api/projects/' + projectId + '.json')
            .proxy('http://172.31.90.146:3128')
		    .auth('angelica.rodriguez@fundacion-jala.org','At2406240688')
		    .end(function(err,res){
		    
		    var projectGet = res.body;

            /**moment*/
  	        dateCreated = moment(projectGet.LastSyncedDateTime);
		 	dateCreatedFormat = dateCreated.format('D/M/YYYY');
		 	dateMoment = moment();
		 	dateMomentFormat = dateMoment.format('D/M/YYYY');

		 	 expect(res.status).to.equal(expectedStatus);
		 	 expect(projectGet.Content).to.equal(projectJson.Content);
		 	 expect(projectGet.Icon).to.equal(projectJson.Icon);

		 	 expect(dateMomentFormat).to.equal(dateCreatedFormat);
             done();
            }); 
		 }); 
   
	it('PUT /projects.json put a project', function(done){
		    var  projectPutJson = {
              Content: 'Project PUT Test',
              Icon: 4
            };
			    request
	            .put('https://todo.ly/api/projects/' + projectId + '.json')
	            .proxy('http://172.31.90.146:3128')
			    .auth('angelica.rodriguez@fundacion-jala.org','At2406240688')
			    .send(projectPutJson)
			    .end(function(err,res){
			    var projectPut = res.body;

			    /**moment*/
	  	        dateCreated = moment(projectPut.LastSyncedDateTime);
			 	dateCreatedFormat = dateCreated.format('D/M/YYYY');
			 	dateMoment = moment();
			 	dateMomentFormat = dateMoment.format('D/M/YYYY');

			 	expect(res.status).to.equal(expectedStatus);
			 	expect(projectPut.Content).to.equal(projectPutJson.Content);
  		 	    expect(projectPut.Icon).to.equal(projectPutJson.Icon);

  		 	    expect(dateMomentFormat).to.equal(dateCreatedFormat);
	            done();
			 }); 
	       }); 

	it ('DEL /projects.json delete a project', function(done){
        expect(resStatus).to.equal(expectedStatus);
		expect(projectDeleted.Deleted).to.be.true;
		expect(projectDeleted.Id).to.not.be.null;
        expect(projectDeleted.ParentId).to.be.null;
        expect(projectDeleted.ItemsCount).to.be.equal(0);
        done();
	 }); 
	
});