// Return an array that contains the power set of a given string. The power set is a set of all the possible subsets, including the empty set.

// Make sure your code does the following:

// All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
// Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are the same.
// Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only contained one ‘a’. See the result below.

function powerSet (string) {
  // Write your code here, and
  // return your final answer.
    var array= [];
    var noDupArray = [];
    for(var i = 0; i < string.length; i++) {
        array.push(string[i]);
    }
    array.sort();
    
    for(var j = 0; j < array.length; j++) {
        if(j === array.length -1) {
            noDupArray.push(array[j]);
        }else if(array[j+1]) {
            if(array[j] === array[j+1]) {
            } else {
                noDupArray.push(array[j]);
            }
        }
    }
    var outcomes = [];
    var results = [''];
    var traverse = function(roundsToGo,counter) {
        if(roundsToGo === 0) {
            return;
        }
        for(var i = 0; i < roundsToGo; i++) {
            if(outcomes.indexOf(noDupArray[i + counter]) === -1) {
                if(noDupArray.indexOf(outcomes[outcomes.length-1])  < noDupArray.indexOf(noDupArray[i + counter])) {
                    outcomes.push(noDupArray[i + counter]);
                    results.push(outcomes.join(''));
                    traverse(roundsToGo-1, counter+1);
                    outcomes.pop();
                }
            }
        }
    }
    traverse(noDupArray.length, 0);
    
    return results;
}