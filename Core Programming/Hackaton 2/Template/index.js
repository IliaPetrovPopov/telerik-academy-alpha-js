import {
  addFirst,
  removeFirst,
  removeLast,
  keys,
  entries,
  reverse,
  arrayFrom,
  pipe,
  compose,
  flat,
  fill,
  forEach,
  groupBy,
  reduce,
  map,
  slice,
  join,
  find,
  some,
  filter,
  includes,
  concat,
  indexOf,
  indexOf1,
  flatMap,
  every,
  findIndex,
  addLast,
  reduceRight,
} from './array-utils.js';

/*
 *  Single function tests
 *  Write tests for each function you have implemented
 */

const addFirstTest = () => {
  const arr = [1, 2, 3];

  const copy = addFirst(5)(arr);

  console.log(arr); // 1, 2, 3
  console.log(copy); // 5, 1, 2, 3
};

// addFirstTest();

/**
 * Add an element at the end of the array
 * @author Valentin Petkov <sitnox@abv.bg>
 * @param {any} element the element to add
 * @return {addLast} inner function
 */

// addLastTest

const addLastTest = () => {
  const arr = [1, 2, 3];

  const copy = addLast(5)(arr);

  const arr2 = ['a', 'b', 'c'];
  const addLast2 = addLast('d');
  const result2 = addLast2(arr2);

  const arr3 = [];
  const addLast3 = addLast('foo');
  const result3 = addLast3(arr3);

  const arr4 = ['a', 'b', 'c', 'd'];
  // eslint-disable-next-line no-undefined
  const addLast4 = addLast(undefined);
  const result4 = addLast4(arr4);

  console.log(arr); // 1, 2, 3
  console.log(copy); // 1, 2, 3, 5
  console.log(result2); // ['a', 'b', 'c', 'd']
  console.log(result3); // ['foo']
  console.log(result4); // [ 'a', 'b', 'c', 'd', undefined ]
};

/**
 * Removes the last element of the array => Tests.
 * @function removeLastTest
 * @author Georgi Naydenov <georgi3333@hotmail.com>
 * @returns Returns a copy of the array with the removed element, five tests.
 */

const removeLastTest = () => {
  const arr1 = [1, 2, 3];
  const arr2 = ['tes', 't', 'wow'];
  const arr3 = [];
  const arr4 = [null, undefined];
  const arr5 = ['123'];

  console.log(removeLast(arr1)); // [1, 2];
  console.log(removeLast(arr2)); // ['tes', 't'];
  console.log(removeLast(arr3)); // [];
  console.log(removeLast(arr4)); // [null];
  console.log(removeLast(arr5)); // [];
};

// removeLastTest();

/**
 * @author Bozhidar Lyolev <bobi_liolev@abv.bg>
 */
const keysTest = () => {
  const arr1 = [1, 2, 3, 4, 5];
  // eslint-disable-next-line no-sparse-arrays
  const arr2 = ['apple', 'banana', , 'orange', 'pear'];
  const arr3 = [
    {
      name: 'Ivan',
    },
    {
      name: 'George',
    },
    {
      name: 'Maria',
    },
  ];
  const arr4 = [];

  console.log(keys(arr1)); // [ 0, 1, 2, 3, 4 ]
  console.log(keys(arr2)); // [ 0, 1, 3, 4 ]
  console.log(keys(arr3)); // [ 0, 1, 2 ]
  console.log(keys(arr4)); // []
};

// keysTest();

/**
 * @author Chavdara Kerimova <chavdaraK@gmail.com>
 */
const entriesTest = () => {
  const arr1 = [1, 2, 3];
  const arr2 = ['test', 'wow', 123];
  const arr3 = [];
  const arr4 = [null, undefined];
  const arr5 = ['123'];

  console.log(entries(arr1)); // [[0, 1], [1, 2], [2, 3]]
  console.log(entries(arr2)); // [[0, 'test'], [1, 'wow'], [2, 123]]
  console.log(entries(arr3)); // []
  console.log(entries(arr4)); // [[0, null], [1, undefined]]
  console.log(entries(arr5)); // [[0, '123']]
};

