var expect  = require('chai').expect;
var request = require('request');

it('Main page content', function(done) {
    request('https://infinite-reef-28548.herokuapp.com/' , function(error, response, body) {
        expect(body).to.contain('Hello');
        done();
    });
});