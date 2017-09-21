//Write a JavaScript program to count the number of vowels in a given string.
var countVowels = function (str) {
  var arrayOfLetters = str.split("");
  var counter = 0;
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  arrayOfLetters.forEach(function (letter) {
    vowels.forEach(function (vowel) {
      if (letter === vowel) {
        counter++;
      }
    });
  });
  return counter;
}
//Another Approach
/* var vowelStr = "AEIOUaeiou";
var count = 0;
for (var i = 0; i < vowelStr.length; i++) {
  if (vowelStr.indexOf(let) !== -1) {
    count++;
  }
  return count;
} */

module.exports = countVowels;