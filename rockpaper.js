//Given a number of rounds n, return all the possible rock-paper-scissors 
//play possibilities for that number of rounds.


function rockPaperPermutation (roundCount) {
  var possible = ['r', 'p', 's'];
  var result = [];
  var outcomes = [];
  var traverse = function(array, rounds) {
    if(rounds === 0) {
      result.push(outcomes.join(''));
      return;
    }
    for(var i = 0; i < possible.length; i++) {
      outcomes.push(possible[i]);
      traverse(outcomes, rounds-1);
      outcomes.pop();
    }
  }
  traverse([], roundCount);
  if(roundCount === 0) {
    return [];
  }
  return result;
}