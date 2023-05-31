/* eslint-disable no-undef */
import { Task } from '../src/models/board-items/task.model.js';
import { ManagerTask } from '../src/models/board-items/tasks/manager-task.model.js';
import { Employee } from '../src/models/employee.model.js';
import { projectType } from '../src/common/project-type.enum.js';

describe('ManagerTask', () => {

    describe('Class', () => {
        
        it('should extend the task model', () => {
            expect(ManagerTask.prototype).toBeInstanceOf(Task);
        });
    });

    describe('constructor', () => {

        it('should print the correct result if everything passes', () => {
            const testP = new Employee('Steve Denning');
            const assign = new ManagerTask('HitHard', new Date('03/07/2024'), projectType.INTERNAL_PRODUCT, testP);

            expect(() => assign.projectType === projectType.INTERNAL_PRODUCT).toBeTruthy();
            expect(() => assign.assignee === testP).toBeTruthy();
        });
    });

    describe('projectType', () => {
        
        it('constructor should throw if passed projectType is invalid', () => {
            const randomP = new Employee('Steve Denning');
            
            expect(() => new ManagerTask(undefined, new Date('03/07/2024'), projectType.INTERNAL_PRODUCT, randomP)).toThrow();
        });

        it('shouldn\'t be able to be changed from the outside', () => {
            const randomP = new Employee('Steve Denning');
            
            const managerTask = new ManagerTask('Koza nostra', new Date('03/07/2024'), projectType.INTERNAL_PRODUCT, randomP);
            expect(() => managerTask.projectType = projectType.EXTERNAL_SERVICE).toThrow();
        });
    });

    describe('assignee', () => {

        it('constructor should throw if passed assignee is not instance of Employee', () => {
            expect(() => new ManagerTask('Abrakadabra', new Date('03/07/2024'), projectType.INTERNAL_PRODUCT, 0)).toThrow();
        });

        it('shouldn\'t be able to be changed from the outside', () => {
            const randomP = new Employee('Steve Denning');
            const testP = new Employee('Bache Smile');

            const managerTask = new ManagerTask('Koza nostra', new Date('03/07/2024'), projectType.INTERNAL_PRODUCT, randomP);
            expect(() => managerTask.assignee = testP).toThrow();
        });
    });
});