// Merge Sort function
function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Base case: arrays with 0 or 1 element are already sorted

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid)); // Recursively sort left half
    const right = mergeSort(arr.slice(mid)); // Recursively sort right half

    return merge(left, right); // Merge sorted halves
}

// Helper function to merge two sorted arrays
function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift()); // Take from left
        } else {
            result.push(right.shift()); // Take from right
        }
    }
    return result.concat(left, right); // Concatenate remaining elements
}

// Test the mergeSort function
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // Output should be: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // Output should be: [79, 100, 105, 110]
