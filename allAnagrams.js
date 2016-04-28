// Given a single input string, write a function that produces all possible anagrams of a 
// string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

function allAnagrams (string) {
  // Write your code here, and
  // return your final answer.
  var result = [];
  var outcome = [];
  var indexUsed = [];
  var traverse = function(index) {
    if(index === string.length) {
      result.push(outcome.join(''));
      return;
    }
    for(var i = 0; i < string.length; i++) {
        if(indexUsed.indexOf(i) === -1) {
          outcome.push(string[i]);
          indexUsed.push(i);
          traverse(index+1);
          indexUsed.pop();
          outcome.pop();
        }
    }
  }
  traverse(0);
  var endResult = [];
  for(var i = 0; i < result.length; i++) {
      if(result.indexOf(result[i]) === i) {
          endResult.push(result[i]);
      }
  }
  return endResult;
}