var oneOrThree = require('./oneOrThree');
var chai = require('chai');
chai.should();
var assert = chai.assert;
var expect = chai.expect;

//Write a JavaScript program to test if an array of integers of length 2 contains 1 or a 3

describe("oneOrThree", function(){
  it ('returns a boolean', function(){
    var val = oneOrThree([]);
    val.should.be.a('boolean');
  });
  it ('checks if array length is 2', function(){
    var val = oneOrThree([1,3]);
    expect(val).to.equal(true);
    val = oneOrThree([1,3,7]);
    expect(val).to.equal(false);
  });
  it ('checks if input has 1 in index 0', function(){
    var val = oneOrThree([1,2]);
    expect(val).to.equal(true);
    var val = oneOrThree([0,2]);
    expect(val).to.equal(false);
  });
  it ('checks if input has 3 in index 0', function(){
    var val = oneOrThree([3,2]);
    expect(val).to.equal(true);
    var val = oneOrThree([0,2]);
    expect(val).to.equal(false);
  });
  it ('checks if input has 1 in index 1', function(){
    var val = oneOrThree([2,1]);
    expect(val).to.equal(true);
    var val = oneOrThree([0,2]);
    expect(val).to.equal(false);
  });
  it ('checks if input has 3 in index 1', function(){
    var val = oneOrThree([0,3]);
    expect(val).to.equal(true);
    var val = oneOrThree([0,2]);
    expect(val).to.equal(false);
  });
});