// entriesTest();

/**
 * Fills elements of array with value from start up to, but not including, end. This should not change the original array.
 *
 * @author Georgi Naydenov <georgi3333@hotmail.com>
 * @function fillTest
 * @param {value} any The value to fill array with.
 * @param {start} number: The start position.
 * @param {end} number: The end position.
 * @returns Returns a closure that will fill the passed array with the value. (five test cases)
 */

const fillTest = () => {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2, 3, 4];
  const arr3 = [1, 2, 4324];

  console.log(fill(0, 2, 4)(arr1)); // [1, 2, 0, 0, 5];
  console.log(fill(0, 2, 4)(arr2)); // [1, 2, 0, 0];
  console.log(fill(5, 1)(arr2)); // [1, 5, 5, 5];
  console.log(fill(6)(arr2)); // [6, 6, 6, 6];
  console.log(fill()(arr3)); // [ undefined, undefined, undefined ];
};

// fillTest();

/**
 * @author Chavdara Kerimova <chavdaraK@gmail.com>
 */
const forEachTest = () => {
  const arr1 = [1, 2, 3];
  const arr2 = ['tes', 't', 'wow'];
  const arr3 = [];

  const logNumber = (number) => console.log(number);
  const logString = (string) => console.log(string);

  const logArr1 = forEach(logNumber);
  const logArr2 = forEach(logString);

  logArr1(arr1); // 1 2 3
  logArr2(arr2); // 'tes' 't' 'wow'
  logArr2(arr3); //
};

// forEachTest();

/**
 * @author Bozhidar Lyolev <bobi_liolev@abv.bg>
 */
const joinTest = () => {
  const arr1 = [1, 2, 3, 4, 5];
  // eslint-disable-next-line no-sparse-arrays
  const arr2 = ['Hello', 'Viktor', 'or', 'Kiril'];
  const arr3 = [];

  console.log(join('$')(arr1)); // "1$2$3$4$5";
  console.log(join('+')(arr1)); // "1+2+3+4+5";
  console.log(join(0)(arr1)); // "102030405";
  console.log(join(' ')(arr2)); // "Hello Viktor or Kiril";
  console.log(join()(arr3).length); // 0;
};
// joinTest()

/**
 * Finds the first element in an array using a predicate function or returns null if it fails.
 * @author Valentin Petkov <sitnox@abv.bg>
 * @param {any} predicate function that accepts an element and (optionally) an index, and returns a boolean value.
 * @return {find} inner function
 */

const addFindTest = () => {
  const arr = [1, 2, 3, 4, 5];
  const isEven = (num) => num % 2 === 0;
  console.log(find(isEven)(arr)); // 2

  const arr2 = [10, 20, 30, 40, 50];
  const predicate2 = (num) => num > 40;
  const result2 = find(predicate2)(arr2);

  const arr3 = ['dog', 'cat', 'bird', 'fish'];
  const predicate3 = (animal) => animal.includes('fly');
  const result3 = find(predicate3)(arr3);

  const arr4 = 'not an array';
  const predicate4 = (val) => val > 5;
  const result4 = find(predicate4)(arr4);

  const isGreaterThanTen = (num) => num > 10;
  console.log(find(isGreaterThanTen)(arr)); // null
  console.log(result2); // 50
  console.log(result3); // null
  console.log(result4); // null
};

// addFindTest()

/**
 * @author Bozhidar Lyolev <bobi_liolev@abv.bg>
 */
const someTest = () => {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 3, 5];
  const arr3 = [];
  const arr4 = ['Hello', 'Viktor', 'or', 'Kiril'];

  console.log(some((el) => el % 2 === 0)(arr1)); // true
  console.log(some((el) => el % 2 === 0)(arr2)); // false
  console.log(some((el) => el % 2 === 0)(arr3)); // false
  console.log(some((el) => typeof el === 'string')(arr4)); // true
  console.log(some((el) => typeof el === 'string')(arr1)); // false
  console.log(some((el) => typeof el === 'string')(arr3)); // false
};
// someTest();

