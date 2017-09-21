var findLargest = require('./findLargest');
var chai = require('chai');
chai.should();
var assert = chai.assert;
var expect = chai.expect;

//Using the testing framework we just went over and TDD, write a 
//  JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.


describe("findLargest", function(){
  it ('returns a number', function(){
    var val = findLargest(1,1,1,1,1);
    assert.typeOf(val, 'number');;
  });
  it ('accepts five arguments and returns the largest', function(){
    var val = findLargest(1,7,5,4,2);
    assert.equal(val, 7);;
  });
});
