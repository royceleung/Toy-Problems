var insertionSort = function(array) {
    //outer loop that tracks two positions
    for (var i = 1; i < array.length; i++) {
        var current = array[i];
    //inner loop that keeps track of sorted array
        while (current < array[i -1]) {
            array[i]  = array[i -1];
            //decrement i
            i = i -1;
        }
        //insert the value
        array[i] = current;

    }

    return array;
}