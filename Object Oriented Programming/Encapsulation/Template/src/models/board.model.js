import { Task } from './task.model.js';

/** The Board class holds tasks */
export class Board {
  /** The list where all the tasks are held */
  #tasks = [];

  /** Shows what is inside the board.
  * @returns {Array} Array with all the tasks inside. 
  */
  get tasks() {
    const copyTasks = this.#tasks.map(element => element);
    return copyTasks;
  }

  /** Shows what is the length of the current board.
  * @returns {number} Number of tasks.
  */
  get taskCount() {
    return this.#tasks.length;
  }

  /** Adds a new task to board. */
  add(task) {
    if(this.#tasks.includes(task)) {
      throw new Error('This task was already added!');
    }

    if(!(task instanceof Task)) {
      throw new Error('Only instances of Type class allowed!');
    }

    this.#tasks.push(task);
  }
  
  /** Removes a task from board. */
  remove(task) {
    if(!this.#tasks.includes(task)) {
      throw Error('This task is not in the list!');
    }

    const index = this.#tasks.indexOf(task);
    this.#tasks.splice(index, 1);
  }

  /** Transforms board data into a formatted string. 
  * @returns {string} The structured tasks, or 'No tasks at the moment', if the board is empty.
  */
  toString() {
    const titles = '---Task Board---\n\nTasks:\n\n';

    if (this.#tasks.length) {
      return titles + this.#tasks.join('\n--------\n');
    }

    return 'No tasks at the moment.';
  }
}
