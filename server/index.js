var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});



// // instantiate a new Clarifai app passing in your clientId and clientSecret
// var app = new Clarifai.App(
//   'FVTbO2wMgN1ovmKN2td8PRPz-lT_rv3p7XCGmqTf',
//   '7xSrYMq2KsDhuZ966gUH0A3ItfjBeN4MgWNLpLCw'
// );

// // predict the contents of an image by passing in a url
// app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
//   function(response) {
//     console.log(response);
//   },
//   function(err) {
//     console.error(err);
//   }
// );

// // response in clarifai.sample.json






