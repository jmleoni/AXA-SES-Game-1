var express = require('express');
var app = express();
var moment = require('moment');
var bodyParser = require('body-parser');

app.set('json spaces', 2);
app.use(bodyParser.json());

const RATE = 1.8;

const calculate = function(req, res) {

  //Parse data
  const departureDate = moment(req.body.departureDate, 'YYYY-MM-DD');
  const returnDate = moment(req.body.returnDate, 'YYYY-MM-DD');

  const nbDays = returnDate.diff(departureDate, 'days');

  if(nbDays < 0) {
    res.status(400);
    return {};
  } else {
    res.status(200);
    return { quote: RATE * nbDays * req.body.travellerAges.length };
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
