// Sum of an array: Write a recursive function to
// find the sum of all elements in an array.

// Example: array_sum([1, 2, 3, 4, 5]) = 15

/**
 * 
 * @param {Array} arr 
 */
function sumOfAnArray(arr, index = 0) {

    if(index === arr.length) {
        return;
    }


    return arr[index] + sumOfAnArray(arr, index + 1);
}

console.log(sumOfAnArray([1, 2, 3, 4, 5]));