/**
 * Iterates over elements of a collection and returns true if all the elements pass the predicate function's condition, otherwise returns false.
 * @author Valentin Petkov <sitnox@abv.bg>
 * @param {any} predicate function that accepts an element and (optionally) an index, and returns a boolean value.
 * @return {every} inner function
 */

const addEveryTest = () => {
  const arr = [2, 4, 6, 8];
  const emptyArr = [];
  const isEven = (num) => num % 2 === 0;

  const arr2 = ['apple', 'banana', 'cherry'];
  const predicate2 = (fruit) => fruit.includes('orange');
  const result2 = every(predicate2)(arr2);

  const arr3 = [10, '20', true, '30'];
  const predicate3 = (val) => typeof val === 'number';
  const result3 = every(predicate3)(arr3);

  const arr4 = 'not an array';
  const predicate4 = (val) => val > 5;
  const result4 = every(predicate4)(arr4);

  console.log(every(isEven)(arr)); // true
  console.log(every(isEven)(emptyArr)); // false
  console.log(result2); // false
  console.log(result3); // false
  console.log(result4); // false
};

/* Concatenates the elements from one array with the elements of another creating a result array with all the elements.

* @author Kaloyan Drinchev <kalloyand@gmail.com>
* @param {arr} arr The array to concatenate with
* @returns Returns a closure that will concatenate the passed inner array with the already received outer.
*/

const concatTest = () => {
  const mixedArray = [
    1,
    'two',
    true,
    {
      three: 3,
    },
    [4, 5],
  ];
  const numberArray = [10, 20, 30, 40, 50];
  const stringArray = [
    'front-end',
    'back-end',
    'junior',
    'senior',
    'project manager',
  ];
  const objectArray = [
    {
      name: 'Alice',
      age: 25,
    },
    {
      name: 'Bob',
      age: 30,
    },
    {
      name: 'Charlie',
      age: 35,
    },
  ];
  const nestedArray = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  console.log(concat(mixedArray)(numberArray)); // [ 1, 'two', true, { three: 3 }, [ 4, 5 ], 10, 20, 30, 40, 50 ]
  console.log(concat(stringArray)(objectArray));
  /*
  [
  'front-end',
  'back-end',
  'junior',
  'senior',
  'project manager',
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
]
  */
  console.log(concat(nestedArray)(stringArray));
  /*
[
  [ 1, 2 ],
  [ 3, 4 ],
  [ 5, 6 ],
  'front-end',
  'back-end',
  'junior',
  'senior',
  'project manager'
]
  */
};
// concatTest();

/**
 * *Iterates over elements of collection and reducing all of them in a single value.
 * @author Kaloyan Drinchev <kalloyand@gmail.com>
 * @param {function} fnThe reducer function that will accept an accumulator and the next element and will return the updated accumulator.
 * @param {initialValue} initialValue The accumulator's initial value.
 * Returns a closure that will iterate over the passed array and will call the received reducer function with the accumulator variable and the current element. Return the accumulator at the end.
 */
const reduceTest = () => {
  const years = [7, 83, 72, 14];
  const numberArray2 = [10, 5, 20, 15, 25];
  const fruitArray = [
    'apple',
    'banana',
    'cherry',
    'banana',
    'date',
    'apple',
    'cherry',
    'elderberry',
  ];

  console.log(
    reduce((acc, num) => {
      if (acc < num) {
        acc = num;
      }
      return acc;
    }, 0)(years)
  ); // Expected output: 83

  console.log(
    reduce((acc, val) => Math.max(acc, val), -Infinity)(numberArray2)
  ); // Expected output: 25
  console.log(
    reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {})(fruitArray)
  ); // Expected output:{ apple: 2, banana: 2, cherry: 2, date: 1, elderberry: 1 }
};
// reduceTest();

