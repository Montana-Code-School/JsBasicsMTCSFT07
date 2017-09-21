var countString = require('./countString.js');
var chai = require('chai');
chai.should();
var assert = chai.assert;
var expect = chai.expect;

// Write a JavaScript function that accepts two arguments, 
// a string and a letter and the function will count the number 
// of occurrences of the specified letter within the string.
describe("countString()", function () {
  it('Will give us a number', function () {
    var val = countString("Ummm", 'm');
    expect(val).to.be.a('number');
  });

  it('Will return 3 for m or Ummm', function () {
    var val = countString("Ummm", 'm');
    expect(val).to.equal(3);
  });

  it('Will return 4 for "Bubble Bonanza!" for "b"', function () {
    var val = countString("Bubble Bonanza!", 'b');
    expect(val).to.equal(4);
  });
  
  it('Will return 4 for "Bubble Bonanza!" for "B"', function () {
    var val = countString("Bubble Bonanza!", 'B');
    expect(val).to.equal(4);
  });
});


