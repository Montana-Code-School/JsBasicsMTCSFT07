//Make a javascript function that merges two arrays. The input will be two arrays and the output will be 1 array. Keep the //order of elements within each array, where the second array follows the first array. i.e.  
//([1, 2, 3], [4, 5, 6]) => [1, 2, 3, 4, 5, 6]
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var mergeArrays = require('./mergeArrays.js');

describe('mergeArrays()', function() {
  it('returns an array', function() {
    var val = mergeArrays([], []);
    assert.isArray(val, "should be an array");
  });
  it("returns an array of numbers", function(){
    var val = mergeArrays([2], [3]);
    expect(val).to.deep.equal([2, 3]);
  });
  it("works with strings", function(){
    var val = mergeArrays(["a", "b", "c"], ["c", "a", "t"]);
    expect(val).to.deep.equal(["a", "b", "c", "c", "a", "t"])
  })
});