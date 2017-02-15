var expect = require('chai').expect;
var request = require('superagent');
require('superagent-proxy')(request); //extending the functionality of request

describe('ACCEPTANCE Test for Projects', function () {
    // beforeach(function (done) {
    //     //create
    // })
    // aftereach(function (done) {
    //     //delete
    // })
    var expectedStatus = 200;
    this.timeout(10000);

    it('POST /projects.json creates a project', function (done) {
        var projectJson = {
            Content: 'Fher POST',
            Icon: 10
        }

        request
            .post('https://todo.ly/api/projects.json')
            .proxy('http://172.31.90.146:3128')
            .auth('fernando.iquiza@fundacion-jala.org', 'MTat676435019')
            .send(projectJson)
            .end(function (err, res) {
                // console.log('error: ', + err);
                console.log('result body ... ');
                console.log(res.body);
                // console.log('result status: ', res.status);

                var projectCreated = res.body;
                expect(projectCreated.Content).to.equal(projectJson.Content);
                expect(projectCreated.Icon).to.equal(projectJson.Icon);

                /* More Assertions */
                expect(projectCreated.Id).to.not.be.null;
                expect(projectCreated.ParentId).to.be.null;
                expect(projectCreated.ItemsCount).to.be.equal;
                expect(projectCreated.Children).to.be.empty;
                expect(projectCreated.Deleted).to.be.false;

                /* And More assertions */
                done();
            });
    });

    it('DELETE /projects.json delete the name a project', function (done) {

        var projectJson = {
            Content: "Fher DELETE",
            Icon: 2
        }
        request
            .post('https://todo.ly/api/projects.json')
            .proxy('http://172.31.90.146:3128')
            .auth('fernando.iquiza@fundacion-jala.org', 'MTat676435019')
            .send(projectJson)
            .end(function (err, res) {
                var projToDel = res.body;
                expect(200).to.equal(res.status);
                request
                    .del('https://todo.ly/api/projects/' + projToDel.Id + '.json')
                    .proxy('http://172.31.90.146:3128')
                    .auth('fernando.iquiza@fundacion-jala.org', 'MTat676435019')
                    .end(function (err, res) {
                        var parameterDEL = res.body;
                        console.log(parameterDEL);
                        expect(true).to.equal(parameterDEL.Deleted);
                        done();
                    })
            })
    });

    it('PUT /projects.json Modify the name a project', function (done) {

        var projectJson = {
            Content: "Fher PUT",
            Icon: 2
        }

        var projectModified = {
            Content: 'PUT Fher'
        }

        request
            .post('https://todo.ly/api/projects.json')
            .proxy('http://172.31.90.146:3128')
            .auth('fernando.iquiza@fundacion-jala.org', 'MTat676435019')
            .send(projectJson)
            .end(function (err, res) {
                var projectId = res.body;
                expect(200).to.equal(res.status);

                request
                    .put('https://todo.ly/api/projects/' + projectId.Id + '.json')
                    .proxy('http://172.31.90.146:3128')
                    .auth('fernando.iquiza@fundacion-jala.org', 'MTat676435019')
                    .send(projectModified)
                    .end(function (err, res) {
                        var parameterPUT = res.body;
                        console.log(parameterPUT);
                        expect(parameterPUT.Content).to.equal(projectModified.Content);

                        request
                            .del('https://todo.ly/api/projects/' + parameterPUT.Id + '.json')
                            .proxy('http://172.31.90.146:3128')
                            .auth('fernando.iquiza@fundacion-jala.org', 'MTat676435019')
                            .end(function (err, res) {
                                var parameterDEL = res.body;
                                console.log(parameterDEL);
                                expect(true).to.equal(parameterDEL.Deleted);
                                done();
                            })
                    })
            });
    });

    it('GET /projects.json retrieves a project by its ID', function (done) {

        var projectJson = {
            Content: "FherGETByID",
            Icon: 8
        }

        request
            .post('https://todo.ly/api/projects.json')
            .proxy('http://172.31.90.146:3128')
            .auth('fernando.iquiza@fundacion-jala.org', 'MTat676435019')
            .send(projectJson)
            .end(function (err, res) {
                var projectId = res.body;
                expect(200).to.equal(res.status);

                request
                    .get('https://todo.ly/api/projects/' + projectId.Id + '.json')
                    .proxy('http://172.31.90.146:3128')
                    .auth('fernando.iquiza@fundacion-jala.org', 'MTat676435019')
                    .end(function (err, res) {
                        var parameterGetById = res.body;
                        console.log(parameterGetById.Id);
                        expect(parameterGetById.Content).to.equal(projectJson.Content);
                        done();
                    })
            });
    });

    it('GET /projects.json obtains the full list of projects', function(done){
        request
            .get('https://todo.ly/api/projects.json')
            .proxy('http://172.31.90.146:3128')
            .auth('fernando.iquiza@fundacion-jala.org', 'MTat676435019')
            .end(function(err, res){
                 console.log(res.body);
                done();
            });
    });

});
