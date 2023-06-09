import { BoardItem } from './board-item.model.js';
import { issueStatus } from '../../common/issue-status.enum.js';

export class Issue extends BoardItem {
    /** The date when the issue was created. */
    #createdOn;

    /** The date then the issue was resolved. */
    #resolvedOn = null;

    /** Current issue's status. */
    #status;

    /** Description of current issue. */
    #description;

    /** Minimum length for description. */
    static #MIN = 10;

    /** Maximum length for description. */
    static #MAX = 40;

    /**
     * Constructor for current issue.
     * @param {string} name Current issue's name.
     * @param {string} description Current issue's description.
     */
    constructor(name, description) {
        super(name);
        this.description = description;
        this.#createdOn = new Date();
        this.#status = issueStatus.RAISED;
    }
    
    /** Shows the value of createdOn. */
    get createdOn() {
        return this.#createdOn;
    }

    /** Shows the value of resolvedOn. */
    get resolvedOn() {
        return this.#resolvedOn;
    }

    /** Shows the value of status. */
    get status() {
        return this.#status;
    }

    /** Shows the value of description. */
    get description() {
        return this.#description;
    }

    /**
     * Sets the value of description to newDescription if it is valid.
     */
    set description(newDescription) {
        if (!newDescription) {
            throw new Error('Invalid value!');
        }

        if(typeof newDescription !== 'string') {
            throw new Error('Type must always be string!');
        }

        if(newDescription.length < Issue.#MIN || newDescription.length > Issue.#MAX) {
            throw new Error(`Length must be between ${Issue.#MIN} and ${Issue.#MAX}!`);
        }

        this.#description = newDescription;
    }

    /** Sets the value of private property status to RAISED. */
    reset() {
        return this.#status = issueStatus.RAISED;
    }

    /** Sets the value of private property status to IN_REVIEW. */
    advance() {
        this.#status = issueStatus.IN_REVIEW;
    }

    /** Sets the value of private property status to RESOLVED. */
    complete() {
        this.#status = issueStatus.RESOLVED;
        this.#resolvedOn = new Date();
    }

    /** Formats current issue to more readable string. 
    * @returns {string} Formatted issue.
    */
    toString() {
        return '* Issue *\n' +
                `Name: ${this.name}\n` +
                `Status: ${this.#status}\n` +
                `Description: ${this.#description}\n` +
                `Created on: ${this.#createdOn}\n` +
                `Resolved on: ${this.#resolvedOn === null ? 'Not yet resolved' : this.#resolvedOn}\n`;
    }
}
