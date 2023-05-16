import { status } from './status.js';

/** The Task class holds all relevant data and behavior a task might have. */
export class Task {
  // One way to indicate that a field should not be touched is to put an underscore before its name.
  // This won't prevent your colleges from directly interacting with it.

  /** The name of the task. */
  _name;

  /** Deadline for submission of the task. */
  _dueDate;

  /** Status of the task.*/
  _status;

  constructor(name, dueDate) {
    this.changeName(name);
    this.changeDueDate(dueDate);
    this.reset();
  }

  /**
   * Outputs '_name', '_dueDate' and '_status' of the current task
   * in more readable way.
   * @returns {string} Returns string, with 'Name', 'Status' 
   * and 'Due' properties.
   */
  toString() {
return `
Name: ${this._name}
Status: ${this._status}
Due: ${(this._dueDate).toLocaleString('en-US')}
`;
  }

  /** Changes name of the task, only if the new name is valid.
   * @param {string} value String to replace the name with.
  */
  changeName(value) {
    if(Boolean(value) === false || (value.length < 6 && value.length > 20)) {
      throw new Error('Name is not valid!');
    }

    this._name = value;
  }

  /**
   * Changes the dueDate with new date, only if that date is valid.
   * @param {Date} value Date to change dueDate value with.
   */
  changeDueDate(value) {
    if (!isNaN(value) && value instanceof Date) {
      this._dueDate = value;
    } else {
      throw new Error('The date is not valid');
    }
  }
  
  /** Resets the status of the task, making it, by default, to 'TODO'. */
  reset() {
    this._status = status.TODO;
  }

  /** Changes the status of the task to 'IN_PROGRESS'. */
  advance() {
    this._status = status.IN_PROGRESS;
  }

  /** Marks the task as completed by changing the status to 'DONE'. */
  complete() {
    this._status = status.DONE;
  }
}