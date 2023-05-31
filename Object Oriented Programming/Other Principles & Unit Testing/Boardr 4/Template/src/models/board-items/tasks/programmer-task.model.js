import { Task } from '../task.model.js';
import { programmerLevel } from '../../../common/programmer-level.enum.js';
import { Employee } from '../../employee.model.js';

export class ProgrammerTask extends Task {
    
    #programmerLevel;
    #assignee;

    constructor(name, dueDate, programmerL, assignee) {
        super(name, dueDate);

        if(!Object.values(programmerLevel).includes(programmerL)) {
            throw new Error('Such programmer level doesn\'t exist');
        }

        if(!(assignee instanceof Employee)) {
            throw new Error('Value must always be instance of Employee');
        }

        this.#programmerLevel = programmerL;
        this.#assignee = assignee;
    }

    get programmerLevel() {
        return this.#programmerLevel;
    }

    get assignee() {
        return this.#assignee;
    }
}