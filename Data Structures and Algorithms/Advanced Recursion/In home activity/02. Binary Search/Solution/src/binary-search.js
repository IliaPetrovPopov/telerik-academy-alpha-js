//Implement binary search here

// prerequisite - the array should be sorted
const arr = ["Alex", "Anne", "Brian", "Chris", "David", "Elan", "Frank", "James", "Hellen", "Ivan"];

const binarySearch = (array, target, start, end) => {
  if (!array
    || array.length === 0
    || start < 0
    || end < 0
    || start > array.length
    || end > array.length) {
    console.log(start, ", ", end);
    return -1;
  }

  const middle = Math.floor(((end - start) / 2) + start);
  const tmpArray = array.slice();

  // base case - we found the element
  if (tmpArray[middle] === target) {
    return middle;
  }

  // base case - we have no more elements to check
  if (end < start && tmpArray[middle] !== target) {
    return -1;
  }

  // recursive step - the target is bigger than the element we chose
  // search on the right of the middle
  if (tmpArray[middle] < target) {
    return binarySearch(tmpArray, target, middle + 1, end);
  }

  // recursive step - the target is smaller than the element we chose
  // search on the left of the middle
  if (tmpArray[middle] > target) {
    return binarySearch(tmpArray, target, start, middle - 1);
  }
}

const target = "Frank";
const index = binarySearch(arr, target, 0, arr.length);

console.log(index > -1 ? `${target} is on index ${index}` : `There is no ${target} in the list`);