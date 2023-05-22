import { Task } from './board-items/task.model.js';

/** The Board class holds items */
export class Board {
  #items;

  constructor() {
    this.#items = [];
  }

  get items() {
    return this.#items.slice();
  }

  get count() {
    return this.#items.length;
  }

  add(item) {
    if (!(item instanceof Task)) {
      throw new Error('The provided value is not an objected created from the BoardItem class!');
    }

    const itemIndex = this.#items.findIndex(existingItem => existingItem === item);

    if (itemIndex >= 0) {
      throw new Error('The provided item already exists in this board!');
    }

    this.#items.push(item);
  }
  
  remove(item) {
    if (!(item instanceof Task)) {
      throw new Error('The provided value is not an objected created from the BoardItem class!');
    }
    
    const itemIndex = this.#items.findIndex(existingItem => existingItem === item);

    if (itemIndex < 0) {
      throw new Error('The provided task does not exist in this board!');
    }

    this.#items.splice(itemIndex, 1);
  }

  /** Transforms the board data into a formatted string. */
  toString() {
    const titles = '---Items Board---\n\nItems:\n\n';

    if (this.#items.length) {
      return titles + this.#items.join('\n--------\n');
    }

    return `${titles}No items at the moment.`;
  }
}
