/**
 * Created by Administrator on 2/14/2017.
 */
var expect = require('chai').expect;
var request = require('superagent');
require('superagent-proxy')(request);

describe('Acceptance Test for Projects', function () {
    this.timeout(8000);
    var projectJson = {};
    var projectJsonUpdate = {};
    var resJson = {};
    var expectedStatus = 200;

    before(function (done) {
        projectJson = projectJson = {
            Content: 'ProjectTest',
            Icon: 4
        };

        request
            .post('https://todo.ly/api/projects.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Jorge.Forero@fundacion-jala.org', 'jb&11235')
            .send(projectJson)
            .end(function (err, res) {
                expect(res.status).to.equal(expectedStatus);
                resJson = res.body;
                done();
            });
    });

    after(function (done) {
        request
            .del('https://todo.ly/api/projects/' + resJson.Id + '.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Jorge.Forero@fundacion-jala.org', 'jb&11235')
            .end(function (err, res) {
                expect(res.status).to.equal(expectedStatus);
                done();
            });
    });

    it('GET / projects.json get a project', function (done) {
        request
            .get('https://todo.ly/api/projects/' + resJson.Id + '.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Jorge.Forero@fundacion-jala.org', 'jb&11235')
            .end(function (err, res) {
                //console.log(res.body);
                expect(res.status).to.equal(expectedStatus);
                expect(projectJson.Content).to.equal(res.body.Content);
                expect(projectJson.Icon).to.equal(res.body.Icon);

                expect(res.body.Id).to.not.be.null;
                expect(res.body.ParentId).to.be.null;
                expect(res.body.ItemsCount).to.be.equal(0);
                expect(res.body.Children).to.be.empty;
                expect(res.body.Deleted).to.be.false;
                done();
            });
    });

    it('PUT / projects/[id].json update a project', function (done) {
        projectJsonUpdate = {
            Content: 'ProjectTestUpdate',
            Icon: 4
        };

        request
            .put('https://todo.ly/api/projects/' + resJson.Id + '.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Jorge.Forero@fundacion-jala.org', 'jb&11235')
            .send(projectJsonUpdate)
            .end(function (err, res) {
                //console.log(res.body);
                expect(res.status).to.equal(expectedStatus);
                expect(projectJsonUpdate.Content).to.equal(res.body.Content);
                expect(projectJsonUpdate.Icon).to.equal(res.body.Icon);

                expect(res.body.Id).to.not.be.null;
                expect(res.body.ParentId).to.be.null;
                expect(res.body.ItemsCount).to.be.equal(0);
                expect(res.body.Children).to.be.empty;
                expect(res.body.Deleted).to.be.false;
                done();
            });
    });
    it('POST / projects.json create a project', function (done) {
        projectJson = {
            Content: 'ProjectTest',
            Icon: 4
        };

        request
            .post('https://todo.ly/api/projects.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Jorge.Forero@fundacion-jala.org', 'jb&11235')
            .send(projectJson)
            .end(function (err, res) {
                //console.log(res.body);
                expect(res.status).to.equal(expectedStatus);
                expect(res.body.Content).to.equal(projectJson.Content);
                expect(res.body.Icon).to.equal(projectJson.Icon);

                expect(res.body.Id).to.not.be.null;
                expect(res.body.ParentId).to.be.null;
                expect(res.body.ItemsCount).to.be.equal(0);
                expect(res.body.Children).to.be.empty;
                expect(res.body.Deleted).to.be.false;

                request
                    .del('https://todo.ly/api/projects/' + res.body.Id + '.json')
                    .proxy('http://172.31.90.146:3128')
                    .auth('Jorge.Forero@fundacion-jala.org', 'jb&11235')
                    .end(function (err, res) {
                        expect(res.status).to.equal(expectedStatus);
                        done();
                    });
            });
    });

    it('DELETE / projects/[id].json delete a project', function (done) {
        projectJson = {
            Content: 'ProjectTest',
            Icon: 4
        };

        request
            .post('https://todo.ly/api/projects.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Jorge.Forero@fundacion-jala.org', 'jb&11235')
            .send(projectJson)
            .end(function (err, res) {
                //console.log(res.body);
                expect(res.status).to.equal(expectedStatus);

                request
                    .del('https://todo.ly/api/projects/' + res.body.Id + '.json')
                    .proxy('http://172.31.90.146:3128')
                    .auth('Jorge.Forero@fundacion-jala.org', 'jb&11235')
                    .end(function (err, res) {
                        expect(res.status).to.equal(expectedStatus);

                        expect(res.body.Id).to.not.be.null;
                        expect(res.body.ParentId).to.be.null;
                        expect(res.body.ItemsCount).to.be.equal(0);
                        expect(res.body.Children).to.be.empty;
                        expect(res.body.Deleted).to.be.true;
                        done();
                    });
            });

    });

});