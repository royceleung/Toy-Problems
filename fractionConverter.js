// Write a function that takes a number as its argument and returns a string that represents that number’s simplified fraction.
// Whole numbers and mixed fractions should be returned as improper fractions.
function fractionConverter (number) {
  // Write your code here, and
  // return your final answer.
  var denom = 1;
  while(Math.floor(number) !== number) {
      number = number * 10;
      denom = denom * 10;
  }
  var gcd = denom;
  var reduced = false;
  while(reduced === false || gcd > 1) {
      if((number % gcd === 0) && (denom % gcd === 0)) {
          number = number / gcd;
          denom = denom / gcd;
          reduced = true;
      }
      gcd--;
  }
  return number + '/' + denom;
}