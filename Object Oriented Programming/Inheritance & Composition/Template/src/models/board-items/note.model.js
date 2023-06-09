import { BoardItem } from './board-item.model.js';
import { noteStatus } from '../../common/note-status.enum.js';

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

    /** Getter for the description. */
    get description() {
        return this.#description;
    }

    /** Setter for the description, if it is valid. */
    set description(newDescription) {
        if(!newDescription) {
            throw new Error('Name is not valid value!');
        }

        if(newDescription.length < Note.#MIN_DESC_LENGTH || newDescription.length > Note.#MAX_DESC_LENGTH) {
            throw new Error(`Length of name must be between ${Note.#MIN_DESC_LENGTH} and ${Note.#MAX_DESC_LENGTH} `);
        }

        this.#description = newDescription;
    }

    /** Getter for importance. */
    get importance() {
        return this.#importance;
    }

    /** Getter for status. */
    get status() {
        return this.#status;
    }

    /** Sets the value of status to CREATED. */
    reset() {
        this.#status = noteStatus.CREATED;
    }

    /** Sets the value of status to PENDING. */
    advance() {
        this.#status = noteStatus.PENDING;
    }

    /** Sets the value of status to APPROVED. */
    complete() {
        this.#status = noteStatus.APPROVED;
    }

    /**
     * Transforms the note data into formatted string.
     * @returns {string} The formatted note.
     */
    toString() {
        return '* Note *\n' +
                `Name: ${this.name}\n` +
                `Status: ${this.#status}\n` +
                `Description: ${this.#description}\n`;
    }
}