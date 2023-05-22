/* eslint-disable no-undef */
import { BoardItem } from '../src/models/board-items/board-item.model';
import { Note } from '../src/models/board-items/note.model';
import { noteStatus } from '../src/common/note-status.enum';
import { noteImportance } from '../src/common/note-importance.enum';

describe('Note', () => {

  describe('Class', () => {

    it('should extend BoardItem', () => {
      expect(Note.prototype).toBeInstanceOf(BoardItem);
    });

  });

  describe('Constructor', () => {

    it('should initialize all the fields correctly', () => {
      const note = new Note('test note', 'for testing only', noteImportance.AVERAGE);

      expect(note.name).toBe('test note');
      expect(note.description).toBe('for testing only');
      expect(note.importance).toBe(noteImportance.AVERAGE);
      expect(note.status).toBe(noteStatus.CREATED);
    });

    it('should throw if no name was passed', () => {

      expect(() => new Note(undefined, 'for testing only', noteImportance.AVERAGE)).toThrow();
    });

    it('should throw if no description was passed', () => {

      expect(() => new Note('test note', undefined, noteImportance.AVERAGE)).toThrow();
    });

  });

  describe('set name', () => {

    it('should throw if no name was passed', () => {
      const note = new Note('test note', 'for testing only', noteImportance.AVERAGE);

      expect(() => note.name = undefined).toThrow();
    });
    
    it('should throw if name with invalid length was passed', () => {
      const note = new Note('test note', 'for testing only', noteImportance.AVERAGE);

      expect(() => note.name = 'test').toThrow();
    });

    it('should correctly update the name when valid name was passed', () => {
      const note = new Note('test note', 'for testing only', noteImportance.AVERAGE);
      note.name = 'new name';

      expect(note.name).toBe('new name');
    });

  });

  describe('set description', () => {

    it('should throw if no description was passed', () => {
      const note = new Note('test note', 'for testing only', noteImportance.AVERAGE);

      expect(() => note.description = undefined).toThrow();
    });

    it('should throw if no description was too short', () => {
      const note = new Note('test note', 'for testing only', noteImportance.AVERAGE);

      expect(() => note.description = 'a').toThrow();
    });

    it('should throw if no description was too long', () => {
      const note = new Note('test note', 'for testing only', noteImportance.AVERAGE);

      expect(() => note.description = 'a'.repeat(100)).toThrow();
    });

    it('should correctly update description when valid date was passed', () => {
      const note = new Note('test note', 'for testing only', noteImportance.AVERAGE);
      note.description = 'updated description';

      expect(note.description).toBe('updated description');
    });

  });

  describe('reset', () => {

    it('should set the status to CREATED', () => {
      const note = new Note('test note', 'for testing only', noteImportance.AVERAGE);
      note.advance();

      note.reset();

      expect(note.status).toBe(noteStatus.CREATED);
    });

  });

  describe('advance', () => {

    it('should set the status to PENDING', () => {
      const note = new Note('test note', 'for testing only', noteImportance.AVERAGE);

      note.advance();

      expect(note.status).toBe(noteStatus.PENDING);
    });

  });

  describe('complete', () => {

    it('should set the status to APPROVED', () => {
      const note = new Note('test note', 'for testing only', noteImportance.AVERAGE);

      note.complete();

      expect(note.status).toBe(noteStatus.APPROVED);
    });

  });

  describe('toString', () => {

    it('should return the correct string', () => {
      const note = new Note('test note', 'for testing only', noteImportance.AVERAGE);

      expect(note.toString()).toContain('test note');
      expect(note.toString()).toContain('Description: for testing only');
    });

  });

});
