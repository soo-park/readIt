var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

// declare mongoose schema
var Schema = mongoose.Schema();

// img analysis schema
var schema = new Schema({
  img: { data: Buffer, contentType: String},
  imgUrl: String,
  items: Array
});

// instance of the schema
var Item = mongoose.model('Item', schema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;


