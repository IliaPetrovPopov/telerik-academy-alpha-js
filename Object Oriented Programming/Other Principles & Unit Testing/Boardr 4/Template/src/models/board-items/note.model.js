import { BoardItem } from './board-item.model.js';
import { noteStatus } from '../../common/note-status.enum.js';

export class Note extends BoardItem {

  static #minDescriptionLength = 6;
  static #maxDescriptionLength = 60;

  #status;
  #importance;
  #description;

  constructor(name, description, importance) {
    super(name);

    this.description = description;
    this.#importance = importance;
    this.#status = noteStatus.CREATED;
  }

  get status() {
    return this.#status;
  }

  get description() {
    return this.#description;
  }

  set description(value) {
    if (!value) {
      throw new Error('Description not provided!');
    }
    if (value.length < Note.#minDescriptionLength || value.length > Note.#maxDescriptionLength) {
      throw new Error(`Issue description must be between ${Note.#minDescriptionLength} and ${Note.#maxDescriptionLength} characters!`);
    }

    this.#description = value;
  }

  get importance() {
    return this.#importance;
  }

  reset() {
    this.#status = noteStatus.CREATED;
  }

  advance() {
    this.#status = noteStatus.PENDING;
  }

  complete() {
    this.#status = noteStatus.APPROVED;
  }

  toString() {
    return `${super.toString()}
Status: ${this.#status}
Description: ${this.description}`;
  }

}