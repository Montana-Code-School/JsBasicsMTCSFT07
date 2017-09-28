# JavaScript Basics Excercises for MTCS Full Time Class 7

## Exercise 1:
```javascript
var lyric = "Lookout Hollywood, here I come";

var songs = [
  {artist:"John Lennon", song: "Oh Yoko" , chorus: "Ohhhhhhhhhhhhh Yoooooo-oooko" },
  {artist:"Father John Misty", song: "Funtimes in Babylon",
    chorus:"Lookout Hollywood, here I come" },  
  {artist:"Will Smith", song:"Just the Two Of Us", chorus:"ha-haaa, whoop"},
];
```

Using the "songs" array, write a function titled "matchLyric" that 
matches the variable "lyric" string with the proper song object and 
console.logs "We've found your song - {song} by {artist}".

## Exercise 2:
```javascript
var surfObj = {
  date: new Date(),
  todaysWaves:"tubular",
  processReport: function(){
    //edits go here
  }
}
```

Using the "date" and "todaysWaves" properties, edit the function "processReport" 
to create and console.log a string that logs
"today is {date} and the waves are {todaysWaves}, dude."

The date should formatted as a "short date."

## Exercise 3:
View in the browser: http://localhost:5000/stylin.css

Complete the following:

* successfully inject a css file called "styles.css"
* change the following:
  * background color to green
  * default font family to comic sans
  * application title (chomp chomp) font family to times new roman
  * put a border around the 1st paragraph on the page

## Exercise 4:
Make and run a javascript function that changes the text color of an HTML element, executed from a button.

Then, make another button and build the same functionality using jQuery.

## Exercise 5:
Make a javascript function that merges two arrays. The input will be two arrays and the output will be 1 array. Keep the order of elements within each array, where the second array follows the first array.

i.e. ([1, 2, 3], [4, 5, 6]) => [1, 2, 3, 4, 5, 5]

## Exercise 6:
Make text fade in and out using jquery. Use the setInterval javascript function and the 'hidden' css property. Use whatever html file and html tag you want.

## Exercise 7:
Write a sentence in a <p> tag. Using jQuery, attach a double-click event to the <p> element, whose callback drastically changes the meaning of the sentence.

## Exercise 8:
Write a javascript function that accepts an object and returns a count of the number of methods in that object.

## Exercise 9:

```javascript
var plant = {
  kingdom:"plantae",
  genus:"Epipremnum",
  commonName:"dumb house plant"
  fetchName: function(){
    //write code in here
  }
}
```

Fill in the fetchName function to grab the properties kingdom and genus, and returns the string: "the {commonName}, of kingdom {kingdom} and genus {genus}, is next to the closet behind us."

Use TDD to test and console log the string.

## Exercise 10:
```javascript
var loading = "loading....";

//write code here

setTimeout(function(){
  var doneLoading = "Loading Complete!"
  //write the code here

}, 4000);
```

Write a jquery or javascript function that displays the string "loading..." on an html page and then replaces that string with "Loading Complete" after the timeout has finished. Use the code above.

## Exercise 11:
```javascript
var bar = true;

function toggle(){
  if (bar){
    console.log('yes');
  } else {
    console.log('no')
  }
}

toggle();
toggle();
toggle();
toggle();
```

Currently, the 4 toggle calls log "yes" "yes" "yes "yes." Edit the function toggle so that the 4 calls log this: "yes" "no" "yes" "no".

## Exercise 12:
Set a background-image using the jQuery CSS property. The image should answer this question - if moby was a person, who would he be?

## Exercise 13:
Create an html file that has a bootstrap theme from https://startbootstrap.com/template-categories/all/

## Exercise 14:
You guys have used cdn's and have some familiarty with html. Let's do something interesting with this knowledge - follow //this tutorial - http://www.chartjs.org/docs/latest/getting-started/ to get the default chart into an html file. 

In the "data" object passed into the "new Chart(.." edit the "labels" and datasets.data to display some of information in //the chart found at https://www.ncdc.noaa.gov/sotc/tornadoes/201708 (the chart titled: August Tornado Counts
*2017 count preliminary)

## Exercise 15:
Add a CSS class using jQuery when you hit a button.

## Exercise 16: 
Using jQuery, console.log the class of the clicked element.

## Exercise 17:
Using Javascript and TDD, write a function that sorts an array of strings in alphabetical order.

## Exercise5 18:
Write a javascript function that randomly returns an integer between 0 and 2. Using this return value and an html button, switch the background image between 3 images. 

## Exercise 19: 
Using jquery's get method, grab some data using one of google's data apis, using the url https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699 . Use jquery or javascript to create an html div and put the books title in inside the div. Use css to style the font size to be 20px.
## Exercise 20:
In our name app, add the field "age" in the html, using the dob property in the database. We will not store the age property in the database.

## Exrecise 21:
If you are part of brians group, use tdd to compliment his sweater.

## Exercise 22:
In our name app, add the email field we built in the input into our schema and add it to the #nameList after the age.

## Exercise 23:
In our name app, change the ul#nameList into an html table with 4 columns Name, DOB, Age, and Email. 

## Exercise 24:
Using an express server, get mongo and mongoose running with a mongo database server, like we did earlier today (Wed. Sept 27). The mongoose schema will be a movie star:
```javascript
  {
    name: {name}
    dob: {dob}
    starredIn:{a movie he/she acted in}
   }
  ```
  Build a webpage that has his/her image as the background and display the following information: "{Name}, who's {age} starred in: {a movie he/she acted in}" in big letters at the top. Feel free to use jquery. Put a bootstrap nav bar at the top. Some notes: You'll need to make a new database - all you need to do is change the 
  ```javascript
    var mongodbUri = 'mongodb://localhost/names';
```
located in your server.js file to a different url (something like mongod://localhost/celebrity )
