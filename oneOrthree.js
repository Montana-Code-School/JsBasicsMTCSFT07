var chai = require('chai');
chai.should();
var assert = chai.assert;
var expect = chai.expect;

//Write a JavaScript program to test if an array of integers of 
//length 2 contains 1 or a       3
var oneOrThree = function(){
    return [];
}

 describe('oneOrThreeFunction', function(){
     it ('is returning array', function(){
         var val = oneOrThree();
         val.should.be.a('array');
     });
 })