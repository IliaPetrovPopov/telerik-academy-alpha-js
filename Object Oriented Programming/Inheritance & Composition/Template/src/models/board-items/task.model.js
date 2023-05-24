import { taskStatus } from '../../common/task-status.enum.js';
import { BoardItem } from './board-item.model.js';

export class Task extends BoardItem {
  /** Date object, the date of the deadline. */
  #dueDate;

  /** The task's status, which is readonly enum */
  #status;

  /**
   * Task's constructor.
   * @param {string} name Name of the task.
   * @param {Date} dueDate Date of the task.
   */
  constructor(name, dueDate) {
    // Reuse base class constructor first
    super(name);
    // Set through the setters to validate fields
    this.dueDate = dueDate;
    
    this.#status = taskStatus.TODO;
  }

  /** Getter for the deadline, hold by dueDate. */
  get dueDate() {
    return this.#dueDate;
  }

  /** Setter for the dueDate. */
  set dueDate(value) {
    if (!value) {
      throw new Error('Due date not provided!');
    }

    if (value.valueOf() < Date.now().valueOf()) {
      throw new Error('Can\'t set due date to a date in the past!');
    }

    this.#dueDate = value;
  }
  
  /** Getter for the status of current Task. */
  get status() {
    return this.#status;
  }

  /** Sets the status of the task to TODO. */
  reset() {
    this.#status = taskStatus.TODO;
  }

  /** Sets the status of the task to IN_PROGRESS. */
  advance() {
    this.#status = taskStatus.IN_PROGRESS;
  }

  /** Sets the status of the task to DONE. */
  complete() {
    this.#status = taskStatus.DONE;
  }

  /**
   * Formats current task to more readable string. 
   * @returns {string} The formatted task.
   */
  toString() {
    return '* Task *\n' +
           `Name: ${this.name}\n` + 
           `Status: ${this.#status}\n` +
           `Due: ${this.#dueDate.toLocaleDateString()} ${this.#dueDate.toLocaleTimeString()}`;
  }
}
