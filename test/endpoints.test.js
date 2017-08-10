const expect = require('expect');
const request = require('supertest');
const app = require('./../index.js').app;
// console.log(app);

describe('GET /works', function() {
  it('return an array of all works', function(done) {
    request(app)
      .get('/works')
      .expect(200)
      .expect(function(res) {
        expect(res.body.length > 0);
      })
    .end(function(err, res) {
      if (err) {
        return done(err);
      }
      done();
    });
  });
});
