//Given a string, return true if it contains balnced parenthesis.
// "(((10 ) ()) ((?)(:)))"  True
// "(50)("  False

function isBalanced (string) {
  var left = 0;
  var right = 0;
  var counter = 0;
  for(var i = 0; i < string.length; i++) {
      if(string[i] === '(') {
          counter++;
          left++;
      }
      if(string[i] === ')') {
          if(counter <= 0) {
              return false;
          }
          right++;
          counter--;
      }
  }
  return left === right;
}