var expect = require('chai').expect;
var request = require('superagent');
require('superagent-proxy')(request);


describe('Acceptance Items', function () {
    var expectedStatus = 200;
    this.timeout(10000);

    var projectJson = {
        Content: 'Project Test',
        Icon: 4
    };
    var projectId;
    var itemId;

    beforeEach(function (done) {
        request.post('https://todo.ly/api/projects.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Roy.Rodriguez@fundacion-jala.org', 'Sabbath27')
            .send(projectJson)
            .end(function (err, res) {
                projectId = res.body.Id;

                var itemJson = {
                    Content: 'ItemTest',
                    ProjectId: projectId,
                    Checked: 'false'
                };

                request.post('https://todo.ly/api/items.json')
                    .proxy('http://172.31.90.146:3128')
                    .auth('Roy.Rodriguez@fundacion-jala.org', 'Sabbath27')
                    .send(itemJson)
                    .end(function (err, res) {
                        itemId = res.body.Id;

                        var checkedJson = {
                            Checked: true
                        };

                        request.put('https://todo.ly/api/items/' + itemId + '.json')
                            .proxy('http://172.31.90.146:3128')
                            .auth('Roy.Rodriguez@fundacion-jala.org', 'Sabbath27')
                            .send(checkedJson)
                            .end(function (err, res) {
                                expect(res.body.Checked).to.be.true;
                                done();
                            });

                    });


            });

    });


    it(' Items', function (done) {

        var checkedJson = {
            Checked: false
        };

        request.put('https://todo.ly/api/items/' + itemId + '.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Roy.Rodriguez@fundacion-jala.org', 'Sabbath27')
            .send(checkedJson)
            .end(function (err, res) {
                expect(res.body.Checked).to.be.false;
                expect(res.body.ProjectId).to.equal(projectId);

                done();
            });
    });


    afterEach(function (done) {
        request.del('https://todo.ly/api/projects/' + projectId + '.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Roy.Rodriguez@fundacion-jala.org', 'Sabbath27')
            .end(function (err, res) {

                request.del('https://todo.ly/api/filters/-4/items.json')
                    .proxy('http://172.31.90.146:3128')
                    .auth('Roy.Rodriguez@fundacion-jala.org', 'Sabbath27')
                    .end(function (err, res) {
                        done()
                    })
            })
    })
});