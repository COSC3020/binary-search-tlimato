function binarySearch(list, element) {
    // Set Bounds for binary search
    var left = 0; var right = list.length-1;

    while (left <= right){
        // find mid point [pivot point]
        // round down to avoid floating error
        var mid = Math.floor((left + right)/2);

        // Iterate using casees. [just doing something different than the standard if else]
        switch (true){
            // element found now return the index.
            case list[mid] == target:
                return mid;
            // element is greater than pivot
            case list[mid] < target:
                left = mid +1;
                break;
            // other cases don't trigger, element must be smaller than pivot
            default:
                right = mid -1;
                break;
        }
    }

    return -1;
}


// Sucessful test case
// ---------------------------
// [Running] node "/home/tyson/Documents/Cosc3020/binary-search-tlimato/code.js"
// [Done] exited with code=0 in 0.026 seconds
