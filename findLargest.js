//Using the testing framework we just went over and TDD, write a 
//  JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.

var findLargest = function(num1, num2, num3, num4, num5){
  var allNums = [num1, num2, num3, num4, num5];
  var biggestNum = num1;
  for (var i = 0; i < 5; i++) {
    if (allNums[i] > biggestNum) {
      biggestNum = allNums[i];
    }
  }
  return biggestNum;
};

module.exports = findLargest;

