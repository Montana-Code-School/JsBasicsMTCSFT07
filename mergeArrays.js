//Make a javascript function that merges two arrays. The input will be two arrays and the output will be 1 array. Keep the //order of elements within each array, where the second array follows the first array. i.e.  
//([1, 2, 3], [4, 5, 6]) => [1, 2, 3, 4, 5, 6]
var mergeArrays = function(arr1, arr2) {
  return arr1.concat(arr2);
};

module.exports = mergeArrays;