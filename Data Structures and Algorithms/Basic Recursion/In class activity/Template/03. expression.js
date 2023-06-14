import { deepCompareObjects, formatObject } from './common/utils.js';

function solve(expression) {
}



// Tests:
const testCases = [
  {
    test: '45+(55)',
    expected: 100,
  },
  {
    test: '45+(24*(12+3))',
    expected: 405,
  },
  {
    test: '12*(35-(46*(5+15)))',
    expected: -10620,
  },
  {
    test: '15',
    expected: 15,
  },
];

testCases.forEach(({ test, expected }, index) => {
  // arrange & act
  const actual = solve(test);

  // assert
  const result = deepCompareObjects(expected, actual);

  const message = result
    ? 'Pass.'
    : `Fail. Expected: ${formatObject(expected)}. Actual: ${formatObject(
      actual
    )}`;

  console.log(`Test ${index + 1}: ${message}`);
});
