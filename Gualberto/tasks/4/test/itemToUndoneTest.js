var expect = require('chai').expect;
var request = require('superagent');
require('superagent-proxy')(request);

describe('Acceptance Test for Projects',function () {
    var expectedStatus = 200;
    this.timeout(10000);

    var projectCreated;
    var projectId;
    var itemCreated;
    var itemId;

    before(function (done) {
        var projectJson = {
            Content: 'Project Test',
            Icon: 4
        };

        request
            .post('https://todo.ly/api/projects.json')
            .proxy('http://172.31.90.146:3128')
            .auth('gualy_vc@hotmail.com','password123')
            .send(projectJson)

            .end(function (err,res) {
                projectCreated = res.body;
                projectId = projectCreated.Id;
                done();
            });
    });

    after(function (done) {
        request
            .delete('https://todo.ly/api/projects/'+projectId+'.json')
            .proxy('http://172.31.90.146:3128')
            .auth('gualy_vc@hotmail.com','password123')
            .end(function (err,res) {

                request
                    .delete('https://todo.ly/api/filters/-4/items.json')
                    .proxy('http://172.31.90.146:3128')
                    .auth('gualy_vc@hotmail.com','password123')
                    .end(function (err2, res2) {
                        done();
                    })
            });
    });

    it('Verify that an item checked can be changed to unchecked', function (done) {
        var itemJson = {
            Content: 'Item Test',
            Checked: true,
            ProjectId: projectId
        };

        request
            .post('https://todo.ly/api/items.json')
            .proxy('http://172.31.90.146:3128')
            .auth('gualy_vc@hotmail.com','password123')
            .send(itemJson)

            .end(function (err2,res2) {
                itemCreated = res2.body;
                itemId = itemCreated.Id;

                expect(res2.status).to.equal(expectedStatus)
                expect(itemCreated.Content).to.equal(itemJson.Content)
                expect(itemCreated.Id).to.not.be.null;
                expect(itemCreated.Checked).to.be.true;

                var checkedJson = { Checked: false };

                request
                    .put('https://todo.ly/api/items/'+itemId+'.json')
                    .proxy('http://172.31.90.146:3128')
                    .auth('gualy_vc@hotmail.com','password123')
                    .send(checkedJson)

                    .end(function (err3,res3) {
                        expect(res3.status).to.equal(expectedStatus);
                        expect(res3.body.Checked).to.be.false;
                        done();
                    });
            });
    });
});