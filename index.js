var express = require('express');
var app = express();
var moment = require('moment');
var bodyParser = require('body-parser');

var ageRiskCalculator = require('./age-calculator')();


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





var Countries = function () {
var countryMap = {};
countryMap['EE'] = 1.3;
countryMap['LU'] = 1.3;
countryMap['GR'] = 0.6;
countryMap['DO'] = 1.3;
countryMap['IT'] = 1.2;
countryMap['BG'] = 1.1;
countryMap['IM'] = 1.2;
countryMap['HM'] = 0.7;
countryMap['SE'] = 1.2;
countryMap['GB'] = 1.1;
countryMap['PA'] = 1.6;
countryMap['PN'] = 1.2;
countryMap['QA'] = 1.6;
countryMap['RO'] = 1.3;
countryMap['TH'] = 1.6;
countryMap['KP'] = 6.9;
countryMap['LT'] = 0.7;
countryMap['UY'] = 1.6;
countryMap['FI'] = 0.8;
countryMap['HR'] = 1.3;
countryMap['LV'] = 0.6;
countryMap['IE'] = 1.1;
countryMap['MK'] = 1.6;
countryMap['FR'] = 1.0;
countryMap['MT'] = 1.2;
countryMap['PT'] = 0.5;
countryMap['CH'] = 3.7;
countryMap['NL'] = 0.7;
countryMap['EG'] = 0.9;
countryMap['MX'] = 1.6;
countryMap['CY'] = 1.6;
countryMap['BE'] = 0.9;
countryMap['ES'] = 1.1;
countryMap['TD'] = 1.3;
countryMap['WF'] = 1.5;
countryMap['DE'] = 0.8;
countryMap['SK'] = 0.7;
countryMap['AT'] = 0.9;
countryMap['ZA'] = 1.6;
countryMap['CZ'] = 1.2;
countryMap['DK'] = 1.2;
countryMap['SI'] = 0.8;
countryMap['PL'] = 1.4;
countryMap['HU'] = 1.1;
countryMap['TW'] = 1.6;
countryMap['UK'] = 1.1;
return {
    map : function (countryCode) {
            return countryMap[countryCode] || 0;
    }
};
}();

const calculate = function(req, res) {

  //Parse data
  const departureDate = moment(req.body.departureDate, 'YYYY-MM-DD');
  const returnDate = moment(req.body.returnDate, 'YYYY-MM-DD');

  var nbDays = Math.max(returnDate.diff(departureDate, 'days'),7);
  if (nbDays < 10) {
    nbDays = 7
  }
  const ageRisk = req.body.travellerAges.reduce(function(init,age) {
    if (age < 18){
      return init+1.1;
    }else if (age <25){
      return init+0.9;
    }else if (age <66){
      return init+1;
    }else{
      return init+1.5;
    }
  },0);

  const validAges = req.body.travellerAges.reduce(function(init,age) {
    if (age <0){
      return false;
    }else{
      return init;
    }
  }, true);

  const adults = req.body.travellerAges.reduce(function(init, age) {
    if( age >= 18 ){
      return init+ 1;
    } else {
      return init;
    }
  }, 0);

  const child = req.body.travellerAges.reduce(function(init, age) {
    if( age < 18 ){
      return init+ 1;
    } else {
      return init;
    }
  }, 0);

  let discount = 1;
  if(child >= 2 && adults >=2) {
    discount -= 0.20;
  }

  const validOptions = req.body.options.reduce(function(init,option) {
    if (OPTIONS[option.toUpperCase()]){
      return init;
    }else{
      return false;
    }
  }, true);

  console.log("valid option="+validOptions);
  console.log("valid arguments="+validAges);
  console.log(Countries.map(req.body.country));

  if( validOptions && validAges && Countries.map(req.body.country) !== 0) {
    res.status(200);
    var ageRisknew = ageRiskCalculator(req.body.travellerAges);
    return {
      quote: ageRisknew * Countries.map(req.body.country)*(COVER[req.body.cover.toUpperCase()] * nbDays) + req.body.options.reduce(function(init, current) {
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
