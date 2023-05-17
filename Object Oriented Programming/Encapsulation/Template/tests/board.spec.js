/* eslint-disable no-undef */
import { Board } from '../src/models/board.model';
import { Task } from '../src/models/task.model';

const tomorrow = () => {
    let date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
};

describe('Board', () => {

  describe('Constructor', () => {

    it('should initialize tasks as an empty array', () => {
      const board = new Board();

      expect(board.tasks).toBeInstanceOf(Array);
      expect(board.tasks.length).toBe(0);
    });

  });

  describe('add', () => {

    it('should correctly add the task to the tasks array', () => {
      const board = new Board();
      const mockTask = new Task('test name', tomorrow());

      board.add(mockTask);
      
      expect(board.tasks).toContain(mockTask);
    });

    it('should throw when we try to add instance of some other class', () => {
      const board = new Board();
      const notATask = new Board();
      
      expect(() => board.add(notATask)).toThrow();
    });

    it('should throw when we add the same task more than once', () => {
      const board = new Board();
      const mockTask = new Task('test name', tomorrow());

      board.add(mockTask);
      
      expect(() => board.add(mockTask)).toThrow();
    });

  });

  describe('taskCount', () => {

    it('should return 0 when the board is initialized with no tasks', () => {
      const board = new Board();

      expect(board.taskCount).toBe(0);
    });

    it('should return the correct number of tasks added to the board', () => {
      const board = new Board();
      const mockTask1 = new Task('test name', tomorrow());
      const mockTask2 = new Task('test name', tomorrow());
      board.add(mockTask1);
      board.add(mockTask2);

      expect(board.taskCount).toBe(2);
    });

  });

  describe('remove', () => {

    it('should remove the correct task from the tasks array', () => {
      const board = new Board();
      const mockTask1 = new Task('test name', tomorrow());
      const mockTask2 = new Task('test name', tomorrow());
      board.add(mockTask1);
      board.add(mockTask2);

      board.remove(mockTask1);

      expect(board.tasks.length).toBe(1);
      expect(board.tasks).toContain(mockTask2);
      expect(board.tasks).not.toContain(mockTask1);
    });

    it('should throw if the task to is not in the array', () => {
      const board = new Board();
      const mockTask1 = new Task('test name', tomorrow());
      const mockTask2 = new Task('test name', tomorrow());
      board._tasks = [mockTask1];

      expect(() => board.remove(mockTask2)).toThrow();
    });

  });

  describe('toString', () => {

    it('should return the correct value when there are not tasks in the board', () => {
      const board = new Board();

      expect(board.toString().endsWith('No tasks at the moment.')).toBeTruthy();
    });

    it('should return the correct value when there are some tasks in the board', () => {
      const board = new Board();
      const mockTask1 = new Task('mock task 1', tomorrow());
      const mockTask2 = new Task('mock task 2', tomorrow());
      board.add(mockTask1);
      board.add(mockTask2);

      expect(board.toString()).toContain('---Task Board---');
      expect(board.toString()).toContain('mock task 1');
      expect(board.toString()).toContain('mock task 2');
    });

  });

});
