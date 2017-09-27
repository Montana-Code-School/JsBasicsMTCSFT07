var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
<<<<<<< HEAD
var Names = require('./model/names');
=======
var Names = require('./models/names');
>>>>>>> 471c3f9dd59910f2e1369e8d659983e0440e0d00

var mongodbUri = 'mongodb://localhost/names';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);
var options = {
<<<<<<< HEAD
  server: {socketOptions:{keepAlive:1, connectTimeoutMS:30000}},
  replset: {socketOptions:{keepAlive:1, connectTimeoutMS:30000}}
=======
  server:{socketOptions:{keepAlive:1, connectTimeoutMS:30000}},
  replset:{socketOptions:{keepAlive:1, connectTimeoutMS:30000}}
>>>>>>> 471c3f9dd59910f2e1369e8d659983e0440e0d00
};
mongoose.connect(mongooseUri,options);

var app = express();
<<<<<<< HEAD
app.use(bodyParser.json({ type: 'application/json'}));
app.use(bodyParser.urlencoded({exteded:true}));
=======
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({extended:true}));
>>>>>>> 471c3f9dd59910f2e1369e8d659983e0440e0d00
app.use(express.static('public'));
app.use(function(req, res, next){
  res.setHeader('Content-Type', 'application/json');
  next();
});
<<<<<<< HEAD

/* serves main page */
app.get("/", function(req, res) {
  res.sendfile('index.htm');
});

app.get("/names", function(req, res){
  Names.find(function(err, names){
=======
/* serves main page */
app.get("/", function (req, res) {
  res.sendfile('boot.html')
});

app.get("/names", function(req, res){
  Names.find(function(err,names){
>>>>>>> 471c3f9dd59910f2e1369e8d659983e0440e0d00
    res.json(names);
  });
});

app.post("/names", function(req, res){
  var name = new Names();
  name.name = req.body.name;
  name.birthday = req.body.birthday;
<<<<<<< HEAD
  name.email = req.body.email;
  name.save(function(err, nameReturned){
    res.json('name received' + nameReturned);
=======
  name.save(function(err, nameReturned){
    res.json('name received ' + nameReturned);
>>>>>>> 471c3f9dd59910f2e1369e8d659983e0440e0d00
  });
});

var port = process.env.PORT || 5000;
<<<<<<< HEAD
app.listen(port, function() {
=======
app.listen(port, function () {
>>>>>>> 471c3f9dd59910f2e1369e8d659983e0440e0d00
  console.log("Listening on " + port);
});

