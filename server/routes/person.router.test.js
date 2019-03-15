import router from './person.router';
const supertest = require('supertest');

describe('person GET /', function () {
    expect('respond with json containing a list of all users', function (done) {
        .get('/users')
    }).toBe([])
});
