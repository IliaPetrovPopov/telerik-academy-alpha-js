// easy

/**
 *Checks if the given prop exist in a given object.
 * @param {object} obj The object to check.
 * @param {string} prop The property to look for.
 * @returns {boolean} 'true' if the property exists, 'false' if otherwise.
 */

const existInObject = (obj, prop) => {
  for (const key in obj) {
    if (key === prop) {
      return true;
    }
  }
  return false;
};

/**
 * Removes a give prop from a given object.
 * @param {obj} obj the object to delete from
 * @param {prop} prop the prop to delete
 * @returns an object with the specific prop deleted
 */

const removeProp = (obj, prop) => {
  const newObj = {};
  for (const property in obj) {
    if (property !== prop) {
      newObj[property] = obj[property];
    }
  }
  return newObj;
};

// medium

/**
 * Create a (shallow) copy of a given object.
 * @param {object} obj The object to copy.
 * @returns {object}  A new object with the same properties and values as `obj`.
 *
 */

const copy = (obj) => {
  const copy = Object.assign({}, obj);
  return copy;
};


/**
 *Gets the types of the properties of a given object.
 * @param {obj} obj the object to extract the prop types from
 * @returns {return} array of the prop types
 */
const typeOfProps = (obj) => {
  const array = [];
  for (const key in obj) {
      array.push(typeof obj[key]);
    }
  return array;
};

// hard
/**
 * Flat all of the inner objects (just one level deep) inside of
 * a given object, placing their own properties on root level.
 * @param {object} obj The object to be flatten.
 * @returns {object} The flatten object.
 */
const flat = (obj) => {
  for ( const key in obj ) {
    if (typeof obj[key] === 'object') {
      for ( const prop in obj[key] ) {
        obj[key + '.' + prop] = obj[key][prop];
      }
      delete obj[key];
    }
  }

  return obj;
};


/**
 *Extract all of the entries (key-value pairs) from a given object.
 * @param {obj} obj the object to extract the entries from
 * @returns {return} an array of the entries in the format [key, value]
 */
const entries = (obj) => {
  const array = [];
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      array.push([key, obj[key]]);
    }
  }
  return array;
};

export { existInObject, typeOfProps, copy, removeProp, flat, entries };
