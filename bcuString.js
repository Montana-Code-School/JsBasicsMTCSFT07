// Given a string, write a function that returns the number of time the letter "b", "c" or "u" appear in that string.
function bcuString(str) {
  var needle = 'BbCcUu';
  var counter = 0;
  for (var i = 0; i < str.length; i++) {
    if (needle.indexOf(str[i]) !== -1) {
      counter++;
    }
  }
  return counter;
}

module.exports = bcuString;