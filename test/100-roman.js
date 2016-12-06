var sinon = require('sinon');
var chai = require('chai');
require('it-each')();

chai.use(require('sinon-chai'));
var expect = chai.expect;
var RomanNumberCalculate = require('../nbr-calculator.js')();

    var romans = [
                { days: 1, value: 1 },
                { days: 3, value: 3*1 },
                { days: 4, value: 4.4-1 },
                { days: 5, value: 4.4 },
                { days: 7, value: 4.4 + 2*1 },
                { days: 9, value: 8.4 - 1 },
                { days: 14, value: 8.4 + 4.4 - 1 },
                { days: 39, value: 3 * 8.4 + 8.4 - 1},
                { days: 41, value: 39 - 8.4 + 1},
                { days: 77, value: 39 +2 * 8.4 + 4.4 + 2* 1 }
    ];

    it.each(romans, "My test", function(element, next){
      console.log(element);
      
      next()
    // where element is the current array index value
  });
    //
    // for (var i = 0; i < romans.length; i++) {
    //   console.log(romans);
    //   console.log('test');
    //
    //     describe('POST /roman calculator', function () {
    //         it('test ', function (done) {
    //             var IN = romans.indexOf(i).days;
    //             var OUT = romans.indexOf(i).value;
    //             console.log("run test "+i+" IN="+IN+", OUT="+OUT);
    //             var romanPrice = RomanNumberCalculate(IN);
    //             expect(romanPrice).to.be.equal(OUT)
    //             done()
    //         })
    //     })
    // }
