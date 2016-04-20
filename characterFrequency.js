//Write a function that takes as its input a string and returns an array of arrays 
//as shown below sorted in descending order by frequency and then by ascending order by character.

function characterFrequency (string) {
  var obj = {};
  var array= [];
  for(var i = 0; i < string.length; i++) {
    if(!obj[string[i]]) {
      obj[string[i]] = 0;
    }
    obj[string[i]]++;
  }
  var count = 10;
  while(count > 0) {
      for(var key in obj) {
          if(obj[key] === count) {
             array.push([key, obj[key]]); 
          }
      }
      count--;
  }
  array.sort(function(a, b) {
    if(a[1] === b[1]) {
      if(a[0] > b[0]) {
        return 1;
      } else {
        return -1;
      }
    } else {
    return b[1] - a[1];
    }
  })
  return array;
}