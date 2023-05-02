export * from './math.js';
// easy
/**
 * Returns the smallest number in the array.
 * @param {Array} array The array of numbers.
 * @returns {number}  Returns the smallest number.
 */
const min = (array) => {
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < array.length; i++ ) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min !== Number.MAX_SAFE_INTEGER ? min : 'Array is empty';
};

/**
 *Returns the sum of all numbers in the array.
 * @param {array} array the array of numbers
 * @returns {return} returns the sum of the numbers
 */
const sum = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += +array[i];
  }
  return sum;
};

// medium

/**
 * Returns the average of all numbers in the array. The average is calculated by dividing the sum of all elements by the length of the array.
 * @param {Array} array The array of numbers.
 * @returns {number} Returns the average.
 */
const average = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  const total = sum / array.length;
  return total;
};

/**
 *Raises the number to the chosen power.
 * @param {number} number the base number
 * @param {power} power the power by which the number should be raised
 * @returns {result} returns the number raised by the power
 */
const pow = (number, power) => {
  let sum = number;
  if (sum === +sum && power === +power) {
    for (let i = 1; i < power; i++) {
      sum *= number;
    }
  }
  return sum;
};

// hard
/**
 * Return true if the number is a prime number and false if the number is not prime.
 * @param {number} number The number to be checked if it's prime.
 * @returns {boolean} Returns if the numbers is prime or not (true or false).
 */
const isPrime = (number) => {
  let isPrime = true;

  if ( number < 2 ) {
    isPrime = false;
  } else {
    for ( let i = 2; i < Math.sqrt(number); i++ ) {
      if ( number % i === 0 ) {
        isPrime = false;
      }
    }
  }

  return isPrime;
};


/**
 *Swaps the whole part and the reminder part of a given number.
 * @param {number} number the number to swap
 * @returns {return} the number with the applied swapping
 */

const swapWholeAndRemainder = (number) => {
  number = `${number}`;
  const beforeDot = [];
  const afterDot = [];

  let i = 0;
  for (i; i < number.length; i++) {
    if (number[i] !== '.') {
      beforeDot.push(number[i]);
    } else if (number[i] === '.') {
      for (let j = i + 1; j < number.length; j++) {
        afterDot.push(number[j]);
      }
      break;
    }
  }
  const swappedArr = [...afterDot, '.', ...beforeDot];
  let swappedString = '';

  for (let m = 0; m < swappedArr.length; m++) {
    swappedString += swappedArr[m];
  }

  return +swappedString;
};

export { min, sum, average, pow, isPrime, swapWholeAndRemainder };
