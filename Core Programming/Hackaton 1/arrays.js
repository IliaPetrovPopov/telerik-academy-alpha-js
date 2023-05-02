// easy

/**
 * Reverse an array
 *
 * @param {array} array the array to be reversed
 * @returns {array} a new reversed copy of the array
 */
const reverse = (array) => {
  const reversed = [];

  for (let index = array.length - 1; index >= 0; index--) {
    reversed.push(array[index]);
  }

  return reversed;
};

/**
 *Fills elements of array with value from "start" to "end"
 * @param {array} array the array to fill
 * @param {value} value the value to fill array with
 * @param {start} [start = 0] the start position
 * @param {end} [end = array.length] the end position
 * @returns {newArr} returns filled array
 */
const fill = (array, value, start = 0, end = array.length) => {
  const newArr = [...array];
  for (start; start < end; start++) {
    newArr[start] = value;
  }
  return newArr;
};

// medium

/**
 * Converts all elements in array into a string separated by separator.
 * @param {Array} array The array to convert.
 * @param {string} separator The element separator.
 * @returns {string} Returns the joined string.
 */
const join = (array, separator = ',') => {
  let finalStr = '';
  for (let i = 0; i < array.length - 1; i++) {
    finalStr += array[i] + '' + separator;
  }
  finalStr += array[array.length - 1];
  return finalStr;
};

/**
 * Finds and returns the index of the searched element in the array.
 * @param {array} array The array to search in
 * @param {element} element the element to search for
 * @returns {return} The found index or -1
 */

const indexOf = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return -1;
};

// hard

/**
 * Filter an array
 * Iterates over elements of collection, returning an array of all elements the passed function returns truthy for.
 * @param {Array} collection The collection to iterate over.
 * @param {function} predicate The function invoked per iteration, which returns either truthy or falsy.
 * @returns {Array} Returns array of objects.
 */

const filter = (array, predicate) => {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      arr.push(array[i]);
    }
  }
  return arr;
};

/**
 * Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.
 * The array of groups is as long as the smallest passed array.
 * @param  {...arrays} arrays The arrays to process
 * @returns {result} the new array of grouped elements
 */

const zip = (...arrays) => {
  const newArr = [...arrays];
  const result = [];
  let lowestArr = Infinity;
  for (let i = 0; i < newArr.length; i++) {
    if (lowestArr > newArr[i].length) {
      lowestArr = newArr[i].length;
    }
  }
  for (let i = 0; i < lowestArr; i++) {
    const copyArr= [];
    for (let j = 0; j < arrays.length; j++) {
      copyArr.push(newArr[j][i]);
    }
    result.push(copyArr);
  }
  return result;
};

export { reverse, fill, join, indexOf, filter, zip };
