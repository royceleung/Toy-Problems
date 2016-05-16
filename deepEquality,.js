// Write a function that, given two objects, returns whether or not the two are deeply equivalent–meaning the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.


deepEquals = function(a, b){
    var result = true;
    var traverse = function(obj1, obj2) {
        console.log(obj1);
        console.log(obj2);
        if((!obj1 && obj2) || (obj1 && !obj2)) {
          result = false;
          return;
        }
        if(!obj1 && !obj2) {
            return;
        }
        if(typeof(obj1) === 'string' || typeof(obj1) === 'number') {
            if(obj1 !== obj2) {
                result = false;
                return;
            }
        }
        if(typeof(obj1) === 'object') {
            for(var key in obj2) {
                traverse(obj1[key], obj2[key]);
            }
            for(var key2 in obj1) {
                traverse(obj1[key2], obj2[key2]);
            }
        }
    }
    traverse(a, b);
    return result;
};  