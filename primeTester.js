// A prime number is an integer greater than 1 that has no divisors other than itself and 1. Write a function that accepts a number and returns true if it’s a prime number, 
// false if it’s not. The grader is looking at the efficiency of your solution (number of operations) as well as correctness! 


function primeTester (n) {
  // Write your code here, and
  // return your final answer.
  if(n === 1) {
    return false;
  }
  var start = 2;
  var half = Math.sqrt(n);
  
  while(start <= half) {
    if(n % start === 0) {
      return false;
    }
    start++;
  }
  return true;
}
