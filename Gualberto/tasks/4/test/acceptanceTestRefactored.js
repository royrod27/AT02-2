var expect = require('chai').expect;
var request = require('superagent');
require('superagent-proxy')(request);


describe('Acceptance Test for Projects', function () {
    var res_post_body;
    var res_post_status;
    var res_del_status;
    var projectId;

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

                done();
            });
    });


    describe('API-POST',function () {
        it('POST /projects.json creates a project', function (done) {

            expect(res_post_status).to.equal(expectedStatus);
            expect(res_post_body.Content).to.equal(projectJson.Content);
            expect(res_post_body.Icon).to.equal(projectJson.Icon);

            expect(res_post_body.Id).to.not.be.null;
            expect(res_post_body.ParentId).to.be.null;
            expect(res_post_body.ItemsCount).to.be.equal(0);
            expect(res_post_body.Children).to.be.empty;
            expect(res_post_body.Deleted).to.be.false;

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
                    expect(res_put.status).to.equal(expectedStatus);
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
                    done();
                });
        });
    });

    // describe('API-DELETE',function () {
    //
    //     it('DELETE /projects.json delete a project', function (done) {
    //
    //         request
    //             .delete('https://todo.ly/api/projects/'+projectId+'.json')
    //             .proxy('http://172.31.90.146:3128')
    //             .auth('gualy_vc@hotmail.com','password123')
    //             .end(function (err2,res2) {
    //
    //                 expect(res2).to.equal(expectedStatus);
    //                 done();
    //             });
    //     });
    // });
});

describe('Acceptance Test for Projects',function () {
    var expectedStatus = 200;
    this.timeout(5000);

    it('DELETE /projects.json delete a project', function (done) {
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
                var projectCreated = res.body;
                var projectId = projectCreated.Id;

                request
                    .delete('https://todo.ly/api/projects/'+projectId+'.json')
                    .proxy('http://172.31.90.146:3128')
                    .auth('gualy_vc@hotmail.com','password123')
                    .end(function (err2,res2) {

                        expect(res2.status).to.equal(expectedStatus);
                        done();
                    });
            });
    });
});