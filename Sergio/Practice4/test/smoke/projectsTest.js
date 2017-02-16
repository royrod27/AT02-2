var expect = require('chai').expect;
var request = require('superagent');
require('superagent-proxy')(request);
var conf = require('../../configuration.json');
var expected = 200;

String.prototype.format = function () {
    var content = this;
    for (var i = 0; i < arguments.length; i++) {
        var replacement = '{' + i + '}';
        content = content.replace(replacement, arguments[i]);
    }
    return content;
};

//get all projects
getAllProjects = 'https://todo.ly/api/projects.json';
//Create New Project
createNewProject = 'https://todo.ly/api/projects.json';
//Get Project By Id
getProjectById = 'https://todo.ly/api/projects/{0}.json';
//Update Project By Id
updateProjectById = 'https://todo.ly/api/projects/{0}.json';
//Delete Project By Id
deleteProjectById = 'https://todo.ly/api/projects/{0}.json';

describe('smoke test of projects', function () {
    it('Get all projects', function (done) {
        expected = 200;
        request
            .get(getAllProjects)
            .proxy(conf.proxy)
            .auth(conf.user, conf.pass)
            .end(function (err, res) {
                expect(expected).to.equal(res.status);
            })
        done();
    })
    it('Create a new project', function (done) {
        expected = 200;
        var newProject = {Icon: '4'};
        request
            .post(createNewProject)
            .proxy(conf.proxy)
            .auth(conf.user, conf.pass)
            .send(newProject)
            .end(function (err, res) {
                expect(expected).to.equal(res.status);
            })
        done();
    })
    it('Update project by id', function (done) {
        expected = 200;
        var updateProject = {Icon: '4'};
        request
            .put(updateProjectById.format(-1))
            .proxy(conf.proxy)
            .auth(conf.user, conf.pass)
            .send(updateProject)
            .end(function (err, res) {
                expect(expected).to.equal(res.status);
            })
        done();
    })
    it('Delete project by id', function (done) {
        expected = 200;
        request
            .del(deleteProjectById.format(-1))
            .proxy(conf.proxy)
            .auth(conf.user, conf.pass)
            .end(function (err, res) {
                expect(expected).to.equal(res.status);
            })
        done();
    })
})