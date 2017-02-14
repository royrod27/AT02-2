var expect = require('chai').expect;
var request = require('superagent');
require('superagent-proxy')(request);


describe('Acceptance Projects', function () {


    var expectedStatus = 200;
    this.timeout(10000);

    var projectJson = {
        Content: 'Project Test',
        Icon: 4
    };
    var auxId;

    beforeEach(function (done) {
        request.post('https://todo.ly/api/projects.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Roy.Rodriguez@fundacion-jala.org', 'Sabbath27')
            .send(projectJson)
            .end(function (err, res) {
                auxId = res.body.Id;
                done()
            })

    });

    afterEach(function (done) {
        request.del('https://todo.ly/api/projects/' + auxId + '.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Roy.Rodriguez@fundacion-jala.org', 'Sabbath27')
            .end(function (err, res) {
                expect(res.status).to.equal(expectedStatus);
                done();
            })
    });

    it('POST /projects.json creates a project', function (done) {
        var projectJson = {
            Content: 'Project Test',
            Icon: 4
        };
        request
            .post('https://todo.ly/api/projects.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Roy.Rodriguez@fundacion-jala.org', 'Sabbath27')
            .send(projectJson)
            .end(function (err, res) {
                var projectCreated = res.body;
                expect(res.status).to.equal(expectedStatus);
                expect(projectCreated.Content).to.equal(projectJson.Content);
                expect(projectCreated.Icon).to.equal(projectJson.Icon);
                /*More Assertions*/
                expect(projectCreated.Id).to.not.be.null;
                expect(projectCreated.ParentId).to.be.null;
                expect(projectCreated.ItemsCount).to.equal(0);
                expect(projectCreated.Children).to.be.empty;
                expect(projectCreated.Deleted).to.be.false;

                request.del('https://todo.ly/api/projects/' + res.body.Id + '.json')
                    .proxy('http://172.31.90.146:3128')
                    .auth('Roy.Rodriguez@fundacion-jala.org', 'Sabbath27')
                    .end(function (err, res) {
                        expect(res.status).to.equal(expectedStatus);
                        done();
                    });
            });
    });

    it('PUT /projects/id.json creates a project', function (done) {
        /*Requirements*/
        var newProjectJson = {
            Content: 'Project Put',
            Icon: 3
        };
        request.put('https://todo.ly/api/projects/' + auxId + '.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Roy.Rodriguez@fundacion-jala.org', 'Sabbath27')
            .send(newProjectJson)
            .end(function (err, res) {
                expect(res.status).to.equal(expectedStatus);
                expect(res.body.Icon).to.equal(newProjectJson.Icon);
                done();
            });

    });

    it('DELETE /projects/id.json creates a project', function (done) {
        /*Requirements*/
        var idAuxProject = 0;
        var projectJson = {
            Content: 'Project Delete',
            Icon: 4
        };
        request.post('https://todo.ly/api/projects.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Roy.Rodriguez@fundacion-jala.org', 'Sabbath27')
            .send(projectJson)
            .end(function (err, res) {
                idAuxProject = res.body.Id;
                /*Delete*/
                request.del('https://todo.ly/api/projects/' + idAuxProject + '.json')
                    .proxy('http://172.31.90.146:3128')
                    .auth('Roy.Rodriguez@fundacion-jala.org', 'Sabbath27')
                    .end(function (err, res) {
                        expect(res.body.Deleted).to.be.true;
                        expect(res.status).to.equal(expectedStatus);
                        done();
                    })
            });
    });


    it('GET /projects/id.json creates a project', function (done) {
       request.get('https://todo.ly/api/projects/' + auxId + '.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Roy.Rodriguez@fundacion-jala.org', 'Sabbath27')
            .end(function (err, res) {
                expect(res.status).to.equal(expectedStatus);
                expect(res.body.Icon).to.equal(projectJson.Icon);
                done()
            });

    });
});