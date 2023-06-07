import { ListNode, createLinkedList, compareLists, serializeList } from './common/linked-list.js';
/**
 * 
 * @param {ListNode} head Reference to the head node of a list
 * @returns {ListNode} Reference to the head of the reversed list 
 */
const reverseList = (head) => {
    const stack = [];

    while(head) {
        stack.push(head);

        head = head.next;
    }

    stack.reverse();

    stack[0].next = stack[1];
    stack[stack.length - 1].next = null;

    for(let i = 0; i < stack.length - 1; i++) {
        stack[i].next = null;
    }

    for(let i = 0; i < stack.length - 1; i++) {
        stack[i].next = stack[i+1];
    }

    return stack[0]
}

// Tests:
const testCases = [
    { test: [1, 2, 3], expected: [3, 2, 1] },
    { test: [1, 2, 3, 4], expected: [4, 3, 2, 1] },
    { test: [1, 2], expected: [2, 1] },
    { test: [1], expected: [1] }
];

testCases.forEach(({ test, expected }, index) => {
    // arrange
    const testList = createLinkedList(...test);
    const expectedList = createLinkedList(...expected);

    // act
    const reversed = reverseList(testList);

    // assert
    const result = compareLists(expectedList, reversed);
    const message = result
        ? 'Pass.'
        : `Fail. Expected: ${serializeList(expectedList)}. Actual: ${serializeList(reversed)}`

    console.log(`Test ${index + 1}: ${message}`);
});
