import { status } from '../common/status.enum.js';

/** The Task class holds all relevant data and behavior a task might have. */
export class Task {
  // One way to indicate that a field should not be touched is to put an underscore before its name.
  // This won't prevent your colleges from directly interacting with it.
  
  /** Name of task. */
  #name;
  
  /** Deadline for submission of task. */
  #dueDate;

  /** Status of task.*/
  #status;

  static #MAX_LENGTH = 20;
  static #MIN_LENGTH = 6;
  constructor(newName, newDate) {
    this.name = newName;
    this.dueDate = newDate;
    this.reset();
  }

  /** Shows name of a task. */
  get name() {
    return this.#name;
  }

  /** Changes name of a task.*/
  set name(value) {
    if(!value) {
      throw new Error('Invalid value!');
    }

    if(value.length < Task.#MIN_LENGTH || value.length > Task.#MAX_LENGTH) {
      throw new Error('The length of the value is either shorter or longer than the constrains!');
    }

    this.#name = value;
  }

  /** Shows the deadline for submission of a task.*/
  get dueDate() {
    return this.#dueDate;
  }

  /** Changes deadline for submission of a task */
  set dueDate(date) {
    if(!date) {
      throw new Error('The input is incorrect!');
    }

    if(date.valueOf() < new Date().valueOf()) {
      throw new Error('You can\'t set the dueDate to past date!');
    }

    this.#dueDate = date;
  }

  /** Gets the status of a task*/
  get status() {
    return this.#status;
  }
  /** Sets the task status to TODO. */
  reset() {
    this.#status = status.TODO;
  }

  /** Sets the task status to IN_PROGRESS. */
  advance() {
    this.#status = status.IN_PROGRESS;
  }

  /** Sets the task status to DONE. */
  complete() {
    this.#status = status.DONE;
  }

  /** Transforms the task data into a formatted string 
  * @returns {string} The formatted task.
  */
  toString() {
    return `Name: ${this.#name}\n` + 
           `Status: ${this.#status}\n` +
           `Due: ${this.#dueDate.toLocaleDateString()} ${this.#dueDate.toLocaleTimeString()}`;
  }
}
