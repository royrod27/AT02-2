/**
 * Created by Administrator on 2/13/2017.
 */

var expect = require('chai').expect;
var request = require('superagent');
require('superagent-proxy')(request);

describe('Projects', function () {
    it('GET /projects.json', function (done) {
        request
            .get('https://todo.ly/api/projects.json')
            .proxy('http://172.31.90.146:3128')
            .auth('ariel.vallejos@fundacion-jala.org', 'AT02wolfy')
            .end(function (err, res) {
                console.log('error ' + err);
                // console.log('result body ...');
                // console.log(res.body);
                // console.log('result status: ' + res.status);
                expect(res.status).to.equal(200);
                done();
            });
    });
});