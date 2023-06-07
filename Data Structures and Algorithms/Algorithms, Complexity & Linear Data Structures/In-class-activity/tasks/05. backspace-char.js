import { Stack } from './common/stack.js';
/**
 * 
 * @param {string} sequence Sequence of keystrokes
 * @returns {string} String to display 
 */
const backspaceChar = (sequence) => {
    let dummyStack = new Stack();
    let sequenceArr = sequence.split('');

    for(let i = 0; i < sequenceArr.length; i++) {
        if(sequenceArr[i] === '#') {
            if(dummyStack.isEmpty()) {
                continue;
            }

            dummyStack.pop();
        } else {
            dummyStack.push(sequenceArr[i]);
        }
    }

    let final = '';
    while(!dummyStack.isEmpty()) {
        final += dummyStack.pop();
    }

    return final.split('').reverse().join('');
}

// Tests:
const testCases = [
    { test: `abc#d`, expected: `abd` },
    { test: `abcd##e##`, expected: `a` },
    { test: `abc####de`, expected: `de` },
    { test: `teler#ric#k`, expected: `telerik` },
    { test: `jav##ava###script#####`, expected: `js` }
];

testCases.forEach(({ test, expected }, index) => {
    // act
    const result = backspaceChar(test);

    // assert
    const message = (result === expected)
        ? 'Pass.'
        : `Fail. Expected: ${expected}. Actual: ${result}`

    console.log(`Test ${index + 1}: ${message}`);
});
