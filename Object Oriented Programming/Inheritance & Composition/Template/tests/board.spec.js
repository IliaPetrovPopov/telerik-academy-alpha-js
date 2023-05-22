/* eslint-disable no-undef */
import { Board } from '../src/models/board.model';
import { Task } from '../src/models/board-items/task.model';

const tomorrow = () => {
  let date = new Date();
  date.setDate(date.getDate() + 1);
  return date;
};

describe('Board', () => {

  describe('Constructor', () => {

    it('should initialize items as an empty array', () => {
      const board = new Board();

      expect(board.items).toBeInstanceOf(Array);
      expect(board.items.length).toBe(0);
    });

  });

  describe('add', () => {

    it('should correctly add the task to the items array', () => {
      const board = new Board();
      const mockTask = new Task('test name', tomorrow());

      board.add(mockTask);
      
      expect(board.items).toContain(mockTask);
    });

    it('should throw when we try to add instance of some other class', () => {
      const board = new Board();
      const notATask = new Board();
      
      expect(() => board.add(notATask)).toThrow();
    });

    it('should throw when we add the same item more than once', () => {
      const board = new Board();
      const mockTask = new Task('test name', tomorrow());

      board.add(mockTask);
      
      expect(() => board.add(mockTask)).toThrow();
    });

  });

  describe('taskCount', () => {

    it('should return 0 when the board is initialized with no items', () => {
      const board = new Board();

      expect(board.count).toBe(0);
    });

    it('should return the correct number of items added to the board', () => {
      const board = new Board();
      const mockTask1 = new Task('test name', tomorrow());
      const mockTask2 = new Task('test name', tomorrow());
      board.add(mockTask1);
      board.add(mockTask2);

      expect(board.count).toBe(2);
    });

  });

  describe('remove', () => {

    it('should remove the correct item from the tasks array', () => {
      const board = new Board();
      const mockTask1 = new Task('test name', tomorrow());
      const mockTask2 = new Task('test name', tomorrow());
      board.add(mockTask1);
      board.add(mockTask2);

      board.remove(mockTask1);

      expect(board.items.length).toBe(1);
      expect(board.items).toContain(mockTask2);
      expect(board.items).not.toContain(mockTask1);
    });

    it('should throw if the item to is not in the array', () => {
      const board = new Board();
      const mockTask1 = new Task('test name', tomorrow());
      const mockTask2 = new Task('test name', tomorrow());
      board.add(mockTask1);

      expect(() => board.remove(mockTask2)).toThrow();
    });

  });

  describe('toString', () => {

    it('should return the correct value when there are not items in the board', () => {
      const board = new Board();

      expect(board.toString().endsWith('No items at the moment.')).toBeTruthy();
    });

    it('should return the correct value when there are some items in the board', () => {
      const board = new Board();
      const mockTask1 = new Task('mock task 1', tomorrow());
      const mockTask2 = new Task('mock task 2', tomorrow());
      board.add(mockTask1);
      board.add(mockTask2);

      expect(board.toString()).toContain('---Items Board---');
      expect(board.toString()).toContain('mock task 1');
      expect(board.toString()).toContain('mock task 2');
    });

  });

});
