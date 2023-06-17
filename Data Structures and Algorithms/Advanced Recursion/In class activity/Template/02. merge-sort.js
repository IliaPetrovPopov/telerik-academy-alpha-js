import { compareArrays, formatArray } from './common/utils.js';

/**
 * Sorts an array of numbers in an increasing order recursively by applying the Merge Sort algorithm
 * @param {array} numbers The array of numbers to sort
 * @returns {array} The sorted array
 */
const mergeSort = (numbers) => {
  // your implementation:
};

// Tests:
const testCases = [
  { test: [5, 2, 3, 7, 1, 14], expected: [1, 2, 3, 5, 7, 14] },
  { test: [1.3, 5.2, 4.4, 2.4, 7.1], expected: [1.3, 2.4, 4.4, 5.2, 7.1] },
  { test: [1], expected: [1] },
  { test: [], expected: [] },
  { test: [5, 5, 5, 5, 5], expected: [5, 5, 5, 5, 5] },
];

testCases.forEach(({ test, expected }, index) => {
  // arrange & act
  const actual = mergeSort(test);

  // assert
  const result = compareArrays(expected, actual);

  const message = result
    ? 'Pass.'
    : `Fail. Expected: ${formatArray(expected)}. Actual: ${formatArray(
        actual
      )}`;

  console.log(`Test ${index + 1}: ${message}`);
});
