var sinon = require('sinon');
var chai = require('chai');
chai.use(require('sinon-chai'));
var expect = chai.expect;
var quoteObject = require('../lib/quote-calculator')();


describe('run quote feature', function () {
  it('calls quote for PL, some days, 2 person', function (done) {
      var object = {
            "country":"PL",
            "departureDate":"2016-11-15",
            "returnDate":"2016-12-09",
            "travellerAges":[32,39],
            "options":["MedicalConditions"],
            "cover":"Basic"
            };
      var quote = quoteObject(object);
      expect(quote).to.be.equal(192.96)
      done()
  })
})

