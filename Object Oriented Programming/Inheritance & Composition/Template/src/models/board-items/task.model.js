import { taskStatus } from '../../common/task-status.enum.js';
import { BoardItem } from './board-item.model.js';

export class Task extends BoardItem {
  #name;
  #dueDate;
  #status;

  constructor(name, dueDate) {
    // Reuse base class constructor first
    super();
    // Set through the setters to validate fields
    this.name = name;
    this.dueDate = dueDate;
    
    this.#status = taskStatus.TODO;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    if (!value) {
      throw new Error('Name not provided!');
    }

    if (value.length < 6 || value.length > 20) {
      throw new Error('Name length not within constraints!');
    }

    this.#name = value;
  }

  get dueDate() {
    return this.#dueDate;
  }

  set dueDate(value) {
    if (!value) {
      throw new Error('Due date not provided!');
    }

    if (value.valueOf() < Date.now().valueOf()) {
      throw new Error('Can\'t set due date to a date in the past!');
    }

    this.#dueDate = value;
  }
  
  get status() {
    return this.#status;
  }

  reset() {
    this.#status = taskStatus.TODO;
  }

  advance() {
    this.#status = taskStatus.IN_PROGRESS;
  }

  complete() {
    this.#status = taskStatus.DONE;
  }

  toString() {
    return '* Task *\n' +
           `Name: ${this.#name}\n` + 
           `Status: ${this.#status}\n` +
           `Due: ${this.#dueDate.toLocaleDateString()} ${this.#dueDate.toLocaleTimeString()}`;
  }
}
