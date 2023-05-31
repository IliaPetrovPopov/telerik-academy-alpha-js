import { Task } from './board-items/task.model.js';
import { Board } from './board.model.js';

export class TaskBoard extends Board {
  #items = [];

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

  /** Transforms the board data into a formatted string. */
  toString() {
    const titles = '---Tasks Board---\n\nTasks:\n\n';

    if (this.items.length) {
      return titles + this.items.join('\n--------\n');
    }

    return `${titles} No items at the moment.`;
  }
}
