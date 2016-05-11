// Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. 
// Return null if there are no even-occurrence items.

function evenOccurence (arr) {
  // Write your code here, and
  // return your final answer.
  var dups = [];
  var counter = 0;
  var dupsCounter = [];
  for(var i = 0; i < arr.length; i++) {
      var index = dups.indexOf(arr[i]);
      if(index === -1) {
          dups[counter] = arr[i];
          dupsCounter[counter] = 1;
          counter++;
      } else {
          dupsCounter[index]++;
      }
  }
  console.log('dups', dups);
  console.log('dupsCounter', dupsCounter);
  for(var j =0; j < dups.length; j++) {
      if(dupsCounter[j] % 2 === 0) {
          return dups[j];
      }
  }
  return null;
}