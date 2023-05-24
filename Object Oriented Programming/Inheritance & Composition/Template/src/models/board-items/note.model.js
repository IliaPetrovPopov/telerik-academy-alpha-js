import { BoardItem } from './board-item.model.js';

export class Note extends BoardItem {
    /** Description of note */
    #description;

    /** Importance of note */
    #importance;

    /** Status of note */
    #status;

    /** The minimim length of description. */
    static #MIN_DESC_LENGTH = 6;

    /** The maximum length of description. */
    static #MAX_DESC_LENGTH = 60;

    /**
     * Note's constructor.
     * @param {string} name String, which shows the name of note.
     * @param {string} description String, which shows description of note.
     * @param {string} importance Readonly enum, showing the importance of note.
     */
    constructor(name, description, importance) {
        super(name);
        this.description = description;
        this.#importance = importance;
        this.#status = noteStatus.CREATED;
    }


    reset() {
        this.#status = 
    }

    advance() {

    }

    complete() {

    }

    toString() {

    }
}