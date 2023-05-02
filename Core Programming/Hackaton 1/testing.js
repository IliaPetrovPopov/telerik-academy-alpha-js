import * as utils from "./utils/index.js";

// Arrays

const reverse = () => {
  const array = [1, 2, 3];
  const reversed = utils.reverse(array);

  console.log(reversed);
  // => [3, 2, 1]

  console.log(array);
  // => [1, 2, 3]
};

const fill = () => {
  const array = [1, 2, 3];

  const filled = utils.fill(array, "a");
  const filledNewArr = utils.fill(Array(3), 2);
  const filledInRange = utils.fill([4, 6, 8, 10], "*", 1, 3);

  console.log(filled);
  // => ['a', 'a', 'a']

  console.log(filledNewArr);
  // => [2, 2, 2]

  console.log(filledInRange);
  // => [4, '*', '*', 10]

  console.log(array);
  // => [1, 2, 3]
  // array is not changed!
};



const join = () => {
  const joined = utils.join(["a", "b", "c"], "~");
  const joinedAgain = utils.join(['c', 'b', 'd'], '&');

  console.log(joined);
  // => 'a~b~c'

  console.log(joinedAgain);
  // => 'c&b&d'
};


const indexOf = () => {
  const index1 = utils.indexOf([7, 5, 9, 2], 2);
  const index2 = utils.indexOf([1, 5, 9, 2], 11);
  const index3 = utils.indexOf([6, 5, 9, '2'], 2);

  console.log(index1);
  // => 3
  console.log(index2);
  // => -1
  console.log(index3);
  // => -1
};

const filter = () => {
  // TODO
};

const zip = () => {
  const zipped = utils.zip(['a', 'b'], [1, 2], [true, false]);
  const zipped2 = utils.zip(['a', 'b'], [1, 2], [true, false], ['one', 'two']);
  const zipped3 = utils.zip(['a', 'b'], [1, 2]);
  const zipped4 = utils.zip(['a', 'b'], [1, 2, 5, 6, 4, 3], ['a', 'b'], ['c', 'd']);

  console.log(zipped);
  // => [['a', 1, true], ['b', 2, false]]

  console.log(zipped2);
  // => [['a', 1, true, 'one'], ['b', 2, false, 'two']]

  console.log(zipped3);
  // => [['a', 1], ['b', 2]]

  console.log(zipped4);
};

const arrays = () => {
  const separators = ["-", "_", "~"];
  const array = [1, 2, 3, 4, 5, 6];

  const filled = utils.fill(array, 0, 2, 4); // [1, 2, 0, 0, 5, 6]
  const reversed = utils.reverse(filled); // [6, 5, 0, 0, 2, 1]
  const filtered = utils.filter(reversed, (x) => x % 2 === 0); // [6, 0, 0, 2]
  const index = utils.indexOf(filtered, 6); // 0
  const joined = utils.join(filtered, separators[index]); // 6-0-0-2
  const zipped = utils.zip(array, joined.split("")); // [[1, 6], [2, -], [3, 0], [4, -], [5, 0], [6, -]]

  console.log(zipped);
};

// Math

const min = () => {
  const minElement = utils.min([1, -2, 3]);
  const nextMin = utils.min([1, -10000, 1000, -9999, 232]);

  console.log(minElement);
  // => -2

  console.log(nextMin);
  // => -10000
};


const sum = () => {
  const sum = utils.sum([1, -2, 3]);
  const sum1 = utils.sum([1, 200, 35]);
  const sum2 = utils.sum([-1, -2, -3]);
  const sum3 = utils.sum([1, "6", 3]);

  console.log(sum);
  console.log(sum1);
  console.log(sum2);
  console.log(sum3);
};

const pow = () => {
  const result = utils.pow(2, 3);
  const result2 = utils.pow(2, 0);
  const result3 = utils.pow(2, null);

  console.log(result);
  // => 8

  console.log(result2);
  // => 1

  console.log(result3);
  // => null


};

const average = () => {
  const average = utils.average([1, -2, 3]);
  const average2 = utils.average([1, 13, undefined]);

  console.log(average);
  // => 0.6666666666666666

  console.log(average2);
  // => 7
};

const isPrime = () => {
  const prime = utils.isPrime(41);
  const prime1 = utils.isPrime(121);

  console.log(prime);
  // => true

  console.log(prime1);
  // => false
};

