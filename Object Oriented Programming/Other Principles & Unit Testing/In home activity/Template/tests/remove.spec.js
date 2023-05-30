/* eslint-disable no-undef */
import { remove } from './../src/remove.js';

describe('remove', () => {
  it('should produce correct string', () => {
    // Arrange
    const test = 'telerik academy';
    const expected = 'tele academy';

    // Act
    const actual = remove(test, 4, 7);

    // Assert
    expect(actual).toBe(expected);
  });

  it('should produce correct string (only start index given)', () => {
    // Arrange
    const test = 'pelerik';
    const expected = 'pel';
    // Act
    const whatIsHappenin = remove(test, 3);
    // Assert
    expect(whatIsHappenin).toBe(expected);
  });

  it('should produce correct string (start = 0)', () => {
    // Arrange
    const test = 'pelerik';
    const expected = '';
    // Act
    const whatIsHappenin = remove(test, 0);
    // Assert
    expect(whatIsHappenin).toBe(expected);
  });

  it('should produce correct string (end = start + 1)', () => {
    // Arrange
    const test = 'telerik academy';
    const expected = 'teleik academy';

    // Act
    const whatIsHappenin = remove(test, 4, 5);

    // Assert
    expect(whatIsHappenin).toBe(expected);
  });

  it('should produce correct string (end = str.length)', () => {
    // Arrange
    const test = 'pelerik';
    const expected = 'pel';
    // Act
    const whatIsHappenin = remove(test, 3);
    // Assert
    expect(whatIsHappenin).toBe(expected);
  });

  it('should throw if invalid value is passed', () => {
    const test = undefined;
    const test1 = null;
    const test2 = [];

    expect(() => remove(test, 0, 2)).toThrow();
    expect(() => remove(test1, 1, 3)).toThrow();
    expect(() => remove(test2, 1, 3)).toThrow();
  });

  it('should throw if non-string value is passed', () => {
    const test = 33;
    const test1 = true;

    expect(() => remove(test, 1, 3)).toThrow();
    expect(() => remove(test1, 0, 2)).toThrow();
  });

  it('should throw if end is smaller than start', () => {
    const test = 'aezakmi';

    expect(() => remove(test, 3, 2)).toThrow();
  });

  it('should throw if start is smaller than 0', () => {
    const teste = 'hello bulgaria';

    expect(() => remove(teste, -1, 4)).toThrow();
  });

  it('should throw if end is equal or bigger than the length of the string', () => {
    const teste = 'hello bulgaria';

    expect(() => remove(teste, 0, teste.length + 1)).toThrow();
  });
});
