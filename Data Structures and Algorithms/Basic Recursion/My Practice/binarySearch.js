// Binary search: Write a recursive function to perform a binary search on a sorted array.

// Example: binary_search([1, 2, 3, 4, 5, 6], 4) returns True

function binarySearch(arr, numToSearch, index = 0) {
    if(index === arr.length) {
        return false;
    }

    if(arr[index] === numToSearch) {
        return true;
    }

    return binarySearch(arr, numToSearch, index + 1);
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));