/* eslint-disable no-undef */
import { BoardItem } from '../src/models/board-items/board-item.model';
import { Issue } from '../src/models/board-items/issue.model';
import { issueStatus } from '../src/common/issue-status.enum';

describe('Issue', () => {

  describe('Class', () => {

    it('should extend BoardItem', () => {
      expect(Issue.prototype).toBeInstanceOf(BoardItem);
    });

  });

  describe('Constructor', () => {

    it('should initialize all the fields correctly', () => {
      const issue = new Issue('test issue', 'for testing only');

      expect(issue.name).toBe('test issue');
      expect(issue.description).toBe('for testing only');
      expect(issue.status).toBe(issueStatus.RAISED);
    });

    it('should throw if no name was passed', () => {

      expect(() => new Issue(undefined, 'for testing only')).toThrow();
    });

    it('should throw if no description was passed', () => {

      expect(() => new Issue('test issue', undefined)).toThrow();
    });

  });

  describe('set name', () => {

    it('should throw if no name was passed', () => {
      const issue = new Issue('test issue', 'for testing only');

      expect(() => issue.name = undefined).toThrow();
    });
    
    it('should throw if name with invalid length was passed', () => {
      const issue = new Issue('test issue', 'for testing only');

      expect(() => issue.name = 'test').toThrow();
    });

    it('should correctly update the name when valid name was passed', () => {
      const issue = new Issue('test issue', 'for testing only');
      issue.name = 'new name';

      expect(issue.name).toBe('new name');
    });

  });

  describe('set description', () => {

    it('should throw if no description was passed', () => {
      const issue = new Issue('test issue', 'for testing only');

      expect(() => issue.description = undefined).toThrow();
    });

    it('should throw if no description was too short', () => {
      const issue = new Issue('test issue', 'for testing only');

      expect(() => issue.description = 'a').toThrow();
    });

    it('should throw if no description was too long', () => {
      const issue = new Issue('test issue', 'for testing only');

      expect(() => issue.description = 'a'.repeat(100)).toThrow();
    });

    it('should correctly update description when valid date was passed', () => {
      const issue = new Issue('test issue', 'for testing only');
      issue.description = 'updated description';

      expect(issue.description).toBe('updated description');
    });

  });

  describe('reset', () => {

    it('should set the status to RAISED', () => {
      const issue = new Issue('test issue', 'for testing only');
      issue.advance();

      issue.reset();

      expect(issue.status).toBe(issueStatus.RAISED);
      expect(issue.resolvedOn).toBeFalsy();
    });

  });

  describe('advance', () => {

    it('should set the status to IN_REVIEW', () => {
      const issue = new Issue('test issue', 'for testing only');

      issue.advance();

      expect(issue.status).toBe(issueStatus.IN_REVIEW);
      expect(issue.resolvedOn).toBeFalsy();
    });

  });

  describe('complete', () => {

    it('should set the status to RESOLVED', () => {
      const issue = new Issue('test issue', 'for testing only');

      issue.complete();

      expect(issue.status).toBe(issueStatus.RESOLVED);
      expect(issue.resolvedOn).toBeInstanceOf(Date);
    });

  });

  describe('toString', () => {

    it('should return the correct string when the issue is not resolved', () => {
      const issue = new Issue('test issue', 'for testing only');

      expect(issue.toString()).toContain('test issue');
      expect(issue.toString()).toContain('Description: for testing only');
      expect(issue.toString()).toContain('Not yet resolved');
    });

    it('should return the correct string when the issue is resolved', () => {
      const issue = new Issue('test issue', 'for testing only');
      issue.complete();

      expect(issue.toString()).toContain('test issue');
      expect(issue.toString()).toContain('Description: for testing only');
      expect(issue.toString()).not.toContain('Not yet resolved');
    });

  });

});
