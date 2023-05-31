export class BoardItem {

  static #minNameLength = 6;
  static #maxNameLength = 20;

  #name;

  constructor(name) {
    this.name = name;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    if (!value) {
      throw new Error('Name not provided!');
    }

    if (value.length < BoardItem.#minNameLength || value.length > BoardItem.#maxNameLength) {
      throw new Error('Name length not within constraints!');
    }

    this.#name = value;
  }

  toString() {
    return `* ${this.constructor.name} *\nName: ${this.name}`;
  }

}