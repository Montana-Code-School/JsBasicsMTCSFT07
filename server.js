var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var Names = require('./models/names');

var mongodbUri = 'mongodb://localhost/names';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);
var options = {
  server:{socketOptions:{keepAlive:1, connectTimeoutMS:30000}},
  replset:{socketOptions:{keepAlive:1, connectTimeoutMS:30000}}
};
mongoose.connect(mongooseUri,options);

var app = express();
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(function(req, res, next){
  res.setHeader('Content-Type', 'application/json');
  next();
});
/* serves main page */
app.get("/", function (req, res) {
  res.sendfile('boot.html')
});

app.get("/names", function(req, res){
  Names.find(function(err,names){
    res.json(names);
  });
});

app.post("/names", function(req, res){
  var name = new Names();
  name.name = req.body.name;
  name.birthday = req.body.birthday;
  name.save(function(err, nameReturned){
    res.json('name received ' + nameReturned);
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Listening on " + port);
});

