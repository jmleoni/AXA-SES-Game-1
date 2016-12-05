var express = require('express');
var app = express();

app.post('/quote', function (req, res) {
  console.log(req.body);
  //departureDate string 2015-mm-dd
  //returnDate string
  const departureDate = moment(req.body.departureDate, 'YYYY-MM-DD');
  const departureDate = moment(req.body.departureDate, 'YYYY-MM-DD');
  const res = departureDate.diff(returnDate, 'days');
  console.log(res);
  //travellerAges []
  // res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
