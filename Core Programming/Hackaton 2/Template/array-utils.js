// easy

/**
 * Add an element at front of the array
 *
 * @param {any} element the element to add
 * @return {addFirstFunc} inner function
 */
const addFirst = (element) => {
  /**
   * @function addFirstFunc
   * @param {array} arr an array to add element into
   * @return {array} a copy of the array with the element added
   */
  return (arr) => [element, ...arr];
};

const removeFirst = (arr) => arr.slice(1); // it does not take additional parameters to be splitted

/**
 * Add an element at the end of the array
 * @author Valentin Petkov <sitnox@abv.bg>
 * @param {any} element the element to add
 * @return {addLast} inner function
 */

const addLast = (element) => {
  /**
   * @function addLast
   * @param {arr} arr an array to add element into
   * @return {array} a copy of the array with the element added in the end
   */
  return (arr) => [...arr, element];
};

/**
 * Removes the last element of the array.
 *
 * @param {arr} array  The array to remove from.
 * @returns {addFirstFunc} inner function
 */

const removeLast = (arr) => {
  /**
   *
   * @author Georgi Naydenov <georgi3333@hotmail.com>
   * @function addFirstFunc
   * @param {arr} array  The array to remove from.
   * @returns {array} Returns a copy of the array with the removed element.
   */

  const arrayCopy = [...arr];
  return arrayCopy.splice(0, arrayCopy.length - 1);
};

/**
 * Get the array's valid indexes.
 *
 * @author Bozhidar Lyolev <bobi_liolev@abv.bg>
 * @param {any[]} arr The array to get the indexes from.
 * @return {number[]} Returns a new array with the valid indexes.
 */
const keys = (arr) => {
  return arr
    .map((element, index) => index)
    .filter((value) => value !== 'undefined');
};

/**
 * Get the array's entries in the form of key-value pairs [index, element].
 *
 * @author Chavdara Kerimova <chavdaraK@gmail.com>
 * @param {any[]} arr an array to get the entries from.
 * @return {any[]} a new array with the valid entries in the form [index, element].
 */
const entries = (arr) => {
  return arr.map((element, index) => [index, element]);
};

/**
 * Creates a copy of an array from the start to the end index.
 *
 * @author Petar Tyufekchiev <ptyufekchiev@yahoo.com>
 * @param {number} start The start index to copy from.
 * @param {number} end  The end index to copy to.
 * @returns {function} Returns a closure that will create a copy of the array from the start to the end index.
 */
const slice = (start, end) => {
  return (arr) => {
    return arr.filter((_, i) => i >= start && i < end);
  };
};
/**
 *Concatenates the elements from one array with the elements of another creating a result array with all the elements.
 *
 * @author Kaloyan Drinchev <kalloyand@gmail.com>
 * @param {arr} arr The array to concatenate with
 * @returns Returns a closure that will concatenate the passed inner array with the already received outer.
 */

const concat = (arr) => {
  return (innerArr) => [...arr, ...innerArr];
};

// medium
/**
 * Create a reversed copy of the array so that the first element becomes the last, the second element becomes the second to last, and so on.
 *
 * @author Ilia Popov <ilia_popov02@abv.bg>
 *
 * @param {arr} arr The array to reverse.
 * @returns {arr} The reversed array.
 */
const reverse = (arr) => {
  const reverse = [];
  arr.map((element) => reverse.unshift(element));
  return reverse;
};

/**
 * Adds all the elements of an array into a string, separated by the specified separator string.
 *
 * @author Bozhidar Lyolev <bobi_liolev@abv.bg>
 * @param {string} separator The element separator.
 * @return {arrInnerFunction} Returns a closure that will join the elements of the array with the passed separator.
 */
const join = (separator) => {
  /**
   *@function arrInnerFunction
   *@param {arr} arr The array with elements.
   *@return {string} Return a string.
   */

  return (arr) => {
    return arr.reduce((acc, element, index) => {
      return index === 0 ? element : acc + separator.toString() + element;
    }, ''); // check if the index is 0, and return the element, so we can start with the first element in the array, not with the separator
  };
};

/**
 * Finds the first element in an array using a predicate function or returns null if it fails.
 *
 * @author Valentin Petkov <sitnox@abv.bg>
 * @param {any} predicate function that accepts an element and (optionally) an index, and returns a boolean value.
 * @return {find} inner function
 */

