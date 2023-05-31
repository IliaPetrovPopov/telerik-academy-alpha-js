/* eslint-disable no-undef */
import { programmerLevel } from '../src/common/programmer-level.enum.js';
import { ProgrammerTask } from '../src/models/board-items/tasks/programmer-task.model.js';
import { Board } from '../src/models/board.model.js';
import { Employee } from '../src/models/employee.model.js';
import { TaskBoard } from '../src/models/task-board.model.js';

programmerLevel;
describe('TaskBoard', () => {

    describe('class', () => {

        it('should extend the Board model', () => {
            expect(TaskBoard.prototype).toBeInstanceOf(Board);
        });
    });

    describe('add', () => {

        it('should throw should throw if item is not a instance of Task, ManagerTask, or ProgrammerTask', () => {
            const taskBoard = new TaskBoard();

            expect(() => taskBoard.add('Udri')).toThrow();

        });

        it('should NOT throw should throw if item is instance of Task, ManagerTask, or ProgrammerTask', () => {
            const taskBoard = new TaskBoard();
            const ada = new Employee('Ada Lovelace');
            const programmerTask = new ProgrammerTask('Fix bug #37', new Date('12/12/2023'), programmerLevel.SENIOR, ada);

            expect(() => taskBoard.add(programmerTask)).not.toThrow();

        });

        it('should correctly add the item when item is an instance of Task, ManagerTask, or ProgrammerTask', () => {
            const taskBoard = new TaskBoard();
            const ada = new Employee('Ada Lovelace');
            const programmerTask = new ProgrammerTask('Fix bug #37', new Date('12/12/2023'), programmerLevel.SENIOR, ada);

            taskBoard.add(programmerTask);

            expect(() => taskBoard.count === 1).toBeTruthy();

        });
    });
});
