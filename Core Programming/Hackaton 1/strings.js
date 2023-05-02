// easy

/**
 * Cut a specific section of a given string and return it as a result.
 * @param {string} string The string to cut
 * @param {*} start  The start position
 * @param {*} end The end position
 * @returns {string} The sliced string.
 */

const slice = (string, start = 0, end = string.length) => {
  const result = [];
  for (let i = start; i < end && i < string.length; i++) {
    result.push(string[i]);
  }
  return result.join('');
};

/**
 *Repeats the given string n times.
 * @param {string} string the string to repeat
 * @param {n} n the number of times to repeat the string.
 * @returns the repeated string
 */

const repeat = (string, n) => {
  if (string === '') return '';
  let result = '';
  for (let i = 0; i < n; i++) {
    result += string;
  }
  return result;
};

// medium
/**
 * Converts the first character of string to upper case and the remaining to lower case.
 * @param {string} string The string to capitalize.
 * @returns {string} Returns the capitalized string.
 */
const capitalize = (string) => {
  let firstLetter = '';
  let otherPart = '';

  for (let i = 0; i < string.length; i++) {
    if ( i === 0 ) {
      firstLetter = string.charAt(i).toUpperCase();
      continue;
    }

    otherPart += string.charAt(i).toLowerCase() + '';
  }

  return firstLetter + otherPart;
};

/**
 *Replaces all matches for a single character pattern in a string with replacement string.
 * @param {string} string the string to inspect
 * @param {char} char the char to replace
 * @param {replacement} replacement the match replacement
 * @returns the modified string
 */

const replace = (string, char, replacement) => {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      result += replacement;
    } else {
      result += string[i];
    }
  }
  return result;
};

// hard

/**
 *
 * @param {string} string The String to split.
 * @param {string} separator The separator character to split by.
 * @returns {Array} An array of string segments
 */

const split = (string, separator) => {
  const result = [];
  let temp = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] === separator) {
      result.push(temp);
      temp = '';
    } else {
      temp += string[i];
    }
  }

  result.push(temp);

  return result;
};

/**
 *Trims the trailing spaces from the start and the end of a given string.
 * @param {string} string the string to trim
 * @returns {return} the trimmed string
 */
const trim = (string) => {
  let start = 0;
  let end = string.length - 1;

  while (string[start] === ' ') {
    start++;
  }

  while (string[end] === ' ') {
    end--;
  }

  return string.substring(start, end + 1);
};

export { slice, repeat, capitalize, replace, split, trim };