/**
 * @author Kaloyan Drinchev <kalloyand@gmail.com>
 *Finds and returns the first index of the searched element in the array. If the element does not exist in the array, return -1.
 * @param {searchedElement} searchedElement The element to search for.
 * @returns  Returns a closure that will iterate over the passed array in and will check if the searched element is there. If its there return its index, otherwise return -1.If there are more than one occurrences of the element, the index of the first is returned.
 */

const indexOfTestCases = () => {
  const animal = ['j', 'a', 'b', 'a'];
  const numbers = [10, 20, 30, 40, 50];
  const fruits = [
    'banana',
    'cherry',
    'banana',
    'apple',
    'date',
    'apple',
    'cherry',
    'elderberry',
  ];
  console.log(indexOf1('b')(animal)); // Expected output: 2
  console.log(indexOf1(60)(numbers)); // Expected output: -1
  console.log(indexOf1('apple')(fruits)); // Expected output: 3
};
// indexOfTestCases();

/**
 * @author Kaloyan Drinchev <kalloyand@gmail.com>
 */
const arrayFromTestCases = () => {
  const obj = {
    length: 6,
  };
  console.log(arrayFrom(obj));
};
// arrayFromTestCases();
/**
 * Iterates over elements of a collection and returns true if the searched element is one of them. Otherwise return false.
 *
 * @author Georgi Naydenov <georgi3333@hotmail.com>
 * @param {element} element The element to search for.
 * @returns boolean: Returns a closure that will iterate over the passed array in and will check if the searched element is there.
 * If its there return true, otherwise return false. 4 tests performed.
 */

const includesTest = () => {
  const array1 = [1, 2, 3];
  const array2 = ['ford', 'opel', 'bmw', 'kia'];

  console.log(includes(1)(array1)); // true
  console.log(includes('bmw')(array2)); // true
  console.log(includes('1')(array1)); // false
};

// includesTest();

/**
 * Transform each of the elements of an array using a mapping function. The mapping function must always return an array.
 * Flat the array of arrays after the mapping function and return the result.
 *
 * @author Georgi Naydenov <georgi3333@hotmail.com>
 * @function flatMapTest
 * @param {mapperFn} any The mapping function. It must return an array.
 * @param {arr} array: Array
 * @returns Returns a closure that will iterate over the passed array and will call the mapping function with each of the elements.
 * Flat the result of the mapping and return it.
 */

const flatMapTest = () => {
  const arr1 = [1, 2, 1];
  const strArr = ['It"s Sunny in', '', 'California'];

  const result = flatMap((num) => (num = num * 2))(arr1);
  const result2 = flatMap((num) => (num === 2 ? [2, 2] : 1))(arr1);
  const result3 = flatMap((str) => str.split(' '))(strArr);

  console.log(result); // [2, 4, 2];
  console.log(result2); // [1, 2, 2, 1];
  console.log(result3); // ["it's","Sunny","in", "", "California"];
};

// flatMapTest();

/**
 * @author Ilia Popov <ilia_popov02@abv.bg>
 */

const pipeTest = () => {
  const func1 = (x) => x - 10;
  const func2 = (x) => x + 4;
  const func3 = (x) => x / 2;

  const result1 = pipe(func1)(20);
  console.log(result1); // 10

  const result2 = pipe(func1, func2, func3)(20);
  console.log(result2); // 44

  const input3 = [1, 2, 3, 4];

  const result3 = pipe(func1, func2, func3)(input3);
  console.log(result3); // [-2.5, -2, -1.5, -1]

  const func4 = (x) => `${x} coins`;
  const func5 = (x) => `We need ${x}`;
  const result4 = pipe(func1, func4, func5)(13);
  console.log(result4); // We need 3 coins.
};

// pipeTest();

/**
 * @author Ilia Popov <ilia_popov02@abv.bg>
 */

