var surfObj = {
    date: new Date(),
    todaysWaves:"tubular",
    processReport: function(){
       //edits go here
       var shortDate = (this.date).getMonth() + "/" + (this.date).getDate() + "/" + (this.date).getFullYear(); // 6/15/2009
       //console.log(shortDate);
       //var formattedDate = 
       console.log("\nToday is " + shortDate + " and the waves are " + this.todaysWaves + ", dude.\n");
    }
}

//Using the "date" and "todaysWaves" properties, edit the function "processReport" 
//to create and console.log a string that logs "today is {date}
//and the waves are {todaysWaves}, dude." The date should formatted as a "short date."
//surfObj.processReport();