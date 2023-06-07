import { 
    ListNode, 
    createLinkedList, 
    compareLists, 
    serializeList 
} from './common/linked-list.js';

/**
 * 
 * @param {ListNode} head Reference to the head node of a list
 * @returns {ListNode} Reference to the middle of the list 
 */
const findMiddleOfList = (head) => {
    const arrayWithLists = [];
    let ref = head;

    while(ref) {
        arrayWithLists.push(ref);
        ref = ref.next;
    }

    return arrayWithLists[Math.floor(arrayWithLists.length / 2)];
}

// Tests:
const testCases = [
    { test: [1, 2, 3], expected: [2, 3] },
    { test: [1, 2, 3, 4], expected: [3, 4] },
    { test: [1], expected: [1] },
    { test: [5, 5, 5, 5, 5], expected: [5, 5, 5] }
];

testCases.forEach(({ test, expected }, index) => {
    // arrange
    const testList = createLinkedList(...test);
    const expectedList = createLinkedList(...expected);

    // act
    const middle = findMiddleOfList(testList);

    // assert
    const result = compareLists(expectedList, middle);
    const message = result
        ? 'Pass.'
        : `Fail. Expected: ${serializeList(expectedList)}. Actual: ${serializeList(middle)}`

    console.log(`Test ${index + 1}: ${message}`);
});
