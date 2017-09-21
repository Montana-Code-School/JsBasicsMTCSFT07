var vowels = require('./vowels');
var chai = require('chai');
chai.should();
var assert = chai.assert;
var expect = chai.expect;

describe.only("vowels", function(){
  it ('returns a number', function(){
    var val = vowels("Moose");
    val.should.be.a('number');
  });
  it ('returns zero if no vowels', function(){
    var val = vowels("");
    assert.equal(val, 0);
  });
  it ('returns one if one vowel', function(){
    var val = vowels("i");
    assert.equal(val, 1);
  });
  it ('finds all vowels', function(){
    var val = vowels("aaaeiiiiiouu");
    assert.equal(val, 12);
  });
  it ('finds capital vowels', function(){
    var val = vowels("AaEeIiOoUu");
    assert.equal(val, 10);
  });
});