const find = (predicate) => {
  /**
   * @function find
   * @param {acc} acc accumulator that starts from null value
   * @param {el} el every element from the given array arr
   * @return {array} Returns a closure that will use the predicate function to find the first element in the array that will return true and returns it. Otherwise return null. Either returns the element or null.
   */
  return (arr) => {
    if (!Array.isArray(arr)) {
      return null;
    }
    return arr.reduce((acc, el) => {
      if (predicate(el) && acc === null) {
        return el;
      }
      return acc;
    }, null);
  };
};

/**
 * Fills elements of array with value from start up to, but not including, end. This should not change the original array.
 *
 * @author Georgi Naydenov <georgi3333@hotmail.com>
 * @param {value} any The value to fill array with.
 * @param {start} number: The start position.
 * @param {end} number: The end position.
 * @returns {addFirstFunc} inner function
 */

const fill = (value, start = 0, end = Infinity) => {
  /**
   *
   * @function addFirstFunc
   * @param {arr} array  The array which is cloned and the three parameteres(value, start, end) are implemented
   * @returns {array} Returns a closure that will fill the passed array with the value.
   */

  return (arr) => {
    const arrClone = [...arr];
    return arrClone.map((element, index) =>
      index >= start && index < end ? (arrClone[index] = value) : element
    );
  };
};

/**
 * Call a function with each of the elements of an array as a parameter.
 *
 * @author Chavdara Kerimova <chavdaraK@gmail.com>
 * @param {function} fn The function to call with each element
 * @returns {function} A closure that iterates over the passed array and calls the received function with each of the elements
 */
const forEach = (fn) => {
  /**
   * @param {array} arr An array to iterate over
   */
  return (arr) => {
    const arrLength = arr.length;
    let i = 0;
    const nextEl = () => {
      if (i < arrLength) {
        fn(arr[i]);
        i++;
        nextEl();
      }
    };
    nextEl();
  };
};

/**
 * Transform each of the elements of an array using a mapping function.
 *
 * @author Petar Tyufekchiev <ptyufekchiev@yahoo.com>
 * @param {function} mapperFn - The mapping function to call with each element of the input array.
 * @returns {function} - A closure that iterates over the array and calls the mapper function for each element. Returns an array containing the results.
 */

const map = (mapperFn) => {
  return (arr) => {
    const reducer = (acc, curr, index) => {
      return [...acc, mapperFn(curr, index)];
    };
    return arr.reduce(reducer, []);
  };
};

/**
 *Iterates over elements of collection, returning an array of all elements the passed function returns truthy for.
 *
 * @author Ilia Popov <ilia_popov02@abv.bg>
 * @param {boolean} predicate A function that accepts an element and (optionally) an index, and returns a boolean value.
 * @returns {any} Returns a closure that will iterate over the passed array and will call the received predicate function with each of the elements.
 */
const filter = (predicate) => {
  /**
   * @function filterFunction
   * @param {array} arr An array to iterate over.
   * @returns  Returns an array of all elements the passed function returns truthy for.
   */

  return (arr) => {
    return arr.reduce((acc, curr, index) => {
      if (predicate(curr, index)) {
        acc.push(curr);
      }

      return acc;
    }, []);
  };
};
/**
 *Iterates over elements of collection and reducing all of them in a single value.
 *
 * @author Kaloyan Drinchev <kalloyand@gmail.com>
 * @param {function} fnThe reducer function that will accept an accumulator and the next element and will return the updated accumulator.
 * @param {initialValue} initialValue The accumulator's initial value.
 * @returns Returns a closure that will iterate over the passed array and will call the received reducer function with the accumulator variable and the current element. Return the accumulator at the end.
 */

const reduce = (fn, initialValue) => {
  return (arr) => {
    let acc = initialValue;
    arr.forEach((el, index) => {
      acc = fn(acc, arr[index]);
    });
    return acc;
  };
};

/**
 * Iterates over elements of collection backwards and reducing all of them in a single value.
 *
 * @author Ilia Popov <ilia_popov02@abv.bg>
 * @param {function} fn The reducer function that will accept an accumulator and the next element and will return the updated accumulator.
 * @param {any} initialValue The accumulator's initial value.
 * @returns Returns a closure that will iterate over the passed array in reverse order and will call the received reducer function with the accumulator variable and the current element.
 */

