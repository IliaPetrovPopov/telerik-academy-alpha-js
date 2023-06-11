/**
 * Return the indices of the first two numbers that sum to a given number
 * @param {number[]} numbers The number collection
 * @param {number} sum The target sum
 * @returns {number[]} The indices of the
 */
const twoSum = (numbers, sum) => {
  const dummyMap = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const diff = sum - numbers[i];

    if(dummyMap.has(diff)) {
        return [dummyMap.get(diff), i];
    }

    dummyMap.set(numbers[i], i);
  }

  return [-1, -1];
}
// Tests:
const testCases = [
  { test: [1, 2, 3], sum: 5, expected: [1, 2] },
  { test: [2, 0, 1, 3, 2], sum: 4, expected: [2, 3] },
  { test: [2, 0, 1, 4, 2], sum: 4, expected: [1, 3] },
  { test: [2, 0, 1, 5, 2], sum: 4, expected: [0, 4] },
  { test: [1, 2, 3], sum: 6, expected: [-1, -1] },
];

testCases.forEach(({ test, sum, expected }, index) => {
  // arrange & act
  const indices = twoSum(test, sum);

  // assert
  const message =
    expected.join(",") === indices.join(",")
      ? "Pass."
      : `Fail. Expected: ${expected.join(",")}. Actual: ${indices.join(",")}`;

  console.log(`Test ${index + 1}: ${message}`);
});
