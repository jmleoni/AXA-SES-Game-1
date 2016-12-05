var express = require('express');
var app = express();
var moment = require('moment');
var bodyParser = require('body-parser');
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
  "PREMIUM" : 4.2
}

const calculate = function(req, res) {

  //Parse data
  const departureDate = moment(req.body.departureDate, 'YYYY-MM-DD');
  const returnDate = moment(req.body.returnDate, 'YYYY-MM-DD');

  const nbDays = Math.max(returnDate.diff(departureDate, 'days'),7);

  if(req.body.country === 'FR' && _.max(req.body.travellerAges) < 65 && _.min(req.body.travellerAges) > 25) {
    res.status(200);
    return {
      quote: (COVER[req.body.cover.toUpperCase()] * nbDays) + req.body.options.reduce(function(init, current) {
        return init + OPTIONS[current.toUpperCase()];
      },0)
    };
  } else {
    res.status(400);
  }
};

app.post('/quote', function (req, res) {
  console.log(req.body);
  res.json(calculate(req, res));
});

app.post('/feedback', function (req, res) {
  console.log(req.body);

  res.status(200);
  res.json({'status':'ok'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
