var lyric = "Lookout Hollywood, here I come";

var songs = [
  {artist:"John Lennon", song: "Oh Yoko" , chorus: "Ohhhhhhhhhhhhh Yoooooo-oooko" },
  {artist:"Father John Misty", song: "Funtimes in Babylon", chorus:"Lookout Hollywood, here I come" },  
  {artist:"Will Smith", song:"Just the Two Of Us", chorus:"ha-haaa, whoop"},
]

//Using the "songs" array, write a function titled "matchLyric" that matches the variable 
//"lyric" string with the proper song object 
//and console.logs "We've found your song - {song} by {artist}"

var matchLyric = function(name) {
  for (var i = 0; i <songs.length; i++) {
    //console.log(songs[0].chorus);
    if(songs[i].chorus === lyric) {
      console.log("We found your song, " + songs[i].song + ", by " + songs[i].artist);
    }
  }; 
    
};
matchLyric(lyric);

