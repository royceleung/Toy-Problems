// Implement the function asyncMap:

// asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
// Each of the tasks takes a separate callback and invokes that callback when complete.

// The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.

// The order of these results should be the same as the order of the tasks.
// It is important to note that this is not the order in which the tasks return,
// but the order in which they are passed to asyncMap.

// Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
// on the results array.

var asyncMap = function(jobs, cb) {
  var results = [];
  var finished = 0;
  
  for (var i = 0; i < jobs.length; i++) {
    (function(i) {
      var job = jobs[i];
      job(function(val) {
        results[i] = val;
        finished++;
        if (finished === jobs.length) cb(results);
      });
    })(i);
  }
};