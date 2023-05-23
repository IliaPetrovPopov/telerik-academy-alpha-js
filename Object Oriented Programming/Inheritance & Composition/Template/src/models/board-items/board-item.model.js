
export class BoardItem {
    /** Name of board item */
    #name;

    /** The minimum length of name. */
    static #MIN_NAME_LENGTH = 6;

    /** The minimum length of name. */
    static #MAX_NAME_LENGTH = 20;

    /**
     * Constructor of board item.
     * @param {string} newName Current name.
     */
    constructor(newName) {
        this.name = newName;
    }

    /** Getter for name. */
    get name() {
        return this.#name;
    }

    /** Sets name to newName, if newName is valid.*/
    set name(newName) {
        if(!newName) {
            throw new Error('Name is not valid value!');
        }

        if(newName.length < BoardItem.#MIN_NAME_LENGTH || newName.length > BoardItem.#MAX_NAME_LENGTH ) {
            throw new Error(`Length of name must be between ${BoardItem.#MIN_NAME_LENGTH} and ${BoardItem.#MAX_NAME_LENGTH} `);
        }

        this.#name = newName;
    }
}
