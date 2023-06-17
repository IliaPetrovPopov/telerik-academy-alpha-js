import { compareArrays, formatArray } from './common/utils.js';

/**
 * Generates the all possible arrangements of the characters of the passed string
 * @param {string} string The string to generate permutations from
 * @returns {array} The all possible permutations
 */
const permutations = (string) => {
  const result = [];

    if(string.length < 2) {
      result.push(string); 
      return result;
    }

    for(let i = 0; i < string.length; i++) {
      const char = string[i];

      const remaining = string.slice(0, i) + string.slice(i + 1);
      const otherPermuts = permutations(remaining);

      otherPermuts.map(permutation => result.push(char + permutation));
    }

    return result;
};

// Tests:
const testCases = [
  { test: 'dsa', expected: ['dsa', 'das', 'sda', 'sad', 'ads', 'asd'] },
  {
    test: 'aAbB',
    expected: [
      'aAbB',
      'aABb',
      'abAB',
      'abBA',
      'aBAb',
      'aBbA',
      'AabB',
      'AaBb',
      'AbaB',
      'AbBa',
      'ABab',
      'ABba',
      'baAB',
      'baBA',
      'bAaB',
      'bABa',
      'bBaA',
      'bBAa',
      'BaAb',
      'BabA',
      'BAab',
      'BAba',
      'BbaA',
      'BbAa',
    ],
  },
  { test: 'aab', expected: ['aab', 'aba', 'aab', 'aba', 'baa', 'baa'] },
  { test: 'a', expected: ['a'] },
  { test: '', expected: [''] },
];

testCases.forEach(({ test, expected }, index) => {
  // arrange & act
  const actual = permutations(test);

  // assert
  const result = compareArrays(expected, actual);

  const message = result
    ? 'Pass.'
    : `Fail. Expected: ${formatArray(expected)}. Actual: ${formatArray(
        actual
      )}`;

  console.log(`Test ${index + 1}: ${message}`);
});
