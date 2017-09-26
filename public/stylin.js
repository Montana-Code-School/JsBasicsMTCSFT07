//Make and run a javascript function that changes the text color of an HTML element, executed from a button. 
//Then, make another button and build the same functionality using jQuery.
  var changeColor = function() {
    var para = document.getElementById('changeme');
    para.style.color = "pink";
  }
$(function(){
  $("#btn2").click(function(){
    $("#changeme").css("color","white");
  });
});