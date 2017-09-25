var updateVal = function (currentEle, val) {
  //console.log(val + " + " + currentEle);
  $(currentEle).html(change(val, "ouse", "ippy"));
}

var change = function (str, replacee, replacer) {
  //ouse
  var arr = str.split("");
  var replacee = replacee.split("");
  var counter = 0;
  var counter2 = 0;
  var i = [];
  arr.forEach(function (element, index) {

    if (element === replacee[counter]) {
      counter++;
      //console.log(counter);
      //console.log(element + " + " + index);
      if (counter === replacee.length) {//Last letter of replacee.
        console.log(element + " + " + index);
        counter = 0;
        counter2++;
        console.log(counter2);
        i.push(index - replacee.length);
        console.log(i);
      }
    } else {
      counter = 0;
    }
  });
  var updateStr = str;

  //updateStr.charAt(i[0]) = replacer[0];

}

$(function () {
  $("p").dblclick(function (e) {
    //e.stopPropagation();      //<-------stop the bubbling of the event here
    var currentEle = $(this);
    var value = $(this).html();
    updateVal(currentEle, value);
  });
});