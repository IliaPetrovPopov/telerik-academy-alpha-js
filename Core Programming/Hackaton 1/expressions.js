// easy
/**
 * Checks if the string have the minimal given length.
 * @param {string} str The string to check.
 * @param {number} minLength The min length.
 * @returns {boolean} Returns true if the validation passes and false if it doesn't.
 */
const isMinLength = (str, minLength) => str.length > minLength;

/**
 * Checks if the string have the maximal given length.
 * @param {str} str the string to check.
 * @param {maxLength} maxLength the max length
 * @returns {boolean} true if the validation passes and false if it doesn't
 */
const isMaxLength = (str, maxLength) =>
  str.length <= maxLength ? true : false;

// medium
/**
 *
 * @param {any} value The value to search for.
 * @param {*} possibleValues The array to search in.
 * @returns {boolean} Returns true if the validation passes and false if it doesn't.
 */

const isIn = (value, possibleValues) => possibleValues.includes(value);

/**
 *Checks if all of the elements in the array are of given type.
 * @param {arr} arr the array to check.
 * @param {type} type the type the elements against
 * @returns {boolean} true if the validation passes and false if it doesn't
 */

const isArrayOfType = (arr, type) =>
  arr.length === 0 ? false : arr.every((element) => typeof element === type);

// hard
/**
 * Checks if an array of strings holds only valid numbers inside.
 * @param {Array} stringNumbers The array of strings.
 * @returns {boolean} Returns true if the validation passes and false if it doesn't.
 */
const areValidNumbers = (stringNumbers) =>
  stringNumbers.every((element) => !isNaN(element));


/**
 *From a given string of separated numbers by a single space, sum the numbers and return the accumulated sum.
 * @param {string} string the string of numbers separated by a single space
 * @returns the accumulated sum from the numbers
 */

const sumNumbersFromString = (string) =>
  string.length === 0 ? 0 : string.split(' ').reduce((arr, el) => +arr + +el);

export {
  isMinLength,
  isMaxLength,
  isIn,
  isArrayOfType,
  areValidNumbers,
  sumNumbersFromString,
};
