var updateVal = function (currentEle, val) {
  $(currentEle).html(change(val, "t", "_"));
}

var change = function (str, replacee, replacer) {
  var arr = str.split("");
  var replacee = replacee.split("");
  var counter = 0;
  var num = [];
  arr.forEach(function (element, index) {
    if (element === replacee[counter]) {
      counter++;
      if (counter === replacee.length) {
        counter = 0;
        num.push(index - replacee.length + 1);
      }
    } else {
      counter = 0;
    }
  });

  num.forEach(function (e, i) {
    arr.splice(num[num.length - i - 1], replacee.length, replacer);
  });
  return arr.join("");
}

$(function () {
  $("p").dblclick(function (e) {
    var currentEle = $(this);
    var value = $(this).html();
    updateVal(currentEle, value);
  });
});