// Note 1
// The predominant issue we have right now is that if there are multiple occurences we won't get all the indices of the desired value 
// just one index. to solve this we should implement a method that returns a list of indices if there are multiple occurences?

// Note 2
// the return of the list is unnecessary. implement switch cases for  novelty?

function binarySearch(list, element) {
    // Initialize start and end pointers for the search range
    let start = 0; let end = list.length - 1; let result = -1;

    while (start <= end) {
        // Calculate the pivot and round to avoid issues.
        let mid = Math.floor((start + end) / 2);

        // If the middle element = element
        if (list[mid] === element) {
            result = mid;
            // continue searching on the left side, for repeats.
            end = mid - 1;
        } 
        // If the middle element < element
        else if (list[mid] < element) {
            // Adjust the start pointer to search right side
            start = mid + 1;
        } 
        // If the middle element is greater than the target element
        else {
            // Adjust the end pointer to search left side
            end = mid - 1;
        }
    }

    // Return the final result (either the index of the leftmost occurrence or -1 if not found)
    return result;
}
  

  

// Sucessful test case
// ---------------------------
// [Running] node "/home/tyson/Documents/Cosc3020/binary-search-tlimato/code.js"
// [Done] exited with code=0 in 0.026 seconds
