

var songs = [
  {artist:"John Lennon", song: "Oh Yoko" , chorus: "Ohhhhhhhhhhhhh Yoooooo-oooko" },
  {artist:"Father John Misty", song: "Funtimes in Babylon", chorus:"Lookout Hollywood, here I come" },  
  {artist:"Will Smith", song:"Just the Two Of Us", chorus:"ha-haaa, whoop"},
]

var matchLyric = function(lyricStr){
  var song = '';
  var artist = '';
  songs.forEach(function(e) {
    if (e.chorus === lyricStr) {
      song = e.song;
      artist = e.artist;
    }
  }); 
  return "We've found your song - " + song + " by " + artist;
}
module.exports = matchLyric;
//Using the "songs" array, write a function titled "matchLyric" that matches the variable "lyric" string with the proper song object 
//and console.logs "We've found your song - {song} by {artist}"