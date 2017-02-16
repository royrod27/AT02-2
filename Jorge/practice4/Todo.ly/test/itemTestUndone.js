/**
 * Created by Administrator on 2/15/2017.
 */
var expect = require('chai').expect;
var request = require('superagent');
require('superagent-proxy')(request);

describe('Test for Item', function () {
    this.timeout(8000);
    var projectJson = {};
    var itemJson = {};
    var itemJsonUpdate = {};
    var resProjectJson = {};
    var resItemJson = {};
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
                resProjectJson = res.body;
                done();
            });
    });

    beforeEach(function (done) {
        itemJson = {
            Content: 'ItemTest',
            ProjectId: '' + resProjectJson.Id + '',
            DueDate: ''
        };

        itemJsonUpdate = {
            Checked: true
        };
        request

            .post('https://todo.ly/api/items.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Jorge.Forero@fundacion-jala.org', 'jb&11235')
            .send(itemJson)
            .end(function (err, res) {
                expect(res.status).to.equal(expectedStatus);
                resItemJson = res.body;

                request
                    .put('https://todo.ly/api/items/' + resItemJson.Id + '.json')
                    .proxy('http://172.31.90.146:3128')
                    .auth('Jorge.Forero@fundacion-jala.org', 'jb&11235')
                    .send(itemJsonUpdate)
                    .end(function (err, res) {
                        done();
                    });
            });
    });

    after(function (done) {
        request
            .del('https://todo.ly/api/projects/' + resProjectJson.Id + '.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Jorge.Forero@fundacion-jala.org', 'jb&11235')
            .end(function (err, res) {
                expect(res.status).to.equal(expectedStatus);

                request
                    .del('http://todo.ly/api/filters/-4/items.json')
                    .proxy('http://172.31.90.146:3128')
                    .auth('Jorge.Forero@fundacion-jala.org', 'jb&11235')
                    .end(function (err, res) {
                        expect(res.status).to.equal(expectedStatus);
                        done();
                    });
            });
    });


    it('PUT / item/[id].json update done to undone item', function (done) {
        itemJsonUpdate = {
            Checked: false
        };

        request
            .put('https://todo.ly/api/items/' + resItemJson.Id + '.json')
            .proxy('http://172.31.90.146:3128')
            .auth('Jorge.Forero@fundacion-jala.org', 'jb&11235')
            .send(itemJsonUpdate)
            .end(function (err, res) {
                expect(res.status).to.equal(expectedStatus);
                expect(res.body.Id).to.equal(resItemJson.Id);
                expect(res.body.Checked).to.be.false;
                done();
            });

    });
})

