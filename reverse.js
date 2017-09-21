//Write a JavaScript program to reverse a given string.
var reverseStr = function(str){
  var reverseToString = "";
  if(str) {
    var toArr = str.split("");
    reverseToString = toArr.reverse().join("");
  }
  return reverseToString;
}
module.exports = reverseStr;