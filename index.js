var express = require('express');
var app = express();
var moment = require('momentjs');

app.post('/quote', function (req, res) {
  console.log(req.body);

  const departureDate = moment(req.body.departureDate, 'YYYY-MM-DD');
  const returnDate = moment(req.body.returnDate, 'YYYY-MM-DD');
  const nbDays = departureDate.diff(returnDate, 'days');
  const rate = 1.8;

  res.status(200);
  res.json({ quote: rate * nbDays * req.body.travellerAges.length });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
