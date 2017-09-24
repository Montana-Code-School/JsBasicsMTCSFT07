/* Build an express server and serve an html file that displays the current year. Using the Web Console, console.log() the current day of the week as an intege
of 0-6 where 0=Sunday, 1=Monday, 2=Tuesday, ... 6=Saturday.*/

var express = require('express');
var port = 5000;
var app = express();
var path = require('path');

app.get('/days', function(req, res){
  res.sendfile('./templates/date.html'); 
   
});

app.get('/dataFunction.js', function(req, res){
  res.sendfile('./templates/dataFunction.js');
});

app.listen(port, function(){
  console.log("Listening on " + port);
});





 