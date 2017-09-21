//Write a JavaScript program to count the number of vowels in a given string.
var countVowels = require("./vowels.js");

var chai = require("chai");
chai.should();
var assert = chai.assert;
var expect = chai.expect;
describe.only("countVowels()", function(){
  it('returns a number', function(){
    var val = countVowels("Blunderbuss");
    assert.typeOf(val, "number");
  });

  it('counts the number of vowels', function(){
    var val = countVowels("Guitar");
    assert.equal(val, 3);
  });
  it('ignores case', function(){
    var val = countVowels("RAINBOWS");
    assert.equal(val, 3);
  });
  it('count = 0 when all consonants', function(){
    var val = countVowels("trfdvb");
    assert.equal(val, 0);
  });
});
