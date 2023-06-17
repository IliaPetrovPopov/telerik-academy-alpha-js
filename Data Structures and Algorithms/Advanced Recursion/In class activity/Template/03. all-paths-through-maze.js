import {
  compareArraysOfMatrices,
  formatArrayOfMatrices,
} from './common/utils.js';

/**
 * Finds all paths in a given maze (matrix) where you start from (0, 0), ' ' is an empty slot, 'x' is a wall and 'e' is the exit
 * @param {array} maze The maze to traverse
 * @returns {array} An array of matrixes - all the paths in the maze. The cells from a given path should be marked with 'v' and the rest should be null
 */
const findAllPaths = (maze) => {
  // your implementation:
};

// Tests:
const testCases = [
  {
    test: [
      [' ', ' ', ' '],
      [' ', 'x', ' '],
      [' ', ' ', ' '],
      ['x', ' ', 'e'],
    ],
    expected: [
      [
        ['v', 'v', 'v'],
        [null, null, 'v'],
        [null, null, 'v'],
        [null, null, 'v'],
      ],
      [
        ['v', 'v', 'v'],
        [null, null, 'v'],
        [null, 'v', 'v'],
        [null, 'v', 'v'],
      ],
      [
        ['v', null, null],
        ['v', null, null],
        ['v', 'v', 'v'],
        [null, null, 'v'],
      ],
      [
        ['v', null, null],
        ['v', null, null],
        ['v', 'v', null],
        [null, 'v', 'v'],
      ],
    ],
  },
  {
    test: [
      // no passages
      [' ', ' ', 'x'],
      [' ', 'x', ' '],
      ['x', ' ', 'e'],
    ],
    expected: [],
  },
  {
    test: [[' '], [' '], ['e']], // one column
    expected: [[['v'], ['v'], ['v']]],
  },
  { test: [[' ', ' ', 'e']], expected: [[['v', 'v', 'v']]] }, // one row
];

testCases.forEach(({ test, expected }, index) => {
  // arrange & act
  const actual = findAllPaths(test);

  // assert
  const result = compareArraysOfMatrices(expected, actual);

  const message = result
    ? 'Pass.'
    : `Fail. Expected: ${formatArrayOfMatrices(
        expected
      )}. Actual: ${formatArrayOfMatrices(actual)}`;

  console.log(`Test ${index + 1}: ${message}`);
});
