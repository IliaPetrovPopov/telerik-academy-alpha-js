import { Stack } from './common/stack.js';
/**
 * 
 * @param {string} expression Expression to validate
 * @returns {boolean} true if all brackets match 
 */
const validateParentheses = (expression) => {
    const dummyStack = new Stack();
    const dummyArray = expression.split('').filter(x => x !== ' ');

    for (let i = 0; i < dummyArray.length; i++) {
        if(dummyArray[i] === '(') {
            dummyStack.push(dummyArray[i]);
        
        } else if(dummyArray[i] === ')'){
            if(dummyStack.isEmpty()) {
                return false;
            }

            dummyStack.pop();
        }
    }

    return dummyStack.isEmpty();
}

// Tests:
const testCases = [
    { test: `(1 + (2 * 3))`, expected: true },
    { test: `1 + (2 * 3))`, expected: false },
    { test: `(1 + )2 * 3))`, expected: false },
    { test: `(1 + (2 * 3)`, expected: false },
    { test: `((((5 / 2) + 8) - 1 ) * 3) + 12`, expected: true },
    { test: `)12 + 3 + (2 * 8)`, expected: false }
];

testCases.forEach(({ test, expected }, index) => {
    // act
    const result = validateParentheses(test);

    // assert
    const message = (result === expected)
        ? 'Pass.'
        : `Fail. Expected: ${expected}. Actual: ${result}`

    console.log(`Test ${index + 1}: ${message}`);
});
