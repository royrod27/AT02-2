/**
 * Created by Administrator on 2/14/2017.
 */
var expect = require('chai').expect;
var request = require('superagent');
require('superagent-proxy')(request);

describe('Smoke Test for Projects', function () {
    var expectedStatus = 200;
    this.timeout(5000);

    it('GET / projects.json returns 200', function (done) {
        request
            .get('https://todo.ly/api/projects.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Jorge.Forero@fundacion-jala.org', 'jb&11235')
            .end(function (err, res) {
                expect(res.status).to.equal(expectedStatus);
                done();
            })
    });

    it('POST / projects.json returns 200', function (done) {
        var project = {Icon: 4};

        request
            .post('https://todo.ly/api/projects.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Jorge.Forero@fundacion-jala.org', 'jb&11235')
            .send(project)
            .end(function (err, res) {
                expect(res.status).to.equal(expectedStatus);
                done();
            });
    })

    it('PUT / projects/[id].json returns 200', function (done) {
        var idProject = -1;
        var project = {Icon: 4};

        request
            .put('https://todo.ly/api/projects/' + idProject + '.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Jorge.Forero@fundacion-jala.org', 'jb&11235')
            .send(project)
            .end(function (err, res) {
                expect(expectedStatus).to.equal(res.status);
                done();
            });
    })

    it('DELETE / projects/[id].json returns 200', function (done) {
        var idProject = 1;

        request
            .del('https://todo.ly/api/projects/' + idProject + '.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Jorge.Forero@fundacion-jala.org', 'jb&11235')
            .end(function (err, res) {
                expect(expectedStatus).to.equal(res.status);
                done();
            });
    })
});