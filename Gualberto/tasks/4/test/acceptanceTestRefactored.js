var expect = require('chai').expect;
var request = require('superagent');
require('superagent-proxy')(request);
var moment = require('moment');


describe('Acceptance Test for Projects', function () {
    var res_post_body;
    var res_post_status;
    var res_del_status;
    var res_get_body;
    var projectId;
    var date;
    var del = false;

    var expectedStatus = 200;
    this.timeout(5000);

    var projectJson = {
        Content: 'Project Test',
        Icon: 4
    };


    beforeEach(function (done) {
        request
            .post('https://todo.ly/api/projects.json')
            .proxy('http://172.31.90.146:3128')
            .auth('gualy_vc@hotmail.com','password123')
            .send(projectJson)

            .end(function (err_post,res_post) {        
                res_post_status = res_post.status;
                res_post_body = res_post.body;
                projectId = res_post_body.Id;
                done();
            });
    });


    afterEach(function (done) {
        request
            .delete('https://todo.ly/api/projects/'+projectId+'.json')
            .proxy('http://172.31.90.146:3128')
            .auth('gualy_vc@hotmail.com','password123')
            .end(function (err_del,res_del) {
                res_del_status = res_del.status;
                del = res_del.body.Deleted;
                done();
            });
    });


    describe('API-POST',function () {
        it('POST /projects.json creates a project', function (done) {
            expect(res_post_status).to.equal(expectedStatus);
            expect(res_post_body.Content).to.equal(projectJson.Content);
            expect(res_post_body.Icon).to.equal(projectJson.Icon);

            date = moment(res_post_body.LastSyncedDateTime).format('l');
            expect(date).to.equal(moment().format('l'));

            //More Assertions
            expect(res_post_body.Id).to.not.be.null;
            expect(res_post_body.ParentId).to.be.null;
            expect(res_post_body.ItemsCount).to.be.equal(0);
            expect(res_post_body.Children).to.be.empty;
            expect(res_post_body.Deleted).to.be.false;
            expect(res_post_body.Collapsed).to.be.false;
            done();
        });
    });

    describe('API-PUT',function () {
        it('PUT /projects.json update a project', function (done) {
            var iconJson = { Icon:3 };

            request
                .put('https://todo.ly/api/projects/'+projectId+'.json')
                .proxy('http://172.31.90.146:3128')
                .auth('gualy_vc@hotmail.com','password123')
                .send(iconJson)

                .end(function (err_put,res_put) {               
                    var projectModified = res_put.body;

                    expect(res_put.status).to.equal(expectedStatus);
                    expect(res_put.body.Icon).to.equal(iconJson.Icon)

                    date = moment(projectModified.LastUpdateDate).format('l');
                    expect(date).to.equal(moment().format('l'));

                    expect(projectModified.Id).to.not.be.null;
                    expect(projectModified.ParentId).to.be.null;
                    expect(projectModified.ItemsCount).to.be.equal(0);
                    expect(projectModified.Children).to.be.empty;
                    expect(projectModified.Deleted).to.be.false;
                    expect(projectModified.Collapsed).to.be.false;
                    expect(projectModified.Deleted).to.be.false;
                    done();
                });
        });
    });

    describe('API-GET',function () {
        it('GET /projects.json get a project by id', function (done) {
            request
                .get('https://todo.ly/api/projects/'+projectId+'.json')
                .proxy('http://172.31.90.146:3128')
                .auth('gualy_vc@hotmail.com','password123')

                .end(function (err_get,res_get) {            
                    expect(res_get.status).to.equal(expectedStatus);
                    res_get_body = res_get.body;

                    date = moment(res_get_body.LastSyncedDateTime).format('l');
                    expect(res_get_body.Id).to.not.be.null;
                    expect(res_get_body.ParentId).to.be.null;
                    expect(res_get_body.ItemsCount).to.be.equal(0);
                    expect(res_get_body.Children).to.be.empty;
                    expect(res_get_body.Deleted).to.be.false;
                    expect(res_get_body.Collapsed).to.be.false;
                    done();
                });
        });
    });

    describe('API-DELETE',function () {
        it('DELETE /projects.json delete a project', function (done) {
            expect(del).to.be.true;
            expect(res_del_status).to.equal(expectedStatus);

            expect(date).to.equal(moment().format('l'));
            expect(res_post_body.Id).to.not.be.null;
            expect(res_post_body.ParentId).to.be.null;
            expect(res_post_body.ItemsCount).to.be.equal(0);
            expect(res_post_body.Children).to.be.empty;
            expect(res_post_body.Deleted).to.be.false;
            expect(res_post_body.Collapsed).to.be.false;
            done();
        });
    });
});