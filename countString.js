// Write a JavaScript function that accepts two arguments, 
// a string and a letter and the function will count the number 
// of occurrences of the specified letter within the string.
//"Ummm" 'm'
var countString = function (str, ltr) {
  var counter = 0;
  var lLtr = ltr.toLowerCase();
  var strArray = str.toLowerCase().split("");
  strArray.forEach(function (e) {
    if (lLtr === e)
      counter++;
  });
  return counter;
};

module.exports = countString;
