/**
 * Created by David on 2/15/2017.
 */

var expect = require('chai').expect;
var request = require('superagent');
require('superagent-proxy')(request);
var conf = require('../../tsconfig.json');

describe('Acceptance Test for Items', function () {
    this.timeout(5000);
    var status, proxy, user, pass;
    var urlItem, ext, dom, itemJson, projectJson;
    var itemCreated, projectCreated, actual, urlProject;

    before(function () {
        status = conf.statusOk;
        urlItem = conf.url + 'items';
        urlProject = conf.user + 'projects';
        proxy = conf.proxy;
        user = conf.user;
        pass = conf.password;
        ext = conf.extension;
        dom = urlItem + conf.slash;
    });

    beforeEach(function (done) {

        projectJson = {
            Content: 'Project Test',
            Icon: 4
        };

        request.post(urlProject + ext)
            .proxy(proxy)
            .auth(user, pass)
            .send(projectJson)
            .end(function (err, res) {
                projectCreated = res.body;

                itemJson = {
                    Content: 'Item Test',
                    Checked: true,
                    ProjectId: projectCreated.Id
                };

                request.post(urlItem + ext)
                    .proxy(proxy)
                    .auth(user, pass)
                    .send(itemJson)
                    .end(function (err, res) {
                        itemCreated = res.body;
                        actual = res.status;
                        done();
                    });
            });
    });

    afterEach(function (done) {
        request.del(urlProject + '/' + projectCreated.Id + ext)
            .proxy(proxy)
            .auth(user, pass)
            .end(function (err, res) {
                request.del('https://todo.ly/api/filters/-4/items.json')
                    .proxy(proxy)
                    .auth(user, pass)
                    .end(function (err, res) {
                        done();
                    });
            });
    });

    it('PUT /items/[id].json checked can modify to undone', function (done) {
        expect(actual).to.equal(status)
        expect(itemCreated.Content).to.equal(itemJson.Content)
        expect(itemCreated.Id).to.not.be.null;
        expect(itemCreated.Checked).to.be.true;

        var itemModify = {
            Checked: false
        };

        request.put(dom + itemCreated.Id + ext)
            .proxy(proxy)
            .auth(user, pass)
            .send(itemModify)
            .end(function (err, res) {
                expect(res.body.Checked).to.be.false;
                done();
            });
    });
});
