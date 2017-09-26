var chai = require('chai');
chai.should();
var assert = chai.assert;
var expect = chai.expect;
var reverseStr = require("./reverse.js");

//Write a JavaScript program to reverse a given string.
describe("reverseStr()", function(){
  it('returns a string', function(){
    var val = reverseStr('bacon');
    assert.typeOf(val, "string");
  })
  it('reverses a string', function(){
    var val = reverseStr("cat");
    assert.equal(val, "tac");
  })
  it('reverses strings with capital letters', function(){
    var val = reverseStr("Mark");
    assert.equal(val, "kraM");
  })
});