
// Build a class to represent a range of numbers that has:

// a beginning index
// an end index (optional). If there is no end index, the range should include only the passed-in start value.
// a ‘step’ (optional)
// The step is the interval at which elements are included. For instance, a step of 1 includes every element in the range, while a step of 2 includes every other element.

// You should allow a negative value for ‘step’ to count backwards. If no step is provided and the start is more than the end, assume we’re counting backwards.

// The range should have a constructor that accepts these arguments in this order:

// begining index
// end index
// step interval
// It should also support the following utility functions:

// size(): return the number of items represented by the range
// each(callback(index)): iterate over the range, passing each value to a callback function
// includes(index): return whether or not the range includes the passed value
// You should also be aware of the following caveats:

// Should return null if we are given no ‘start’ value.
// Range should use constant space, even during the each() method, * i.e. you should not use an array as backing storage.



var Range = function(start, end, step) {
  //Your code here
  this.start = start;
  this.end = end;
  this.step = step;
  this.array = [];
  if(!this.end && this.end !== 0) {
      this.array.push(this.start);
  } else if(!this.step) {
    if(this.start < this.end) {
      for(var i = 0; i <= (this.end - this.start); i++) {
        this.array.push(this.start + i);
      }
    }
    else {
      for(var i = this.start; i >= this.end; i--) {
        this.array.push(i);
      }
    }
  } else {
    if(this.start < this.end) {
        for(var i = 0; i <= (this.end - this.start); i += this.step) {
          this.array.push(this.start + i);
        }
    } else {
      for (var i = this.start; i >= this.end; i = i + this.step) {
        this.array.push(i);
      }
    }
  }
};

Range.prototype.size = function () {
  //Your code here
  return this.array.length;
};

Range.prototype.each = function (callback) {
  //Your code here
  for( var i = 0; i < this.array.length; i++) {
    callback(this.array[i]);
  }
};

Range.prototype.includes = function (val) {
  //Your code here
  if(this.array.indexOf(val) > -1) {
    return true;
  }
  return false;
};