const swapWholeAndRemainder = () => {
  const number = 2.1;
  const number2 = 43231.234;
  const number3 = -3.2
  const swapped = utils.swapWholeAndRemainder(number);
  const swapped2 = utils.swapWholeAndRemainder(number2);
  const swapped3 = utils.swapWholeAndRemainder(number3);

  console.log(swapped);
  // => 1.2

  console.log(swapped2);
  // => 234.43231

  console.log(swapped3);
  // => 'Number should be positive!' 
};

const math = () => {
  const array = [2, 3, 4, 5, 6, 7];

  const min = utils.min(array); // 2
  const sum = utils.sum(array); // 27
  const pow = utils.pow(min, sum); // 134217728

  const powArray = pow.toString().split("").map(Number);
  const average = utils.average(powArray).toFixed(2); // 3.89
  const swapped = utils.swapWholeAndRemainder(average); // 89.3
  const isPrime = utils.isPrime(Math.floor(swapped)); // true

  console.log(isPrime);
};

// Objects

const existInObject = () => {
  // TODO
};

const removeProp = () => {
  const result = utils.removeProp({
    a: 5,
    b: 6
  }, 'a');

  const result2 = utils.removeProp({
    test: 13,
    moreTest: null
  }, 'test');

  console.log(result);
  // => { b: 6 }

  console.log(result2);
  // => { moreTest: null }
};

const copy = () => {
  // TODO
};

const typeOfProps = () => {
  const result = utils.typeOfProps({
    a: 5,
    b: 'hello',
    c: true
  });

  console.log(result);
  // => ['number', 'string', 'boolean']
};

const flat = () => {
  const result1 = utils.flat({ a: 5, b: 6 });
  const result2 = utils.flat({ a: 5, b: { c: 6, d: 7 } });
  const result3 = utils.flat({ a: 5, b: { c: { d: 1 }, e: { f: 4 } } });

  console.log(result1);
  // => { a: 5, b: 6 }

  console.log(result2);
  // => { a: 5, 'b.c': 6, 'b.d': 7 }

  console.log(result3);
  // => { a: 5, 'b.c': Object, 'b.e': Object}
};

const entries = () => {
  const result = utils.entries({
    a: 5,
    b: 6,
    c: 7
  });

  const result2 = utils.entries({
    a: 5,
    b: 6,
    c: undefined,
    d: function () {
      return 'Telerik Academy';
    }
  });


  console.log(result);
  // => [['a', 5], ['b', 6], ['c', 7]]

  console.log(result2);
  // => [['a', 5], ['b', 6], ['c', undefined] , ['d', [Function: d]]]
};

const objects = () => {
  const object = {
    name: "Pesho",
    age: 20,
    isAlive: true,
    address: {
      street: 'Al Malinov',
      number: 34
    },
  };

  const flatten = utils.flat(object); // { name: 'Pesho', age: 20, isAlive: true, address.street: 'Al Malinov', address.number: 34 }
  const removedPropCopy = utils.removeProp(flatten, "address.number"); // { name: 'Pesho', age: 20, isAlive: true, address.street: 'Al Malinov' }
  const exactCopy = utils.copy(removedPropCopy); // { name: 'Pesho', age: 20, isAlive: true, address.street: 'Al Malinov' }
  const propTypes = utils.typeOfProps(exactCopy); // ['string', 'number', 'boolean', 'string']
  const entries = utils.entries(propTypes); // [[0, 'string'], [1, 'number], [2, 'boolean'], [3, 'string']]
  const existInObject = utils.existInObject(entries, "3"); // true

  console.log(flatten);
  console.log(removedPropCopy);
  console.log(exactCopy);
  console.log(propTypes);
  console.log(entries);
  console.log(existInObject);
};

// Strings

const slice = () => {
  // TODO
};

const repeat = () => {
  const stars = utils.repeat('*', 3);
  const abc = utils.repeat('abc', 2);
  const nothing = utils.repeat('abc', 0);
  const primitive = utils.repeat(null, 2);

  console.log(stars);
  // => '***'

  console.log(abc);
  // => 'abcabc'

  console.log(nothing);
  // => ''

  console.log(primitive);
  // => 'nullnull'
};

const capitalize = () => {
  const capitalized = utils.capitalize('FRED');
  const capitalized1 = utils.capitalize('FrEdDiE M');

  console.log(capitalized);
  // => 'Fred'

  console.log(capitalized1);
  // => Freddie m
};

