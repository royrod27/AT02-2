var expect = require('chai').expect;
var request = require('superagent');
require('superagent-proxy')(request);

describe('Projects', function () {
    var expectedStatus = 200;
    this.timeout(2500);

    it('GET /projects.json returns 200', function (done) {
        request
            .get('https://todo.ly/api/projects.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Roy.Rodriguez@fundacion-jala.org', 'Sabbath27')
            .end(function (err, res) {
                expect(res.status).to.equal(expectedStatus);
                done();
            })
    });

    it('POST /projects.json returns 200', function (done) {
        request
            .post('https://todo.ly/api/projects.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Roy.Rodriguez@fundacion-jala.org', 'Sabbath27')
            .send({
                //Content: 'AT02',
                Icon: '2'
            })
            .end(function (err, res) {
                console.log(res.body);
                expect(res.status).to.equal(expectedStatus);
                done();
            });
    });

    it('PUT /projects/[id].json returns 200', function (done) {
        var idProject = -1;
        var project = {Icon: 4};
        request
            .put('https://todo.ly/api/projects/' + idProject + '.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Roy.Rodriguez@fundacion-jala.org', 'Sabbath27')
            .send(project)
            .end(function (err, res) {
                console.log(res.body);
                expect(res.status).to.equal(expectedStatus);
                done();
            });
    });

    it('DELETE /projects/[id].json returns 200', function (done) {
        var idProject = -1;
        request
            .del('https://todo.ly/api/projects/' + idProject + '.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Roy.Rodriguez@fundacion-jala.org', 'Sabbath27')
            .end(function (err, res) {
                console.log(res.body);
                expect(res.status).to.equal(expectedStatus);
                done();
            });
    });


});