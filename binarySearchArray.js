// Given a sorted array of integers, find the index of a target value using a binary search algorithm.

// A binary search finds an item in a sorted array by repeatedly choosing a middle value and dividing the search interval in half. 
// // The initial interval includes the whole array. 
// If the value of the target value is less than the middle value of the interval, then the next interval will be the lower half of 
// the current interval. If the value of the target value is greater than the middle value, then the next interval will be the upper half. 
// The search process repeats until the middle value is equal to the target value, or the search interval is empty.


// Note:
// Your function should return -1 for target values not in the array. 


function binarySearch(array, target) {
    var solution;
    var search = function(array, index, counter) {
        if(array.length ===1 && array[0] === target) {
            solution = counter - 1;
            return;
        } else if(array.length === 1 && array[0] !== target) {
            solution = -1;
            return;
        }
        var array1 = array.slice(0, array.length/2);
        var array2 = array.slice(array.length/2);
        if(array1[array1.length-1] >= target) {
            search(array1, array1.length, counter - array2.length);
        } else {
            search(array2, array2.length, counter);
        }
    }
    search(array,array.length, array.length);
    return solution;
}
