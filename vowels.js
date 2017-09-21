//Write a JavaScript program to count the number of vowels in a given string.

var vowels = function(input) {
  var vowelCount = 0;
  var allVowels = "aeiou";
  for (var i = 0; i < input.length; i++){
    if (allVowels.indexOf(input[i].toLowerCase()) !== -1){
      vowelCount++;
    }
  }
  return vowelCount;
};


module.exports = vowels;