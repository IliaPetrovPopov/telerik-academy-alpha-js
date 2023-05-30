/**
 * Removes a specified range of characters from an input string
 * @param {string} str the input string
 * @param {start} number the starting index (inclusive)
 * @param {end?} number the ending index (exclusive, defaults to str.length)
 * @returns {string} string with specified range removed
 */
export const remove = (str, start, end = str.length) => {
  if (!str) {
    throw new Error('Str must be valid value.');
  }
  
  if(typeof str !== 'string') {
    throw new Error('Value must always be string.')
  }
  if (start < 0 || end > str.length) {
    throw new Error('Start and end must be within the boundaries of the string.');
  }

  if (end <= start) {
    throw new Error('End must be greater than start.');
  }

  const buffer = [];
  for (let i = 0; i < start; i++)
    buffer.push(str.charAt(i));
  for (let i = end; i < str.length; i++)
    buffer.push(str.charAt(i));

  return buffer.join('');
};