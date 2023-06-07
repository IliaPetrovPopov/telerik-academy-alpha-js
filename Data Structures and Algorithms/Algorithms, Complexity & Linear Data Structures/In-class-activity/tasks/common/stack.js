import { ListNode } from './linked-list.js';

export class Stack {
    /** @type {ListNode} */
    #top = null;

    /**
     * Appends value to the top of the stack
     * @param {any} value 
     * @returns {void}
     */
    push(value) {
        this.#top = new ListNode(value, this.#top);
    }

    /**
     * Removes and returns the top value
     * @returns {any} The top value
     */
    pop() {
        if (!this.#top) {
            throw new Error('stack is empty');
        }

        const val = this.#top.value;
        this.#top = this.#top.next;

        return val;
    }

    /**
     * Returns the top value without removing.
     * @returns {any} The top value
     */
    peek() {
        if (!this.#top) {
            throw new Error('stack is empty');
        }

        return this.#top.value;
    }

    /**
     * Returns true if stack is empty
     * @returns {boolean}
     */
    isEmpty() {
        return !this.#top;
    }
}
