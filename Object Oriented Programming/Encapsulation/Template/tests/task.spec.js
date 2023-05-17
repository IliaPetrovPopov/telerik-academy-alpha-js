/* eslint-disable no-undef */
import { Task } from '../src/models/task.model';
import { status } from '../src/common/status.enum';

const tomorrow = () => {
    let date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
};

const yesterday = () => {
    let date = new Date();
    date.setDate(date.getDate() - 1);
    return date;
};

const nextYear = () => {
  let date = new Date();
  date.setDate(date.getDate() +365);
  return date;
};

describe('Task', () => {

  describe('Constructor', () => {

    it('should initialize all the fields correctly', () => {
      const date = tomorrow();
      const task = new Task('test task', date);

      expect(task.name).toBe('test task');
      expect(task.dueDate.valueOf()).toBe(date.valueOf());
      expect(task.status).toBe(status.TODO);
    });

    it('should throw if no name was passed', () => {

      expect(() => new Task(undefined, tomorrow())).toThrow();
    });

    it('should throw if no due date was passed', () => {

      expect(() => new Task('task title', undefined)).toThrow();
    });

  });

  describe('set name', () => {

    it('should throw if no name was passed', () => {
      const task = new Task('test task', tomorrow());

      expect(() => task.name = undefined).toThrow();
    });
    
    it('should throw if name with invalid length was passed', () => {
      const task = new Task('test task', tomorrow());

      expect(() => task.name = 'test').toThrow();
    });

    it('should correctly update the name when valid name was passed', () => {
      const task = new Task('test task', tomorrow());
      task.name = 'new name';

      expect(task.name).toBe('new name');
    });

  });

  describe('set dueDate', () => {

    it('should throw if no dueDate was passed', () => {
      const task = new Task('test task', tomorrow());

      expect(() => task.dueDate = undefined).toThrow();
    });
    
    it('should throw if the date passed is in the pass', () => {
      const task = new Task('test task', tomorrow());

      expect(() => task.dueDate = yesterday()).toThrow();
    });

    it('should correctly update dueDate when valid date was passed', () => {
      const task = new Task('test task', tomorrow());

      const date = nextYear();
      task.dueDate = date;

      expect(task.dueDate.valueOf()).toBe(date.valueOf());
    });

  });

  describe('reset', () => {

    it('should set the status to TODO', () => {
      const task = new Task('test task', tomorrow());
      task.advance();

      task.reset();

      expect(task.status).toBe(status.TODO);
    });

  });

  describe('advance', () => {

    it('should set the status to IN_PROGRESS', () => {
      const task = new Task('test task', tomorrow());

      task.advance();

      expect(task.status).toBe(status.IN_PROGRESS);
    });

  });

  describe('complete', () => {

    it('should set the status to DONE', () => {
      const task = new Task('test task', tomorrow());

      task.complete();

      expect(task.status).toBe(status.DONE);
    });

  });

  describe('toString', () => {

    it('should return the correct string', () => {
      const date = tomorrow();

      const task = new Task('test task', date);

      expect(task.toString()).toBe(`Name: test task\nStatus: Todo\nDue: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`);
    });

  });

});
