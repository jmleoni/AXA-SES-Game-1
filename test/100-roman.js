var sinon = require('sinon');
var chai = require('chai');
chai.use(require('sinon-chai'));
var expect = chai.expect;
var RomanNumberCalculate = require('../nbr-calculator.js')();


describe('POST /roman calculator', function () {
  it('test 1', function (done) {
      var IN = 1;
      var OUT = 1;
      var romanPrice = RomanNumberCalculate(IN);
      expect(romanPrice).to.be.equal(OUT)
      done()
  })
})
