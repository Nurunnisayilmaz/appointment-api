'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = require('chai').should();
const expect = require('chai').expect;
const server = require('../app');

const {fakeBook,erorBook} = require('./testData');

chai.should();
chai.use(chaiHttp);

describe("API TEST", () => {

    /*
     * Test the booking
     */
    describe("POST /", () => {
        it("It should POST ", (done) => {
            const book = fakeBook
            chai.request(server)
                .post("/api/booking")
                .send(book)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.data.should.be.a('object');
                    response.body.data.name.should.be.a('string');
                    response.body.data.email.should.be.a('string');
                    response.body.data.phone.should.be.a('string');
                    response.body.data.date.should.be.a('string');
                    response.body.data.additionalMessage.should.be.a('string');
                    expect(response.body.status).to.equal("success");
                    done();
                });
        });

        it("It should not POST ", (done) => {
            const book = erorBook
            chai.request(server)
                .post("/api/booking")
                .send(book)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.should.have.property('error');
                    response.body.should.be.a('object');
                    expect(response.body.message).to.equal("Invalid Input");
                    done();
                });
        });
    });


});