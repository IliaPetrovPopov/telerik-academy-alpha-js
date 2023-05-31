/* eslint-disable no-undef */
import { Task } from '../src/models/board-items/task.model.js';
import { ProgrammerTask } from '../src/models/board-items/tasks/programmer-task.model.js';
import { programmerLevel } from '../src/common/programmer-level.enum.js';
import { Employee } from '../src/models/employee.model.js';

describe('ProgrammerTask', () => {

    describe('class', () => {

        it('should extend the Task model', () => {
            expect(ProgrammerTask.prototype).toBeInstanceOf(Task);
        });
    });

    describe('constructor', () => {

        it('should assign correctly the values of programmerLevel and assignee', () => {
            const testP = new Employee('Steve Denning');
            const assign = new ProgrammerTask('Fix bug #37', new Date('12/12/2024'), programmerLevel.SENIOR, testP);

            expect(() => assign.programmerLevel === programmerLevel.SENIOR).toBeTruthy();
            expect(() => assign.assignee === testP).toBeTruthy();
        });
    });
    
    describe('programmerLevel', () => {

        it('constructor should throw if passed programmerLevel is invalid', () => {
            const testP = new Employee('Ada Lovelace');

            expect(() => new ProgrammerTask('Fix bug #37', new Date('12/12/2024'), 1234, testP)).toThrow();
        });
    });

    describe('assignee', () => {

        it('constructor should throw if passed assignee is not a Employee object', () => {
            expect(() => new ProgrammerTask('Fix bug #37', new Date('12/12/2024'), programmerLevel.SENIOR, 'sashko')).toThrow();
        });

        it('should not be able to change the value of assignee', () => {
            const testP = new Employee('Steve Denning');
            const assign = new ProgrammerTask('Fix bug #37', new Date('12/12/2024'), programmerLevel.SENIOR, testP);

            expect(() => assign.assignee = new Employee('Petro Petrev')).toThrow();
        });
    });
});