const reduceRightTest = () => {
  const arr = [1, 2, 3];
  const initVal = 0;
  const fn = (acc, curr) => acc - curr;
  const result = reduceRight(fn, initVal)(arr);
  console.log(result); // -6

  const findMax = (a, b) => (a.value > b.value ? a : b);

  const arr1 = [
    { name: 'apple', value: 5 },
    { name: 'banana', value: 8 },
    { name: 'orange', value: 3 },
    { name: 'grape', value: 7 },
  ];
  const result1 = reduceRight(findMax, { name: '', value: -Infinity })(arr1);
  console.log(result1); // { name: 'banana', value: 8 }

  const concat = (a, b) => `${a} ${b}`;
  const arr2 = ['Good', 'morning,', 'dear', 'Telerik', 'Academy?'];

  const result2 = reduceRight(concat, '')(arr2);
  console.log(result2); // Academy Telerik dear morning, Good'
};

// reduceRightTest();

/**
 * @author Ilia Popov <ilia_popov02@abv.bg>
 */

const filterTest = () => {
  const arr = [1, 2, 3, 4, 5];
  const isOdd = (num) => num % 2 !== 0;
  const filterArr = filter(isOdd)(arr);

  console.log(filterArr); // [1, 3, 5]

  const strArr = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
  const isLong = (str) => str.length < 5;
  const filterArr1 = filter(isLong)(strArr);

  console.log(filterArr1); // ['date']

  const intArr = [-3, -2, -1, 0, 1, 2, 3];
  const isPositive = (num) => num <= 0;
  const filterArr2 = filter(isPositive)(intArr);

  console.log(filterArr2); // [-3, -2, -1]
};

// filterTest();

/**
 * @author Ilia Popov <ilia_popov02@abv.bg>
 */

const reverseTest = () => {
  const numArr = [1, 2, 3, 4, 5];
  const reverseArr = reverse(numArr);

  console.log(reverseArr); // [5, 4, 3, 2, 1]

  const strArr = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
  const reversedArr = reverse(strArr);

  console.log(reversedArr); // ["elderberry, "date", "cherry", "banana", "apple"];

  const numArr1 = [3, 2, 4, 1, 5];
  const reversed = reverse(numArr1);

  console.log(reversed); // [5, 1, 4, 2, 3]
};

// reverseTest();

/**
 * @author Bozhidar Lyolev <bobi_liolev@abv.bg>
 */
const composeTest = () => {
  const arrayForCompose = [1, 2, 3, 4, 5, 6];
  const add1 = (x) => x + 1;
  const add5 = (x) => x + 5;
  const subtract2 = (x) => x - 2;
  const divideBy2 = (x) => x / 2;
  const multiplyBy2 = (x) => x * 2;

  const composedFn1 = compose(join('$'), fill('-', 3));
  console.log(composedFn1(arrayForCompose)); // 1$2$3$-$-$-

  const composedFn2 = compose(multiplyBy2, add1);
  console.log(composedFn2(5)); // 12

  const composedFn3 = compose(subtract2, divideBy2, add5);
  console.log(composedFn3(10)); // 5.5
};
// composeTest();

/**
 * Iterates over elements of a collection and returns true if all the elements pass the predicate function's condition. Otherwise return false.
 * @author Valentin Petkov <sitnox@abv.bg>
 * @param {arr} arr the array to flat.
 * @return {flat} inner function
 */

const addFlatTest = () => {
  const arr1 = [1, [2, 3], 4];
  const result1 = flat(arr1);

  const arr2 = [1, [2, 'hello'], [true, false]];
  const result2 = flat(arr2);

  const arr3 = [];
  const result3 = flat(arr3);

  const arr4 = [1, [2, 3], [4, 5]];
  const result4 = flat(arr4);

  console.log(result1); // [1, 2, 3, 4]
  console.log(result2); // [1, 2, "hello", true, false]
  console.log(result3); // []
  console.log(result4); // [1, 2, 3, 4, 5]
  console.log(arr4); // [1, [2, 3], [4, 5]]
};

// addFlatTest

/*
 * @author Chavdara Kerimova <chavdaraK@gmail.com>
 */
