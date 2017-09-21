var oneOrThree = function (arr){
  return (arr.length === 2 && 
    (arr.indexOf(1) !== -1 || arr.indexOf(3) !== -1));
};

module.exports = oneOrThree;
