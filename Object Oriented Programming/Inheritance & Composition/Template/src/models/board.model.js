import { Task } from './board-items/task.model.js';

/** The Board class holds items */
export class Board {
  /** The list where all the tasks are held */
  #items;

  /** Constructor of board. */
  constructor() {
    this.#items = [];
  }

  /** Shows what is inside the board.
  * @returns {Array} Array with all the tasks inside. 
  */
  get items() {
    return this.#items.slice();
  }

  /** Shows what is the length of the current board.
  * @returns {number} Number of tasks.
  */
  get count() {
    return this.#items.length;
  }

  /**
   * Adds new task to board.
   * @param {object} item Task to be added
   */
  add(item) {
    if (!(item instanceof BoardItem)) {
      throw new Error('The provided value is not an objected created from the BoardItem class!');
    }

    const itemIndex = this.#items.findIndex(existingItem => existingItem === item);

    if (itemIndex >= 0) {
      throw new Error('The provided item already exists in this board!');
    }

    this.#items.push(item);
  }

  /**
   * Removes task from board.
   * @param {object} item Task to be removed.
   */
  remove(item) {
    if (!(item instanceof BoardItem)) {
      throw new Error('The provided value is not an objected created from the BoardItem class!');
    }
    
    const itemIndex = this.#items.findIndex(existingItem => existingItem === item);

    if (itemIndex < 0) {
      throw new Error('The provided task does not exist in this board!');
    }

    this.#items.splice(itemIndex, 1);
  }

  /** Transforms the board data into a formatted string. 
  * @returns {string} The formatted board.
  */
  toString() {
    const titles = '---Items Board---\n\nItems:\n\n';

    if (this.#items.length) {
      return titles + this.#items.join('\n--------\n');
    }

    return `${titles}No items at the moment.`;
  }
}
