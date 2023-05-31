import { Task } from '../task.model.js';
import { Employee } from '../../employee.model.js';
import { projectType } from '../../../common/project-type.enum.js';

export class ManagerTask extends Task{

    /** Type of project */
    #projectType;

    /** Instance of the 'Employee' model */
    #assignee;

    /**
     * @param {string} name 
     * @param {Date} dueDate 
     * @param {projectType} projectType 
     * @param {Employee} assignee 
     */
    constructor(name, dueDate, projectT, assignee) {
        super(name, dueDate);

        if(!Object.values(projectType).includes(projectT)) {
            throw new Error('Such project type doesn\'t exist');
        }

        if(!(assignee instanceof Employee)) {
            throw new Error('Value must always be instance of Employee');
        }

        this.#projectType = projectType;
        this.#assignee = assignee;
    }

    get projectType() {
        return this.#projectType;
    }

    get assignee() {
        return this.#assignee;
    }
}