const reduceRight = (fn, initialValue) => {
  /**
   * @function reduceRightFunction
   * @param {array} arr Array that will be iterated.
   * @returns {any} Returns accumulator in the end after closure is done.
   */
  return (arr) => {
    let accumulator = initialValue;
    arr.reverse().map((current) => {
      accumulator = fn(accumulator, current);
    });
    return accumulator;
  };
};
/**
 *Iterates over elements of a collection and returns true if at least one of them passes the predicate function's condition. Otherwise return false.
 *
 * @author Bozhidar Lyolev <bobi_liolev@abv.bg>
 * @param {predicate} predicate A function that accepts an element and (optionally) an index, and returns a boolean value.
 * @return {arrInnerFunction} Returns a closure that will iterate over the passed array in and will call the received predicate function with each of the elements.  If a single one of the calls returns true, return true. Otherwise return false.
 */
const some = (predicate) => {
  /**
   * @function arrInnerFunction
   *
   * @param {arr} arr As input it takes array
   * @return {arr} If a single one of the calls returns true, return true. Otherwise return false.
   */
  return (arr) => arr.map(predicate).includes(true);
};

/**
 * Iterates over elements of a collection and returns true if all the elements pass the predicate function's condition, otherwise returns false.
 *
 * @author Valentin Petkov <sitnox@abv.bg>
 * @param {any} predicate function that accepts an element and (optionally) an index, and returns a boolean value.
 * @return {every} inner function
 */

const every = (predicate) => {
  /**
   * @function every
   * @return {arr} Returns a closure that will iterate over the passed array in and will call the received predicate function with each of the elements. If all of the calls return true, return true. Otherwise return false.
   */

  return (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
      return false;
    }
    return arr.reduce((acc, el) => {
      if (!predicate(el)) {
        return false;
      }
      return acc;
    }, true);
  };
};

/**
 * Iterates over elements of a collection and returns true if the searched element is one of them. Otherwise return false.
 *
 * @author Georgi Naydenov <georgi3333@hotmail.com>
 * @param {element} element The element to search for.
 * @returns {addFirstFunc} inner function
 */

const includes = (element) => {
  /**
   * @function addFirstFunc
   * @param {element} element The element to search for.
   * @returns boolean: Returns a closure that will iterate over the passed array in and will check if the searched element is there. If its there return true, otherwise return false.
   */

  return (arr) => arr.some((item) => (item === element ? true : false));
};

/**
 * Finds and returns the first index of the searched element in the array. If the element does not exist in the array, return -1.
 *
 * @author Kaloyan Drinchev <kalloyand@gmail.com>
 * @param {searchedElement} searchedElement The element to search for.
 * @returns  Returns a closure that will iterate over the passed array in and will check if the searched element is there. If its there return its index, otherwise return -1.If there are more than one occurrences of the element, the index of the first is returned.
 */

const indexOf1 = (searchedElement) => {
  return (arr) => {
    const returnedValues = [];
    return arr.reduce((acc, el, index) => {
      if (el === searchedElement) {
        returnedValues.push(index);
        return returnedValues[0];
      }
      return acc;
    }, -1);
  };
};

/**
 * Finds and returns the first index of the searched element in the array. If the element does not exist in the array, return -1.
 *
 * @author Chavdara Kerimova <chavdaraK@gmail.com>
 * @param {element} searchedElement The element to search for.
 * @returns {number} Returns a closure that will iterate over the passed array in and will check if the searched element is there. If its there return its index, otherwise return -1.If there are more than one occurrences of the element, the index of the first is returned.
 */
const indexOf = (searchedElement) => {
  return (arr) => {
    const arrLength = arr.length;
    let i = 0;
    const search = () => {
      if (i < arrLength) {
        if (arr[i] === searchedElement) {
          return i;
        }
        i++;
        return search();
      }
      return -1;
    };

    return search();
  };
};

/**
 * Finds and returns the index of the searched element in the array based on a predicate function.
 * If the element does not exist in the array, return -1.
 *
 * @author Petar Tyufekchiev <ptyufekchiev@yahoo.com>
 * @param {function} predicate A function that accepts an element and an index, and returns a boolean value.
 * @return {function} A closure that will iterate over the passed array. If true, return the current element's index. If false return -1.
 */
const findIndex = (predicate) => {
  return (arr) => {
    const reducer = (acc, curr, index) => {
      return predicate(curr, index) & (acc === -1) ? index : acc;
    };
    return arr.reduce(reducer, -1);
  };
};

