var express = require('express');
var app = express();
var moment = require('moment');
var bodyParser = require('body-parser');

var ageRiskCalculator = require('./age-calculator')();
var Countries = require('./country-calculator')();
var RomanNumberCalculate = require('./nbr-calculator.js')();


var _ = require('lodash');
app.set('json spaces', 2);
app.use(bodyParser.json());

const RATE = 1.8;

const OPTIONS = {
  "SKIING" : 24,
  "MEDICAL" : 72,
  "SCUBA" : 36,
  "SPORTS": 25,
  "YOGA" : -3
}

const COVER = {
  "BASIC" : 1.8,
  "EXTRA" : 2.4,
  "PREMIUM" : 4.2,
  "PREMIER" : 4.2
}



const calculate = function(req, res) {

  //Parse data
  const departureDate = moment(req.body.departureDate, 'YYYY-MM-DD');
  const returnDate = moment(req.body.returnDate, 'YYYY-MM-DD');

  var nbDaysTemps = returnDate.diff(departureDate, 'days');
  console.log("nof Days="+nbDaysTemps);
  var nbDays = RomanNumberCalculate(nbDaysTemps)

  const validOptions = req.body.options.reduce(function(init,option) {
    if (OPTIONS[option.toUpperCase()]){
      return init;
    }else{
      return false;
    }
  }, true);

  console.log("valid option="+validOptions);
  console.log("Country="+Countries.map(req.body.country));

  if( validOptions  && Countries.map(req.body.country) !== 0) {
    res.status(200);
    var ageRisknew = ageRiskCalculator(req.body.travellerAges);
    return {
      quote: ageRisknew
      * Countries.map(req.body.country)
      * (COVER[req.body.cover.toUpperCase()]
      * nbDays) +
      req.body.options.reduce(function(init, current) {
        return init + OPTIONS[current.toUpperCase()];
      },0)
    };
  } else {
    res.status(400);
  }
};

app.post('/quote', function (req, res) {
  console.log(JSON.stringify(req.body));
  res.json(calculate(req, res));
});

app.post('/feedback', function (req, res) {
  console.log(JSON.stringify(req.body));
  res.status(200);
  res.json({'status':'ok'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
