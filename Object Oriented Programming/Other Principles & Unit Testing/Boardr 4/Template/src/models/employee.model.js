export class Employee {

    static #id = 0;
    static #MIN_LENGTH = 5;
    static #MAX_LENGTH = 40;

    /** Name of employee.*/
    #name;

    /**
     * @param {string} name
     */
    constructor(newName) {
        this.name = newName;
        Employee.#id++;
    }

    /** Current employee's name. */
    get name() {
        return this.#name;
    }

    /** Changes the name, only if the passed value is valid.
     * @param {string} value String with which to change value of name. 
     */

    set name(value) {
        if(!value) {
            throw new Error('Name must be valid value.');
        }

        if(typeof value !== 'string') {
            throw new Error('Name always must be string');
        }

        if(value.length < Employee.#MIN_LENGTH|| value.length > Employee.#MAX_LENGTH) {
            throw new Error(`Name's length must be between ${Employee.#MIN_LENGTH} and ${Employee.#MAX_LENGTH} symbols.`);
        }

        this.#name = value;
    }

    /** Current employee's id. 
    * @type {number}
    */
    get id() {
        return Employee.#id;
    }
}