// hard
/**
 * Creates an array from object by using its length property.
 *
 * @author Kaloyan Drinchev <kalloyand@gmail.com>
 * @param {object} length An object that has the length property.
 * @returns Returns the created array with length equal to the passed object's length property, filled with undefined values.
 */

const arrayFrom = ({ length }) => {
  const undefinedArray = new Array(length);
  return undefinedArray.fill('undefined');
};

/**
 *Accepts any number of functions and creates a sequence where the output of the last function becomes the input for the next.
 *
 * @author Ilia Popov <ilia_popov02@abv.bg>
 * @param  {...fns} fns The functions to pipe.
 * @returns Returns a closure that will iterate over the passed array of functions and will call the each of them with the output of the last.
 */

const pipe = (...fns) => {
  /**
   * @function reduce
   * @param {any} input The input for the first function
   * @returns {any} Return the result after all the functions are called.
   */
  return (input) => {
    return fns.reduce((acc, currentF) => {
      acc = currentF(input);
      input = acc;

      return acc;
    }, input);
  };
};
/**
 *Accepts any number of functions and creates a sequence where the output of the last function becomes the input for the next. It runs trough the functions in reverse order.
 *
 * @author Bozhidar Lyolev <bobi_liolev@abv.bg>
 * @param {...fns} fns functions to compose
 * @return {any} Returns a closure that will iterate over the passed array of functions and will call the each of them in with the output of the last reverse order. At the end, return the result of the final one. The input for the first (in this case last) function will be passed as a parameter to the closure.
 */
const compose = (...fns) => {
  return (input) =>
    fns.reduceRight((acc, currentFunc) => {
      acc = currentFunc(input);
      input = acc; // The input become the result of the last function.

      return acc;
    }, null); // The acc will be null, because we don't know what will be the output.
};

/**
 * Iterates over elements of a collection and returns true if all the elements pass the predicate function's condition. Otherwise return false.
 *
 * @author Valentin Petkov <sitnox@abv.bg>
 * @param {arr} arr the array to flat.
 * @return {flat} inner function
 */

const flat = (arr) => {
  /**
   * @function reduce
   * @param {acc} acc accumulator as a empty list
   * @param {el} el element of the array given above
   * @return {acc} Returns the flatten array - all of the inner array elements are replaced by their own elements.
   */
  return arr.reduce((acc, el) => {
    if (Array.isArray(el)) {
      return acc.concat(flat(el));
    }
    return acc.concat(el);
  }, []);
};

/**
 * Transform each of the elements of an array using a mapping function. The mapping function must always return an array.
 * Flat the array of arrays after the mapping function and return the result.
 *
 * @author Georgi Naydenov <georgi3333@hotmail.com>
 * @function flatMap
 * @param {mapperFn} any The mapping function. It must return an array.
 * @param {arr} array: Array
 * @returns Returns a closure that will iterate over the passed array and will call the mapping function with each of the elements.
 * Flat the result of the mapping and return it.
 */

const flatMap = (mapperFn) => {
  return (arr) => {
    return arr.reduce((accumulator, presentEl) => {
      return accumulator.concat(mapperFn(presentEl));
    }, []);
  };
};

/**
 * Creates an object that will group the array values by a passed grouping function. The object keys will be all of the unique groupings and the values will be an array of the group entries.
 *
 * @author Chavdara Kerimova <chavdaraK@gmail.com>
 * @param {Function} groupingFn - The grouping function. It accepts an element and returns the group identifier.
 * @returns {Function} - Returns a closure that will iterate over the passed array and call the grouping function with each element. The resulting unique group identifier will be the key for the resulting object, with the values being arrays of group members.
 */
const groupBy = (groupingFn) => {
  return (arr) => {
    const groups = {};
    arr.forEach((element) => {
      const groupKey = groupingFn(element);
      if (groupKey in groups) {
        groups[groupKey].push(element);
      } else {
        groups[groupKey] = [element];
      }
    });
    return groups;
  };
};

export {
  addFirst,
  removeFirst,
  addLast,
  removeLast,
  keys,
  entries,
  slice,
  concat,
  reverse,
  join,
  find,
  fill,
  forEach,
  map,
  filter,
  reduce,
  reduceRight,
  some,
  every,
  includes,
  indexOf,
  indexOf1,
  findIndex,
  arrayFrom,
  pipe,
  compose,
  flat,
  flatMap,
  groupBy,
};