const groupByTest = () => {
  const people = [
    { age: 20, name: 'Pesho' },
    { age: 24, name: 'Gosho' },
    { age: 23, name: 'Dessy' },
    { age: 24, name: 'Gerry' },
  ];
  const result1 = groupBy((person) => person.age)(people);
  console.log(result1);
  // Output:
  // {
  //   '20': [
  //     { age: 20, name: 'Pesho' }
  //   ],
  //   '23': [
  //     { age: 23, name: 'Dessy' }
  //   ],
  //   '24': [
  //     { age: 24, name: 'Gosho' },
  //     { age: 24, name: 'Gerry' }
  //   ]
  // }

  const numbers = [1, 2, 3, 4, 5, 6];
  const result2 = groupBy((number) => (number % 2 === 0 ? 'even' : 'odd'))(
    numbers
  );
  console.log(result2);
  // Output:
  // {
  //   'odd': [1, 3, 5],
  //   'even': [2, 4, 6]
  // }
};

// groupByTest();

/**
 * @author Petar Tyufekchiev <ptyufekchiev@yahoo.com>
 */

const mapTest = () => {
  const arr1 = [1, 2, 3, 4];
  const map1 = map((num) => num * 2);
  console.log(map1(arr1)); // Expected output: [2, 4, 6, 8]

  const arr2 = ['apple', 'banana', 'cherry'];
  const map2 = map((fruit) => fruit.toUpperCase());
  console.log(map2(arr2)); // Expected output: ["APPLE", "BANANA", "CHERRY"]

  const arr3 = [true, false, true];
  const map3 = map((bool) => (bool ? 'yes' : 'no'));
  console.log(map3(arr3)); // Expected output: ["yes", "no", "yes"]
};

// mapTest();

/**
 * @author Petar Tyufekchiev <ptyufekchiev@yahoo.com>
 */
const findIndexTest = () => {
  const arr1 = [1, 2, 3, 4, 5];
  const predicate1 = (elem) => elem === 3;
  const findIndex1 = findIndex(predicate1);
  console.log(findIndex1(arr1)); // Expected output: 2

  const arr2 = [1, 2, 3, 4, 5];
  const predicate2 = (elem) => elem === 6;
  const findIndex2 = findIndex(predicate2);
  console.log(findIndex2(arr2)); // Expected output: -1

  const arr3 = ['baku', 'ferrari', 'leclerc', 'based', 'podium'];
  const predicate = (elem) => elem.includes('r');
  const findIndexFunction = findIndex(predicate);
  console.log(findIndexFunction(arr3)); // Expected output: 1
};

// findIndexTest();

/**
 * @author Petar Tyufekchiev <ptyufekchiev@yahoo.com>
 */

const sliceTest = () => {
  const arr1 = ['apple', 'microsoft', 'amazon', 'google', 'tesla'];
  const slice1 = slice(1, 4);
  console.log(slice1(arr1)); // Expected output: ['microsoft', 'amazon', 'google']

  const arr2 = [1, 2, 3, 4, 5];
  const slice2 = slice(2, 5);
  console.log(slice2(arr2)); // Expected output: [3, 4, 5]

  const arr3 = ['baku', 'ferrari', 'leclerc', 'based', 'podium'];
  const slice3 = slice(0, 3);
  console.log(slice3(arr3)); // Expected output: ['baku', 'ferrari', 'leclerc']
};

// sliceTest();

/*
 *  Composite functions tests
 */

const testOne = () => {
  const startValue = {
    length: 6,
  };
  const piped = pipe(
    arrayFrom,
    // [undefined, undefined, undefined, undefined, undefined, undefined]
    fill(1, 3, 6), // [undefined, undefined, undefined, 1, 1, 1]
    (arr) => [...arr, 8], // [undefined, undefined, undefined, 1, 1, 1, 8]
    (arr) => [...arr, 2, 3], // [undefined, undefined, undefined, 1, 1, 1, 8, 2, 3]
    slice(4, 7), // [1, 1, 8]
    removeFirst, // [1, 8]
    (arr) => [5, ...arr], // [5, 1, 8]
    reverse, // [8, 1, 5]
    map((x) => x ** 2), // [64, 1, 25]
    reduce((a, b) => a + b, 0) // 90
  );

  console.log(piped(startValue));
};

