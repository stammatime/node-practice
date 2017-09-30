const request = require('supertest');
const app = require('./server').app;
const chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

describe('Express Tests', () => {

    describe('GET / ', () => {
        it('should return hello world response', (done) => {
            request(app).get('/')
            .expect(404)
            .expect((res) => {
                expect(res.body).to.include({
                    error: 'Page not found.'
                })
            })
            .expect({error: 'Page not found.'})
            .end(done);
        })
    });
    
    describe('GET /Users ', () => {
        it('/users should contain Cody', (done) => {
            request(app).get('/users').expect(200).expect((res) =>{
                expect(res.body).to.deep.include({name:"Cody", age: 24}); //deep includes is == instead of === (strict)
        
            }).end(done)
        })
    });

});