const replace = () => {
  const replacement = utils.replace('The cree', 'e', 'is');
  const replacement2 = utils.replace('More than you think', 't', '*');
  const replacement3 = utils.replace('More than you think', ' ', '-');

  console.log(replacement);
  // => 'This crisis'

  console.log(replacement2);
  // => 'More *han you *hink'

  console.log(replacement3);
  // => 'More-than-you-think'
};

const split = () => {
  // TODO
};

const trim = () => {
  const result = utils.trim('   hello   ');
  const result2 = utils.trim('Telerik   ');
  const result3 = utils.trim('        Telerik');
  console.log(result);
  // => hello (no whitespace)

  console.log(result2);
  // => Telerik (no whitespace)

  console.log(result3);
  // => Telerik (no whitespace)
};

const strings = () => {
  const string = utils.repeat("  home", 2); //   home  home
  const trimmed = utils.trim(string); // home  home
  const sliced = utils.slice(trimmed, 1, 8); // ome  ho
  const replaced = utils.replace(sliced, "o", "ri"); // rime  hri
  const capitalized = utils.capitalize(replaced); // Rime  hri
  const splitted = utils.split(capitalized, " "); // ['Rime', '', 'hri']

  console.log(string);
  console.log(trimmed);
  console.log(sliced);
  console.log(replaced);
  console.log(capitalized);
  console.log(splitted);
};

// Expressions

const isMinLength = () => {
  const result1 = utils.isMinLength('asd', 2);
  const result2 = utils.isMinLength('asd', 4);

  console.log(result1);
  // => true

  console.log(result2);
  // => false
};

const isMaxLength = () => {
  const result1 = utils.isMaxLength('asd', 2);
  const result2 = utils.isMaxLength('asd', 4);
  const result3 = utils.isMaxLength('', 1);

  console.log(result1);
  // => false

  console.log(result2);
  // => true

  console.log(result3);
  // => true
};

const isIn = () => {
  // TODO
};

const isArrayOfType = () => {
  const result1 = utils.isArrayOfType([1, 2, 3, 4], 'number');
  const result2 = utils.isArrayOfType([1, 2, 'hello', 4], 'number');
  const result3 = utils.isArrayOfType([], 'boolean');

  console.log(result1);
  // => true

  console.log(result2);
  // => false

  console.log(result3);
  // => false
};

const areValidNumbers = () => {
  const result1 = utils.areValidNumbers(['1', '2', '3', '4']);
  const result2 = utils.areValidNumbers(['1', '2', 'apple', '4']);
  const result3 = utils.areValidNumbers(['1', 'banana', 'pineapple', undefined]);

  console.log(result1);
  // => true

  console.log(result2);
  // => false

  console.log(result3);
  // => false
};

const sumNumbersFromString = () => {
  const result = utils.sumNumbersFromString('2 4 5 4 10');
  const result2 = utils.sumNumbersFromString('');
  const result3 = utils.sumNumbersFromString(' 45 4 10');

  console.log(result);
  // 25
  console.log(result2);
  // 0
  console.log(result3);
  // 59
};

const expressions = () => {
  const string = "1 0 1 1 0 2";

  const isMinLen = utils.isMinLength(string, 3); // true
  const isMaxLen = utils.isMaxLength(string, 11); // true
  const sum = utils.sumNumbersFromString(string); // 5

  const splitted = string.split(" ");
  const areValidNumbers = utils.areValidNumbers(splitted); // true
  const isArrayOfType = utils.isArrayOfType(splitted, "string"); // true
  const isIn = utils.isIn("2", splitted); // true

  const validations = [
    isMinLen,
    isMaxLen,
    areValidNumbers,
    isArrayOfType,
    isIn,
  ];

  const areAllCorrect =
    validations.every((validation) => validation === true) &&
    validations.length === sum;

  console.log(areAllCorrect);
};

// Arrays

// reverse();
// fill();
// join();
// indexOf();
// filter();
// zip();
// arrays();

// Math

// min();
// sum();
// average();
// pow();
// isPrime();
// swapWholeAndRemainder();
// math();

// Objects

// existInObject();
// removeProp();
// copy();
// typeOfProps();
// flat();
// entries();
// objects();

// Strings

// slice();
// repeat();
// capitalize();
// replace();
// split();
// trim();
// strings();

// Expressions

// isMinLength();
// isMaxLength();
// isIn();
// isArrayOfType();
// areValidNumbers();
// sumNumbersFromString();
// expressions();
