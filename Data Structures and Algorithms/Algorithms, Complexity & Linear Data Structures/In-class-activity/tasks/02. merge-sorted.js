import {
  ListNode,
  createLinkedList,
  compareLists,
  serializeList,
} from "./common/linked-list.js";
/**
 *
 * @param {ListNode} h1 Reference to the head node of the first list
 * @param {ListNode} h2 Reference to the head node of the second list
 * @returns {ListNode} Reference to the head of the reversed list
 */
const mergeSortedLists = (h1, h2) => {
    let dummyHead = new ListNode();
    let current = dummyHead;

    while(h1 && h2) {
        if(h1.value > h2.value) {
            current.next = h2;
            h2 = h2.next;
        } else {
            current.next = h1;
            h1 = h1.next;
        }

        current = current.next;
    }

    if (h1) {
        current.next = h1;
        h1 = h1.next;
      } else {
        current.next = h2;
        h2 = h2.next;
    }

    return dummyHead.next;
};

// Tests:
const testCases = [
  { test1: [1, 2, 3], test2: [1, 2, 3], expected: [1, 1, 2, 2, 3, 3] },
  {
    test1: [1, 2, 3],
    test2: [1, 2, 3, 4, 5],
    expected: [1, 1, 2, 2, 3, 3, 4, 5],
  },
  { test1: [1, 2, 3], test2: [4, 5, 6], expected: [1, 2, 3, 4, 5, 6] },
  { test1: [1, 3, 5], test2: [2, 4, 6], expected: [1, 2, 3, 4, 5, 6] },
  { test1: [], test2: [1, 2, 3], expected: [1, 2, 3] },
  { test1: [1, 2, 3], test2: [], expected: [1, 2, 3] },
  { test1: [3, 6], test2: [1, 4], expected: [1, 3, 4, 6] },
  { test1: [1, 2, 4, 5], test2: [3], expected: [1, 2, 3, 4, 5] },
  { test1: [1, 5], test2: [2, 3, 4], expected: [1, 2, 3, 4, 5] },
];

testCases.forEach(({ test1, test2, expected }, index) => {
  // arrange
  const testList1 = createLinkedList(...test1);
  const testList2 = createLinkedList(...test2);
  const expectedList = createLinkedList(...expected);

  // act
  const merged = mergeSortedLists(testList1, testList2);

  // assert
  const result = compareLists(expectedList, merged);
  const message = result
    ? "Pass."
    : `Fail. Expected: ${serializeList(expectedList)}. Actual: ${serializeList(
        merged
      )}`;

  console.log(`Test ${index + 1}: ${message}`);
});
