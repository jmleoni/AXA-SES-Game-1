var sinon = require('sinon');
var chai = require('chai');
chai.use(require('sinon-chai'));
var expect = chai.expect;
var RomanNumberCalculate = require('../nbr-calculator.js')();

    var romans = [
                { days: 1, value: 1 },
                { days: 3, value: 3*1 }
    ];

    for (var i = 0; i < romans.length; i++) {

        describe('POST /roman calculator', function () {

                it('test '+i, function (done) {
                    console.log(romans[i]);
                    var IN = romans.indexOf(i).days;
                    var OUT = romans.indexOf(i).value;
                    console.log("run test "+i+" IN="+IN+", OUT="+OUT);
                    var romanPrice = RomanNumberCalculate(IN);
                    expect(romanPrice).to.be.equal(OUT)
                    done()
                })
        })
    }    
