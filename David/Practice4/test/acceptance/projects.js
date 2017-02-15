/**
 * Created by David on 2/14/2017.
 */

var expect = require('chai').expect;
var request = require('superagent');
require('superagent-proxy')(request);
var conf = require('../../tsconfig.json');

describe('Acceptance Test for Projects', function () {
    this.timeout(30000);
    var actual;
    var projectJson;
    var del;
    var projectCreated;
    var status;
    var urlProject;
    var proxy;
    var user;
    var pass;
    var ext;
    var dom;

    before(function () {
        status = conf.statusOk;
        urlProject = conf.url + 'projects';
        proxy = conf.proxy;
        user = conf.user;
        pass = conf.password;
        ext = conf.extension;
        dom = urlProject + conf.slash;
        del = false
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
                actual = res.status;
                done();
            });
    });

    afterEach(function (done) {
        request.del(dom + projectCreated.Id + ext)
            .proxy(proxy)
            .auth(user, pass)
            .end(function (err, res) {
                del = res.body.Deleted;
                done();
            });
    });

    it('POST /projects.json creates a project', function () {
        expect(actual).to.equal(status);
        expect(projectCreated.Content).to.equal(projectJson.Content);
        expect(projectCreated.Icon).to.equal(projectJson.Icon);

        /* More assertions */
        expect(projectCreated.Id).to.not.be.null;
        expect(projectCreated.ParentId).to.be.null;
        expect(projectCreated.ItemsCount).to.be.equal(0);
        expect(projectCreated.Children).to.be.empty;
        expect(projectCreated.Deleted).to.be.false;

    });

    it('PUT /projects.json modify a project', function (done) {
        var projectJson = {
            Content: 'Automation',
            Icon: 5
        };

        request.put(dom + projectCreated.Id + ext)
            .proxy(proxy)
            .auth(user, pass)
            .send(projectJson)
            .end(function (err, res) {
                var projectModify = res.body;
                expect(projectJson.Content).to.equal(projectModify.Content)
                expect(projectJson.Icon).to.equal(projectModify.Icon)
                done();
            });

    });

    it('DELETE /projects/[id].json delete a project', function () {

        expect(del).to.be.true;
        expect(actual).to.equal(status);

    });
});