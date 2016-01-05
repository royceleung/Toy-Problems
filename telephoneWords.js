/**
Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!

Write a function that takes up to four digits of a phone number, and returns a list of all of the words that can be written on the phone with that number. (You should return all permutations, not only English words.)

**/

function telephoneWords (digitString) {
  var results = [];
  var outcomes = [];
  
  var traverse = function (outcomes, index) {
      if(index === (digitString.length)) {
          results.push(outcomes.join(''));
          return;
      }
      var phoneArray = phoneKey[digitString[index]];
      for(var i = 0; i < phoneArray.length; i++) {
          outcomes.push(phoneArray[i]);
          traverse(outcomes, index + 1);
          outcomes.pop();
      }
  }
  
  traverse([], 0);
  return results;
}

var phoneKey = {
  0 : ['0'],
  1 : ['1'],
  2 : ['A', 'B', 'C'],
    3: ['D', 'E', 'F'],
    4: ['G', 'H', 'I'],
    5: ['J', 'K', 'L'],
  6: ['M', 'N', 'O'],
  7: ['P', 'Q', 'R', 'S'],
  8: ['T', 'U', 'V'],
  9: ['W','X', 'Y', 'Z']
}