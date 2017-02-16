var expect = require('chai').expect;
var request = require('superagent');
require('superagent-proxy')(request);
var proj = require('../../src/projects.js');
var conf = require('../../configuration.json');


describe('projects', function () {
    this.timeout(10000);
    var body;
    var bodyItem;
    var expected = 200;
    var itemJson = {
        Content: 'temporalItem',
        ProjectId: '',
        Checked: false
    }
    var projectJson = {
        Content: "temporalProject1",
        Icon: '4'
    };
    beforeEach(function (done) {
        request
            .post(proj.createNewProject)
            .proxy(conf.proxy)
            .auth(conf.user, conf.pass)
            .send(projectJson)
            .end(function (err, res) {
                body = res.body;
                itemJson.ProjectId = body.Id;
                expect(res.status).to.equal(expected);
                request
                    .post(proj.createItem.format(body.Id))
                    .proxy(conf.proxy)
                    .auth(conf.user, conf.pass)
                    .send(itemJson)
                    .end(function (err, res) {
                        bodyItem = res.body;
                        itemJson.Checked=true;
                        expect(res.status).to.equal(expected);
                        request
                            .put(proj.udateItem.format(bodyItem.Id))
                            .proxy(conf.proxy)
                            .auth(conf.user, conf.pass)
                            .send(itemJson)
                            .end(function (err, res) {
                                console.log(itemJson);
                                console.log(bodyItem);
                                itemJson.Checked=false;
                                expect(res.status).to.equal(expected);
                                done();
                            })
                    })
            })
    })

    afterEach(function (done) {
        this.timeout(10000);
        request
            .del(proj.deleteProjectById.format(body.Id))
            .proxy(conf.proxy)
            .auth(conf.user, conf.pass)
            .end(function (err, res) {
                body = res.body;
                expect(res.status).to.equal(expected);
                request.del('https://todo.ly/api/filters/-4/items.json')
                    .proxy(conf.proxy)
                    .auth(conf.user,conf.pass)
                    .end(function (err, res) {
                        expect(res.status).to.equal(expected);
                        done()
                    })
            })
    })

    it('project done', function (done) {
        request
            .put(proj.udateItem.format(bodyItem.Id))
            .proxy(conf.proxy)
            .auth(conf.user, conf.pass)
            .send(itemJson)
            .end(function (err, res) {
                expect(bodyItem.Checked).to.be.false;
                done();
            })
    })
})