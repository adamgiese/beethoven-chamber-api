const expect = require('expect');
const request = require('supertest');
const works = require('./../works.js');
const app = require('./../index.js').app;
// console.log(app);

describe('GET /works', function() {
  it('should return an array of all works', function(done) {
    request(app)
      .get('/works')
      .expect(200)
      .expect(function(res) {
        expect(res.body.length).toBe(works.length);
      })
    .end(function(err, res) {
      if (err) { return done(err); }
      done();
    });
  });
});

describe('GET /works?opus=18', function() {
  it('should return an array of the opus 18 string quartets', function(done) {
    request(app)
      .get('/works?opus=18')
      .expect(200)
      .expect(function(res) {
        expect(res.body.length).toBe(6);
        expect(res.body[0].genre).toBe('String Quartet');
      })
    .end(function(err, res) {
      if (err) { return done(err); }
      done();
    });
  });
});

describe('GET /works?key=I', function() {
  it('should return a 400 status and error message', function(done) {
    request(app)
      .get('/works?key=I')
      .expect(400)
      .expect(function(res) {
        expect(res.body.message).toBe('Invalid key.');
      })
    .end(function(err, res) {
      if (err) { return done(err); }
      done();
    });
  });
});

describe('GET /works?key=Cs&mode=Major', function() {
  it('should return a 200 status and empty results message', function(done) {
    request(app)
      .get('/works?key=Cs&mode=Major')
      .expect(200)
      .expect(function(res) {
        expect(res.body.message).toBe('There were no pieces matching the selected filters.');
      })
    .end(function(err, res) {
      if (err) { return done(err); }
      done();
    });
  });
});
