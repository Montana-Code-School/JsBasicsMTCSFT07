// Given a string, write a function that returns the number of time the letter "b", "c" or "u" appear in that string.
var bcuString = require('./bcuString.js');
var chai = require('chai');
var assert = chai.assert;

describe('bcuString()', function() {
  xit('returns a number', function() {
    var val = bcuString('x');
    assert.typeOf(val, 'number');
  });
  xit ('returns total count of b, c, & u for a string', function() {
    var val = bcuString('bubble');
    assert.equal(val, 4);
  });
  xit ('returns 5 for "bubble bath"', function() {
    var val = bcuString('bubble bath');
    assert.equal(val, 5);
  });
  xit ('returns 2 for "Bungie"', function() {
    var val = bcuString('Bungie');
    assert.equal(val, 2, 'should include captials B, C, & U');
  });
});