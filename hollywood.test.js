var chai = require("chai");
var assert = chai.assert;
var matchLyric = require("./hollywood.js");

var lyric = "Lookout Hollywood, here I come";
var lyric2 = "ha-haaa, whoop";

describe("matchLyric()", function(){
  it("returns a string", function(){
    var val = matchLyric("two");
    assert.typeOf(val, "string");
  });
  it("matches the lyrics", function() {
    var val = matchLyric(lyric);
    assert.equal(val, "We've found your song - Funtimes in Babylon by Father John Misty");
  });
  it("returns song and artist", function(){
    var val = matchLyric(lyric2);
    assert.equal(val, "We've found your song - Just the Two Of Us by Will Smith");
  });
})
//Using the "songs" array, write a function titled "matchLyric" that matches the variable "lyric" string with the proper song object 
//and console.logs "We've found your song - {song} by {artist}"