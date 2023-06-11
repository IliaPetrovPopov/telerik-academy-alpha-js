
/**
 * Determines if s1 an s2 are isomorphic.
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} true if isomorphic 
 */
const areIsomorphic = (s1, s2) => {}

// Tests:
const testCases = [
    { s1: 'egg', s2: 'add', expected: true },
    { s1: 'aab', s2: 'xyz', expected: false },
    { s1: 'paper', s2: 'title', expected: true },
    { s1: 'tidal', s2: 'paper', expected: false },
    { s1: 'JavaScript', s2: 'Java', expected: false },
    { s1: 'listen', s2: 'silent', expected: true },
    { s1: 'theeyes', s2: 'theysee', expected: false },
];

testCases.forEach(({ s1, s2, expected }, index) => {
    // arrange & act
    const result = areIsomorphic(s1, s2);

    // assert
    const message = result === expected
        ? 'Pass.'
        : `Fail. Expected: ${expected}. Actual: ${result}`

    console.log(`Test ${index + 1}: ${message}`);
});
