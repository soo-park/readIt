const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');  
const fs = require('fs');
const http = require('http');

const app = express();

// var model = require('../database');
var Clarifai = require('clarifai');
var httpHelper = require('./httpHelper.js');

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/items', function (req, res) {

  // make a promise to get the clarifai data
  // instantiate a new Clarifai app passing in your clientId and clientSecret
  // response in clarifai.sample.json
  // throw the data to DOM

  // var imageUrl = 'https://samples.clarifai.com/metro-north.jpg';
  var imageUrl = 'https://static1.squarespace.com/static/522a22cbe4b04681b0bff826/t/57337dcfc6fc086589abb7fb/1462992341586/?format=1500w';

  // get the name of property and value of the property of the image given
  httpHelper.getClarifaiData(imageUrl)
  .then((response) => { 

    var concepts = response.outputs[0].data.concepts;
    
    var respObj = {
      imgUrl: imageUrl,
      items: response.outputs[0].data.concepts
    };

    res.json(respObj);
  })
  .catch((err) => { console.log(err, " I am the error")});

  // // if mongo used
  // items.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });

});

app.post('/items/search', function (req, res) {

  // var imageUrl = 'https://samples.clarifai.com/metro-north.jpg';
  var imageUrl = req.body.imageUrl;

  // get the name of property and value of the property of the image given
  httpHelper.getClarifaiData(imageUrl)
  .then((response) => { 

    var concepts = response.outputs[0].data.concepts;
    
    var respObj = {
      imgUrl: imageUrl,
      items: response.outputs[0].data.concepts
    };

    res.json(respObj);
  })
  .catch((err) => { console.log( " I am the error")}); //err,


})


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

module.exports = app;