// testOne();

const testTwo = () => {
  const startValue = [
    {
      name: 'Ivan',
      age: 15,
    },
    {
      name: 'Pesho',
      age: 32,
    },
    {
      name: 'Pesho',
      age: 23,
    },
    {
      name: 'Maria',
      age: 19,
    },
  ];
  // its compose so it will run backwards
  const composed = compose(
    find((x) => x > 10), // 47
    (arr) => [...arr, 9], // [ 47, 9 ]
    (str) => [str.length], // [ 47 ]
    join('&'), // 1&false&odd&2&true&even&3&false&odd&4&true&even
    flat,
    // [1, false, 'odd', 2, true, 'even', 3, false, 'odd', 4, true, 'even']
    (arr) =>
      arr.map((el, index) => [
        el,
        index % 2 === 1,
        index % 2 === 0 ? 'odd' : 'even',
      ]),
    /* [[1, false, 'odd'],
        [2, true, 'even'],
        [3, false, 'odd'],
        [4, true, 'even']
      ]*/
    (arr) => arr.map((_, index) => index + 1),
    fill(true, 0, 7), // [true, true, true, true]
    (arr) => [...arr, 8], // [[0, 'Ivan'], [1, 'Pesho'], [2, 'Pesho'], 8]
    entries, // [[0, 'Ivan'], [1, 'Pesho'], [2, 'Pesho']]
    removeLast, // ['Ivan', 'Pesho', 'Pesho']
    (arr) => arr.map((obj) => obj.name), // ['Ivan', 'Pesho', 'Pesho', 'Maria']
    flat,
    /* [{ name: 'Ivan', age: 15 },
        { name: 'Pesho', age: 32 },
        { name: 'Pesho', age: 23 },
        { name: 'Maria', age: 19 }
      ]*/
    Object.values,
    /* [[{ name: 'Ivan', age: 15 }],
        [{ name: 'Pesho', age: 32 }, { name: 'Pesho', age: 23 }],
        [{ name: 'Maria', age: 19 }]
      ]*/
    (arr) => groupBy((obj) => obj.name)(arr)
    /* {Ivan: [{ name: 'Ivan', age: 15 }],
        Pesho: [{ name: 'Pesho', age: 32 }, { name: 'Pesho', age: 23 }],
        Maria: [{ name: 'Maria', age: 19 }]} */
  );

  console.log(composed(startValue));
};

// testTwo();

const testThree = () => {
  const startValue = [
    {
      name: 'Ivan',
      grades: [2, 4, 5],
    },
    {
      name: 'Pesho',
      grades: [3, 2, 6],
    },
    {
      name: 'Pesho',
      grades: [2, 5, 2],
    },
  ];
  const piped = pipe(
    filter((x) => x.name === 'Pesho'),
    /* [{ name: 'Pesho', grades: [3, 2, 6] },
        { name: 'Pesho', grades: [2, 5, 2] }
      ];*/
    map((x) => x.grades), // [[3, 2, 6], [2, 5, 2]]
    flat, // [3, 2, 6, 2, 5, 2]
    filter((x) => x < 4), // [3, 2, 2, 2]
    groupBy((x) => x), // { 2: [2, 2, 2], 3: [3] }
    Object.values, // [[2, 2, 2], [3]],
    flat, // [2, 2, 2, 3]
    (arr) => [7, ...arr], // [7, 2, 2, 2, 3]
    join('-'), // 7-2-2-2-3
    (str) => str.split(''), // ['7', '-', '2', '-', '2', '-', '2', '-', '3'],
    filter((_, index) => index < 5),
    map((el, index) => [index + 1, el]), // [[1, '7'], [2, '-'], [3, '2'], [4, '-'], [5, '2']]
    keys, // [0, 1, 2, 3, 4]
    removeFirst, // [1, 2, 3, 4]
    reduce((a, b) => a * b, 1) // 24
  );

  console.log(piped(startValue));
};

// testThree();
