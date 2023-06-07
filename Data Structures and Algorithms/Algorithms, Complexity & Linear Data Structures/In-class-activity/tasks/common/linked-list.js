export class ListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next || null;
    }
}

/**
 * 
 * @param  {...any} values Sequence of values to be converted to a LinkedList 
 * @returns {ListNode} The head node
 */
export const createLinkedList = (...values) => 
    values
        .reverse()
        .reduce((prevHead, curr) => new ListNode(curr, prevHead), null);

/**
 * 
 * @param {ListNode} a first list
 * @param {ListNode} b second list
 * @returns {boolean} true if equal
 */
export const compareLists = (a, b) => {
    while (a && b) {
        if (a.value !== b.value) {
            return false;
        }
        a = a.next;
        b = b.next;
    }

    return a === null && b === null;
}

/**
 * 
 * @param {ListNode} head Reference to the head node
 * @returns {string} Serialized string representation
 */
export const serializeList = (head) => {
    const values = [];
    while (head) {
        values.push(head.value);
        head = head.next;
    }

    return values.join(',');
}
