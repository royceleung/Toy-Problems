// Given an array of numbers, calculate the greatest contiguous sum of numbers in it. A single array item will count as a contiguous sum.

function sumArray (array) {
  // Write your code here, and
  // return your final answer.
  var max = array[0];
  for(var i = 0; i < array.length; i++) {
    var current = array[i];
    if(current > max) {
      max = current;
    }
    var j = i+1;
    while(j < array.length) {
      current = current + array[j];
      if(current > max) {
        max = current;
      }
      j++;
    }
  }
  return max;
}
