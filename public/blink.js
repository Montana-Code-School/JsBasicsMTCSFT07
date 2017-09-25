// <!-- Make text fade in and out using jquery. Use the setInterval javascript function and the 'hidden' css property. Use whatever html file and html tag you want. -->
var myFader = function(i, myClass) {
  var time = i;
  setInterval(function () {
    setTimeout(function () {
      $(myClass).fadeTo(time / 3, 0);
    }, time / 2);
    $(myClass).fadeTo(time / 3, 1);
  }, time);
}


$(function () {
  /*myFader(3000, '.fade1');
  myFader(5000, '.fade2');
  myFader(2000, '.fade3');
  myFader(1000, '.fade4');*/
});